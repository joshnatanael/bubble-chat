import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { UsersRepository } from './users.repository';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './users.model';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [SequelizeModule.forFeature([User]), JwtModule.register({})],
  providers: [UsersService, UsersRepository],
  controllers: [UsersController],
})
export class UsersModule {}
