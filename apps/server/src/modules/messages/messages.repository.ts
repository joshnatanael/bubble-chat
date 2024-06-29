import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Message } from './messages.model';
import { Attributes, FindOptions } from 'sequelize';

@Injectable()
export class MessagesRepository {
  constructor(@InjectModel(Message) private messageModel: typeof Message) {}

  getAllByCondition(
    options: FindOptions<Attributes<Message>>,
  ): Promise<Message[] | null> {
    return this.messageModel.findAll({ ...options });
  }
}
