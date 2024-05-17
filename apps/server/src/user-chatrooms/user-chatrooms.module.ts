import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { UserChatroom } from './user-chatrooms.model';

@Module({
  imports: [SequelizeModule.forFeature([UserChatroom])],
})
export class UserChatroomsModule {}
