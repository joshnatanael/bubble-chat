import { JoiSchema } from 'nestjs-joi';
import * as Joi from 'joi';

export class DeleteChatroomDto {
  @JoiSchema(Joi.string().required())
  chatroomId: string;
}
