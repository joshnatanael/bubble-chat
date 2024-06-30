import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Relation } from './relations.model';

@Injectable()
export class RelationsRepository {
  constructor(
    @InjectModel(Relation)
    private relationModel: typeof Relation,
  ) {}
}
