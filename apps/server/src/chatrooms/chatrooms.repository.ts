import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Chatroom } from './chatrooms.model';
import { User } from 'src/users/users.model';
import { Attributes, CreateOptions } from 'sequelize';

@Injectable()
export class ChatroomsRepository {
  constructor(
    @InjectModel(Chatroom)
    private chatroomModel: typeof Chatroom,
  ) {}

  getAllByUserId(userId: string): Promise<Chatroom[]> {
    return this.chatroomModel.findAll({
      include: {
        model: User,
        where: {
          id: userId,
        },
        attributes: {
          exclude: ['password'],
        },
      },
    });
  }

  create(
    name: string,
    options?: CreateOptions<Attributes<Chatroom>>,
  ): Promise<Chatroom> {
    return this.chatroomModel.create({ name }, { ...options });
  }
}
