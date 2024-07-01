import { JoiSchema } from 'nestjs-joi';
import * as Joi from 'joi';

export class AcceptRelationParamDto {
  @JoiSchema(Joi.string().required())
  relationId: string;
}
