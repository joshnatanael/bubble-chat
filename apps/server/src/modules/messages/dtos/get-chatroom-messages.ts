import { JoiSchema } from 'nestjs-joi';
import * as Joi from 'joi';

export class GetChatroomMessagesParamDto {
  @JoiSchema(Joi.string().required())
  chatroomId: string;
}
