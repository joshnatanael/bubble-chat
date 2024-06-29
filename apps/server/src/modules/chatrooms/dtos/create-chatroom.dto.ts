import { JoiSchema } from 'nestjs-joi';
import * as Joi from 'joi';

export class CreateChatroomBodyDto {
  @JoiSchema(Joi.array().items(Joi.string().required()))
  userIds: string[];

  @JoiSchema(Joi.string().allow(null).optional())
  name?: string;
}
