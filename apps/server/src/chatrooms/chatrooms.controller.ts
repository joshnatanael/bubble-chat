import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { ChatroomsService } from './chatrooms.service';
import { RefreshTokenAuthorizationGuard } from 'src/users/refresh-token-authorization.guard';
import { CurrentUser } from 'src/users/decorators/current-user.decorator';
import { User } from 'src/users/users.model';
import { CreateChatroomDto } from './dtos/create-chatroom.dto';

@Controller('chatrooms')
export class ChatroomsController {
  constructor(private chatroomsService: ChatroomsService) {}

  @Get('')
  @UseGuards(RefreshTokenAuthorizationGuard)
  async findAllUserChatroom(@CurrentUser() user: User) {
    const chatrooms = await this.chatroomsService.getAllByUser(user.id);

    return chatrooms;
  }

  @Post('')
  @UseGuards(RefreshTokenAuthorizationGuard)
  async createChatroom(
    @CurrentUser() user: User,
    @Body() body: CreateChatroomDto,
  ) {
    const chatrooms = await this.chatroomsService.create(user.id, body);

    return chatrooms;
  }
}
