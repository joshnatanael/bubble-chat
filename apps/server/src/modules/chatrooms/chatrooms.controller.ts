import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { ChatroomsService } from './chatrooms.service';
import { CreateChatroomBodyDto } from './dtos/create-chatroom.dto';
import { DeleteChatroomParamDto } from './dtos/delete-chatroom.dto';
import {
  UpdateChatroomBodyDto,
  UpdateChatroomParamDto,
} from './dtos/update-chatroom.dto';
import { LeaveChatroomParamDto } from './dtos/leave-chatroom.dto';
import { GetUsersChatroomParamDto } from './dtos/get-users-chatroom.dto';
import { RefreshTokenAuthorizationGuard } from '../users/refresh-token-authorization.guard';
import { CurrentUser } from '../users/decorators/current-user.decorator';
import { User } from '../users/users.model';

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
    @Body() body: CreateChatroomBodyDto,
  ) {
    const chatroom = await this.chatroomsService.create(user.id, body);

    return chatroom;
  }

  @Delete('/:chatroomId')
  @UseGuards(RefreshTokenAuthorizationGuard)
  async deleteChatroom(
    @CurrentUser() user: User,
    @Param() params: DeleteChatroomParamDto,
  ) {
    await this.chatroomsService.deleteChatroom(user.id, params.chatroomId);

    return { message: 'Success!' };
  }

  @Put('/:chatroomId')
  @UseGuards(RefreshTokenAuthorizationGuard)
  async updateChatroom(
    @CurrentUser() user: User,
    @Param() params: UpdateChatroomParamDto,
    @Body() body: UpdateChatroomBodyDto,
  ) {
    const chatroom = await this.chatroomsService.updateChatroom(
      user.id,
      params.chatroomId,
      body,
    );

    return chatroom;
  }

  @Delete('/:chatroomId/leave')
  @UseGuards(RefreshTokenAuthorizationGuard)
  async leaveChatroom(
    @CurrentUser() user: User,
    @Param() params: LeaveChatroomParamDto,
  ) {
    await this.chatroomsService.leaveChatroom(user.id, params.chatroomId);

    return { message: 'Success!' };
  }

  @Get('/:chatroomId/users')
  @UseGuards(RefreshTokenAuthorizationGuard)
  async getUsersChatroom(
    @CurrentUser() user: User,
    @Param() params: GetUsersChatroomParamDto,
  ) {
    const users = await this.chatroomsService.getUsersChatroom(
      user.id,
      params.chatroomId,
    );

    return users;
  }
}
