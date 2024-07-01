import { JoiSchema } from 'nestjs-joi';
import * as Joi from 'joi';

export class DeleteRelationParamDto {
  @JoiSchema(Joi.string().required())
  relationId: string;
}
