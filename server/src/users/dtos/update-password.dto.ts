import * as Joi from 'joi';
import { JoiSchema } from 'nestjs-joi';

export class UpdatePasswordParamDto {
  @JoiSchema(
    Joi.string()
      .guid({ version: ['uuidv4'] })
      .required(),
  )
  userId: string;
}

export class UpdatePasswordBodyDto {
  @JoiSchema(
    Joi.string()
      .pattern(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,16}$/)
      .message(
        'Password must be 8-16 characters, with, uppercase and lowercase characters, and numbers',
      )
      .required(),
  )
  password: string;
}
