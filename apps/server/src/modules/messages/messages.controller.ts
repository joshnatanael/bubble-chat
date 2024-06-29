import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { MessagesService } from './messages.service';
import { RefreshTokenAuthorizationGuard } from '../users/refresh-token-authorization.guard';
import { CurrentUser } from '../users/decorators/current-user.decorator';
import { User } from '../users/users.model';
import { GetChatroomMessagesParamDto } from './dtos/get-chatroom-messages';

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
}
