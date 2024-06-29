import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { UserRelation } from './user-relations.model';

@Module({
  imports: [SequelizeModule.forFeature([UserRelation])],
})
export class UserRelationsModule {}
