import { JoiSchema } from 'nestjs-joi';
import * as Joi from 'joi';

export class DeleteMessageParamDto {
  @JoiSchema(Joi.string().required())
  messageId: string;
}
