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
import { RefreshTokenAuthorizationGuard } from 'src/users/refresh-token-authorization.guard';
import { CurrentUser } from 'src/users/decorators/current-user.decorator';
import { User } from 'src/users/users.model';
import { CreateChatroomBodyDto } from './dtos/create-chatroom.dto';
import { DeleteChatroomParamDto } from './dtos/delete-chatroom.dto';
import {
  UpdateChatroomBodyDto,
  UpdateChatroomParamDto,
} from './dtos/update-chatroom.dto';

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
}
