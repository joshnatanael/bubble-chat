import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Relation } from './relations.model';
import { RelationsController } from './relations.controller';
import { RelationsService } from './relations.service';
import { UsersModule } from '../users/users.module';
import { RelationsRepository } from './relations.repository';

@Module({
  imports: [SequelizeModule.forFeature([Relation]), UsersModule],
  controllers: [RelationsController],
  providers: [RelationsService, RelationsRepository],
})
export class RelationsModule {}
