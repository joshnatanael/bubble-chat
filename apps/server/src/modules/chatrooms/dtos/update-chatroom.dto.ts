import { JoiSchema } from 'nestjs-joi';
import * as Joi from 'joi';

export class UpdateChatroomBodyDto {
  @JoiSchema(Joi.string().allow(null).optional())
  name?: string;
}

export class UpdateChatroomParamDto {
  @JoiSchema(Joi.string().required())
  chatroomId: string;
}
