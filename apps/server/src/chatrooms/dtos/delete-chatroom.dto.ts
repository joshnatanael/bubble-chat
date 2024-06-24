import { JoiSchema } from 'nestjs-joi';
import * as Joi from 'joi';

export class DeleteChatroomParamDto {
  @JoiSchema(Joi.string().required())
  chatroomId: string;
}
