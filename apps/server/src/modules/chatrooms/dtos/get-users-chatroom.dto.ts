import { JoiSchema } from 'nestjs-joi';
import * as Joi from 'joi';

export class GetUsersChatroomParamDto {
  @JoiSchema(Joi.string().required())
  chatroomId: string;
}
