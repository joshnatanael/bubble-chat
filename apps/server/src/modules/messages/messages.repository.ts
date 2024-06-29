import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Message, MessageCreationAttributes } from './messages.model';
import { Attributes, CreateOptions, FindOptions } from 'sequelize';

@Injectable()
export class MessagesRepository {
  constructor(@InjectModel(Message) private messageModel: typeof Message) {}

  getAllByCondition(
    options: FindOptions<Attributes<Message>>,
  ): Promise<Message[] | null> {
    return this.messageModel.findAll({ ...options });
  }

  getOneByCondition(
    options: FindOptions<Attributes<Message>>,
  ): Promise<Message | null> {
    return this.messageModel.findOne({ ...options });
  }

  create(
    body: MessageCreationAttributes,
    options?: CreateOptions<Attributes<Message>>,
  ): Promise<Message> {
    return this.messageModel.create(body, { ...options });
  }
}
