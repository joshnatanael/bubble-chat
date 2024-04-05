import { Module } from '@nestjs/common';
import { ChatroomsController } from './chatrooms.controller';
import { ChatroomsService } from './chatrooms.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Chatroom } from './chatrooms.model';

@Module({
  imports: [SequelizeModule.forFeature([Chatroom])],
  controllers: [ChatroomsController],
  providers: [ChatroomsService],
})
export class ChatroomsModule {}
