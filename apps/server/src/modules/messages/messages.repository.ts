import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Message } from './messages.model';

@Injectable()
export class MessagesRepository {
  constructor(@InjectModel(Message) private messageModel: typeof Message) {}

  create() {}
}
