import * as Joi from 'joi';
import { JoiSchema } from 'nestjs-joi';

export class UpdateStatusParamDto {
  @JoiSchema(
    Joi.string()
      .guid({ version: ['uuidv4'] })
      .required(),
  )
  userId: string;
}

export class UpdateStatusBodyDto {
  @JoiSchema(Joi.string().allow(null))
  status?: string;
}
