import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { UsersModule } from './users/users.module';
import { SequelizeModule } from '@nestjs/sequelize';
import sequelizeConfig from './config/sequelize.config';
import { JoiPipeModule } from 'nestjs-joi';
import { joiPipeConfig } from './config/joi-pipe.config';

@Module({
  imports: [
    DatabaseModule,
    SequelizeModule.forRoot({
      ...sequelizeConfig,
      autoLoadModels: true,
      synchronize: true,
    }),
    JoiPipeModule.forRoot(joiPipeConfig),
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
