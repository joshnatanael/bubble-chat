import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Chatroom } from './chatrooms.model';
import { Attributes, CreateOptions, FindOptions } from 'sequelize';

@Injectable()
export class ChatroomsRepository {
  constructor(
    @InjectModel(Chatroom)
    private chatroomModel: typeof Chatroom,
  ) {}
  getOneByCondition(
    options: FindOptions<Attributes<Chatroom>>,
  ): Promise<Chatroom | null> {
    return this.chatroomModel.findOne({ ...options });
  }

  create(
    name: string,
    options?: CreateOptions<Attributes<Chatroom>>,
  ): Promise<Chatroom> {
    return this.chatroomModel.create({ name }, { ...options });
  }

  getOneById(chatroomId: string): Promise<Chatroom | null> {
    return this.chatroomModel.findOne({
      where: { id: chatroomId },
      attributes: { exclude: ['createdAt', 'updatedAt'] },
    });
  }
}
