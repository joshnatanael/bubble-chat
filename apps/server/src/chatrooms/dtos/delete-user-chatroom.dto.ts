import { JoiSchema } from 'nestjs-joi';
import * as Joi from 'joi';

export class DeleteUserChatroomParamDto {
  @JoiSchema(Joi.string().required())
  chatroomId: string;
}
