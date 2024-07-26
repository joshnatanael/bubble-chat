import { Sequelize } from 'sequelize-typescript';
import sequelizeConfig from 'src/config/sequelize.config';
import { Chatroom } from 'src/modules/chatrooms/chatrooms.model';
import { Message } from 'src/modules/messages/messages.model';
import { Relation } from 'src/modules/relations/relations.model';
import { UserChatroom } from 'src/modules/user-chatrooms/user-chatrooms.model';
import { UserRelation } from 'src/modules/user-relations/user-relations.model';
import { User } from 'src/modules/users/users.model';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize(sequelizeConfig);
      sequelize.addModels([
        UserChatroom,
        User,
        Chatroom,
        Message,
        UserRelation,
        Relation,
      ]);
      await sequelize.sync({ force: false });
      return sequelize;
    },
  },
];
