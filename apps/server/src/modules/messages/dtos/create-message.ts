import { JoiSchema } from 'nestjs-joi';
import * as Joi from 'joi';

export class CreateMessageBodyDto {
  @JoiSchema(Joi.string().required())
  content: string;

  @JoiSchema(Joi.string().required())
  chatroomId: string;
}
