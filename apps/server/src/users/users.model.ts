import {
  BeforeFind,
  BeforeSave,
  BelongsToMany,
  Column,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';
import {
  generateBinaryUUID,
  generateUUIDFieldOptions,
  hashPassword,
  overrideHookOptions,
} from '../utils';
import { Optional } from 'sequelize/types';
import { Chatroom } from 'src/chatrooms/chatrooms.model';
import { UserChatroom } from 'src/user-chatrooms/user-chatrooms.model';

export interface UserAttributes {
  id: string;
  username: string;
  firstName?: string;
  lastName?: string;
  status?: string;
  password: string;
  email: string;
  picture: string;
  chatrooms?: Array<Chatroom & { UserChatroom: UserChatroom }>;
  refreshToken: string;
}

export type UserCreationAttributes = Optional<
  UserAttributes,
  'id' | 'refreshToken'
>;

@Table
export class User extends Model<UserAttributes, UserCreationAttributes> {
  @PrimaryKey
  @Column({
    ...generateUUIDFieldOptions<User>('id'),
    defaultValue: generateBinaryUUID,
  })
  id: string;

  @Column({
    unique: { name: 'username_unique', msg: 'Username must be unique' },
  })
  username: string;

  @Column
  firstName?: string;

  @Column
  lastName?: string;

  @Column({
    allowNull: true,
  })
  status?: string;

  @Column
  password: string;

  @Column({
    unique: {
      name: 'email_unique',
      msg: 'Email must be unique',
    },
  })
  email: string;

  @Column({
    allowNull: true,
  })
  picture?: string;

  @Column
  refreshToken?: string;

  @BelongsToMany(() => Chatroom, () => UserChatroom)
  chatrooms?: Array<Chatroom & { UserChatroom: UserChatroom }>;

  @BeforeFind
  static BeforeFindUUID(options: any) {
    overrideHookOptions(options);
  }

  @BeforeSave
  static async BeforeSaveHook(instance: User) {
    if (instance.changed('password') && instance.password) {
      instance.password = await hashPassword(instance.password);
    }
  }
}
