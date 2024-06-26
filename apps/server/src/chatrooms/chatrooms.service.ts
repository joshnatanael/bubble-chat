import { Injectable, NotFoundException } from '@nestjs/common';
import { ChatroomsRepository } from './chatrooms.repository';
import { Chatroom } from './chatrooms.model';
import { CreateChatroomBodyDto } from './dtos/create-chatroom.dto';
import { UsersService } from 'src/users/users.service';
import { Sequelize } from 'sequelize-typescript';
import { Attributes, FindOptions, Transaction } from 'sequelize';
import { User } from 'src/users/users.model';
import { UpdateChatroomBodyDto } from './dtos/update-chatroom.dto';

@Injectable()
export class ChatroomsService {
  constructor(
    private chatroomsRepository: ChatroomsRepository,
    private usersService: UsersService,
    private sequelize: Sequelize,
  ) {}

  getAllByUser(userId: string): Promise<Chatroom[]> {
    return this.chatroomsRepository.getAllByUserId(userId);
  }

  async getOneById(chatroomId: string): Promise<Chatroom> {
    const chatroom = await this.chatroomsRepository.getOneById(chatroomId);

    if (!chatroom) {
      throw new NotFoundException({
        code: 'NotFoundById',
        message: 'Chatroom not found',
      });
    }

    return chatroom;
  }

  async getOneByCondition(options: FindOptions<Attributes<Chatroom>>) {
    const chatroom = await this.chatroomsRepository.getOneByCondition({
      ...options,
    });

    if (!chatroom) {
      throw new NotFoundException({
        code: 'NotFoundByCondition',
        message: 'Chatroom not found',
      });
    }

    return chatroom;
  }

  async create(userId: string, body: CreateChatroomBodyDto): Promise<Chatroom> {
    try {
      const users = await Promise.all(
        [...body.userIds, userId].map(
          async (userId) => await this.usersService.getOneById(userId),
        ),
      );

      const chatroomName = (() => {
        if (!!body.name) return body.name;
        return users
          .map((user) => {
            if (!user.firstName) return user.email;
            return `${user.firstName}${user.lastName ? ` ${user.lastName}` : ''}`;
          })
          .join(', ');
      })();

      return this.sequelize.transaction(async (t) => {
        const chatroom = await this.chatroomsRepository.create(chatroomName, {
          transaction: t,
        });

        await chatroom.addUsers(users, { transaction: t });

        return chatroom;
      });
    } catch (error) {
      console.log(error);

      throw error;
    }
  }

  async deleteChatroom(
    userId: string,
    chatroomId: string,
    transaction?: Transaction,
  ) {
    const chatroom = await this.getOneByCondition({
      where: {
        id: chatroomId,
      },
      include: {
        model: User,
        where: { id: userId },
      },
    });

    return chatroom.destroy({ transaction });
  }

  async updateChatroom(
    userId: string,
    chatroomId: string,
    chatroomData: UpdateChatroomBodyDto,
  ) {
    const chatroom = await this.getOneByCondition({
      where: {
        id: chatroomId,
      },
      include: {
        model: User,
        where: { id: userId },
      },
    });

    chatroom.set(chatroomData);

    return chatroom.save();
  }

  async leaveChatroom(userId: string, chatroomId: string) {
    const chatroom = await this.getOneByCondition({
      where: {
        id: chatroomId,
      },
      include: {
        model: User,
        where: { id: userId },
      },
    });

    const user = await this.usersService.getOneById(userId);

    return chatroom.removeUser(user);
  }

  async getUsersChatroom(userId: string, chatroomId: string) {
    const chatroom = await this.getOneByCondition({
      where: {
        id: chatroomId,
      },
      include: {
        model: User,
        where: { id: userId },
      },
    });

    return chatroom.getUsers();
  }
}
