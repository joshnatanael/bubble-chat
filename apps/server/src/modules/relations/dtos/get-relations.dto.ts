import { JoiSchema } from 'nestjs-joi';
import * as Joi from 'joi';
import { RelationType } from '../relations.model';

export class GetRelationsQueryto {
  @JoiSchema(Joi.string().required())
  type: RelationType;

  @JoiSchema(Joi.boolean())
  isAccepted?: boolean;
}
