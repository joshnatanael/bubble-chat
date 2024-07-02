import * as Joi from 'joi';
import { JoiSchema } from 'nestjs-joi';

export class UpdateStatusBodyDto {
  @JoiSchema(Joi.string().allow(null))
  status?: string;
}
