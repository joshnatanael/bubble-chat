import { Sequelize } from 'sequelize-typescript';
import { Chatroom } from 'src/chatrooms/chatrooms.model';
import { UserChatroom } from 'src/user-chatrooms/user-chatrooms.model';
import { User } from 'src/users/users.model';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: 'password',
        database: 'bubble_chat',
      });
      sequelize.addModels([UserChatroom, User, Chatroom]);
      await sequelize.sync({ force: true });
      return sequelize;
    },
  },
];
