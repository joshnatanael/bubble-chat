import { JoiSchema } from 'nestjs-joi';
import * as Joi from 'joi';
import { RelationType } from '../relations.model';

export class GetRelationsQueryDto {
  @JoiSchema(Joi.string().required())
  type: RelationType;

  @JoiSchema(Joi.boolean().default(false))
  isAccepted?: boolean;
}
