import { Injectable, NotFoundException } from '@nestjs/common';
import { MessagesRepository } from './messages.repository';
import { Message } from './messages.model';
import { ChatroomsService } from '../chatrooms/chatrooms.service';
import { User } from '../users/users.model';
import { CreateMessageBodyDto } from './dtos/create-message';
import { Attributes, FindOptions } from 'sequelize';

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

    if (!chatroom) {
      throw new NotFoundException({
        code: 'NotFoundById',
        message: 'Chatroom not found',
      });
    }

    return this.messagesRepository.getAllByCondition({
      where: { chatroomId },
      order: [['createdAt', 'DESC']],
    });
  }

  async getOneByCondition(options: FindOptions<Attributes<Message>>) {
    const chatroom = await this.messagesRepository.getOneByCondition({
      ...options,
    });

    if (!chatroom) {
      throw new NotFoundException({
        code: 'NotFoundByCondition',
        message: 'Message not found',
      });
    }

    return chatroom;
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

    if (!chatroom) {
      throw new NotFoundException({
        code: 'NotFoundById',
        message: 'Chatroom not found',
      });
    }

    return this.messagesRepository.create({ ...body, userId });
  }

  async deleteMessage(userId: string, messageId: string): Promise<Message> {
    const message = await this.getOneByCondition({
      where: { userId, id: messageId },
    });

    message.set({ isDeleted: true });

    return message.save();
  }
}
