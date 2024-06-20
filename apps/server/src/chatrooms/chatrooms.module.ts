import { Module } from '@nestjs/common';
import { ChatroomsController } from './chatrooms.controller';
import { ChatroomsService } from './chatrooms.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Chatroom } from './chatrooms.model';
import { ChatroomsRepository } from './chatrooms.repository';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [SequelizeModule.forFeature([Chatroom]), UsersModule],
  controllers: [ChatroomsController],
  providers: [ChatroomsService, ChatroomsRepository],
})
export class ChatroomsModule {}
