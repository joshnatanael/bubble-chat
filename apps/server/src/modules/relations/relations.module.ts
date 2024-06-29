import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Relation } from './relations.model';

@Module({
  imports: [SequelizeModule.forFeature([Relation])],
})
export class RelationsModule {}
