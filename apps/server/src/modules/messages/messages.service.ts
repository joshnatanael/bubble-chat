import { Injectable, NotFoundException } from '@nestjs/common';
import { MessagesRepository } from './messages.repository';
import { Message } from './messages.model';
import { ChatroomsService } from '../chatrooms/chatrooms.service';
import { User } from '../users/users.model';
import { CreateMessageBodyDto } from './dtos/create-message';
import { Attributes, FindOptions } from 'sequelize';
import { pusherServer, toPusherKey } from 'src/utils';

@Injectable()
export class MessagesService {
  constructor(
    private messagesRepository: MessagesRepository,
    private chatroomsService: ChatroomsService,
  ) {}

  async getChatroomMessages(
    userId: string,
    chatroomId: string,
  ): Promise<Message[]> {
    const chatroom = await this.chatroomsService.getOneByCondition({
      where: {
        id: chatroomId,
      },
      include: {
        model: User,
        where: { id: userId },
      },
    });

    return this.messagesRepository.getAllByCondition({
      where: { chatroomId: chatroom.id },
      order: [['createdAt', 'ASC']],
      include: {
        model: User,
        attributes: ['firstName', 'lastName', 'email'],
      },
    });
  }

  async getOneByCondition(options: FindOptions<Attributes<Message>>) {
    const message = await this.messagesRepository.getOneByCondition({
      ...options,
    });

    if (!message) {
      throw new NotFoundException({
        code: 'NotFoundByCondition',
        message: 'Message not found',
      });
    }

    return message;
  }

  async createMessage(
    userId: string,
    body: CreateMessageBodyDto,
  ): Promise<Message> {
    const chatroom = await this.chatroomsService.getOneByCondition({
      where: {
        id: body.chatroomId,
      },
      include: {
        model: User,
        where: { id: userId },
      },
    });

    const message = await this.messagesRepository.create({
      ...body,
      userId,
      chatroomId: chatroom.id,
    });

    pusherServer.trigger(
      toPusherKey(`chat:${body.chatroomId}`),
      'incomming-message',
      { ...message.dataValues, user: chatroom.users[0], userId },
    );

    return message;
  }

  async deleteMessage(userId: string, messageId: string): Promise<Message> {
    const message = await this.getOneByCondition({
      where: { userId, id: messageId },
    });

    message.set({ isDeleted: true });

    return message.save();
  }
}
