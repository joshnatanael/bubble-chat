import { JoiSchema } from 'nestjs-joi';
import * as Joi from 'joi';

export class GetChatroomDetailsParamDto {
  @JoiSchema(Joi.string().required())
  chatroomId: string;
}
