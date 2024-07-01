import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Relation, RelationType } from './relations.model';
import { Attributes, CreateOptions, FindOptions } from 'sequelize';

@Injectable()
export class RelationsRepository {
  constructor(
    @InjectModel(Relation)
    private relationModel: typeof Relation,
  ) {}

  create(
    type: RelationType,
    senderId: string,
    isAccepted?: boolean,
    options?: CreateOptions<Attributes<Relation>>,
  ): Promise<Relation> {
    return this.relationModel.create(
      { type, senderId, isAccepted },
      { ...options },
    );
  }

  getOneByCondition(
    options: FindOptions<Attributes<Relation>>,
  ): Promise<Relation | null> {
    return this.relationModel.findOne({ ...options });
  }
}
