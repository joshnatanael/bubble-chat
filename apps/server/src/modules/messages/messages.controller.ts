import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common';
import { MessagesService } from './messages.service';
import { RefreshTokenAuthorizationGuard } from '../users/refresh-token-authorization.guard';
import { CurrentUser } from '../users/decorators/current-user.decorator';
import { User } from '../users/users.model';
import { GetChatroomMessagesParamDto } from './dtos/get-chatroom-messages';
import { CreateMessageBodyDto } from './dtos/create-message';
import { DeleteMessageParamDto } from './dtos/delete-message';

@Controller('messages')
export class MessagesController {
  constructor(private messagesService: MessagesService) {}

  @Get('/:chatroomId')
  @UseGuards(RefreshTokenAuthorizationGuard)
  getChatroomMessages(
    @CurrentUser() user: User,
    @Param() params: GetChatroomMessagesParamDto,
  ) {
    const messages = this.messagesService.getChatroomMessages(
      user.id,
      params.chatroomId,
    );

    return messages;
  }

  @Post('')
  @UseGuards(RefreshTokenAuthorizationGuard)
  async createMessage(
    @CurrentUser() user: User,
    @Body() body: CreateMessageBodyDto,
  ) {
    const message = await this.messagesService.createMessage(user.id, body);

    return { message };
  }

  @Delete('/:messageId')
  @UseGuards(RefreshTokenAuthorizationGuard)
  deleteMessage(
    @CurrentUser() user: User,
    @Param() params: DeleteMessageParamDto,
  ) {
    const messages = this.messagesService.deleteMessage(
      user.id,
      params.messageId,
    );

    return messages;
  }
}
