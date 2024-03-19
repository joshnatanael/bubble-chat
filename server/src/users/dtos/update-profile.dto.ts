import * as Joi from 'joi';
import { JoiSchema } from 'nestjs-joi';

export class UpdateProfileParamDto {
  @JoiSchema(
    Joi.string()
      .guid({ version: ['uuidv4'] })
      .required(),
  )
  userId: string;
}

export class UpdateProfileBodyDto {
  @JoiSchema(Joi.string().allow(null).optional())
  firstName?: string;

  @JoiSchema(Joi.string().allow(null).optional())
  lastName?: string;

  @JoiSchema(Joi.string().email().required())
  email: string;

  @JoiSchema(Joi.string().allow(null).optional())
  picture?: string;
}
