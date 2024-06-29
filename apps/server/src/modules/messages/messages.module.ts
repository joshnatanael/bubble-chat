import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Message } from './messages.model';
import { MessagesController } from './messages.controller';
import { MessagesService } from './messages.service';
import { MessagesRepository } from './messages.repository';

@Module({
  imports: [SequelizeModule.forFeature([Message])],
  controllers: [MessagesController],
  providers: [MessagesService, MessagesRepository],
})
export class MessagesModule {}
