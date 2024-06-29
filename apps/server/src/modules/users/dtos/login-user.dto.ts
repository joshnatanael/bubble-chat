import * as Joi from 'joi';
import { JoiSchema } from 'nestjs-joi';

export class LoginUserBodyDto {
  @JoiSchema(Joi.string().required())
  credential: string;

  @JoiSchema(Joi.string().required())
  password: string;
}
