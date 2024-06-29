import { JoiSchema } from 'nestjs-joi';
import * as Joi from 'joi';

export class LeaveChatroomParamDto {
  @JoiSchema(Joi.string().required())
  chatroomId: string;
}
