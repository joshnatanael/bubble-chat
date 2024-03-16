import * as Joi from 'joi';
import { JoiSchema } from 'nestjs-joi';

export class CreateUserDto {
  @JoiSchema(Joi.string().required())
  username: string;

  @JoiSchema(Joi.string().allow(null).optional())
  firstName?: string;

  @JoiSchema(Joi.string().allow(null).optional())
  lastName?: string;

  @JoiSchema(Joi.string().allow(null).optional())
  status?: string;

  @JoiSchema(
    Joi.string()
      .pattern(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,16}$/)
      .message(
        'Password must be 8-16 characters, with, uppercase and lowercase characters, and numbers',
      )
      .required(),
  )
  password: string;

  @JoiSchema(Joi.string().email().required())
  email: string;

  @JoiSchema(Joi.string().allow(null).optional())
  picture?: string;
}
