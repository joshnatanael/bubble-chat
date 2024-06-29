import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { SequelizeModule } from '@nestjs/sequelize';
import sequelizeConfig from './config/sequelize.config';
import { JoiPipeModule } from 'nestjs-joi';
import { joiPipeConfig } from './config/joi-pipe.config';
import { ConfigModule } from '@nestjs/config';
import { commonConfig } from './config/common.config';
import { authConfig } from './config/auth.config';
import { UsersModule } from './modules/users/users.module';
import { ChatroomsModule } from './modules/chatrooms/chatrooms.module';
import { UserChatroomsModule } from './modules/user-chatrooms/user-chatrooms.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: process.env.NODE_ENV
        ? `.env.${process.env.NODE_ENV}`
        : `.env`,
      load: [commonConfig, authConfig],
    }),
    DatabaseModule,
    SequelizeModule.forRoot({
      ...sequelizeConfig,
      autoLoadModels: true,
      synchronize: true,
    }),
    JoiPipeModule.forRoot(joiPipeConfig),
    UsersModule,
    ChatroomsModule,
    UserChatroomsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
