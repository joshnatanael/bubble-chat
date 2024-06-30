import { JoiSchema } from 'nestjs-joi';
import * as Joi from 'joi';
import { RelationType } from '../relations.model';

export class CreateRelationBodyDto {
  @JoiSchema(Joi.string().required())
  userId: string;

  @JoiSchema(Joi.string().required())
  type: RelationType;
}
