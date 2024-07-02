import { Optional } from 'sequelize/types';
import {
  BeforeDestroy,
  BeforeFind,
  BelongsToMany,
  Column,
  HasMany,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';
import {
  generateBinaryUUID,
  generateUUIDFieldOptions,
  overrideHookOptions,
} from 'src/utils';
import { BelongsToManyAddAssociationsMixin } from 'sequelize';
import { BelongsToManyRemoveAssociationMixin } from 'sequelize';
import { BelongsToManyGetAssociationsMixin } from 'sequelize';
import { BelongsToManyHasAssociationMixin } from 'sequelize';
import { User } from '../users/users.model';
import { UserChatroom } from '../user-chatrooms/user-chatrooms.model';
import { Message } from '../messages/messages.model';
import { HasManyGetAssociationsMixin } from 'sequelize';

export interface ChatroomAttributes {
  id: string;
  name?: string;
  picture: string;
  users?: Array<User & { UserChatroom: UserChatroom }>;
  messages?: Array<Message>;
}

export type ChatroomCreationAttributes = Optional<ChatroomAttributes, 'id'>;

@Table
export class Chatroom extends Model<
  ChatroomAttributes,
  ChatroomCreationAttributes
> {
  declare addUsers: BelongsToManyAddAssociationsMixin<User, 'id'>;
  declare removeUser: BelongsToManyRemoveAssociationMixin<User, 'id'>;
  declare getUsers: BelongsToManyGetAssociationsMixin<User>;
  declare hasUser: BelongsToManyHasAssociationMixin<User, 'id'>;
  declare getMessages: HasManyGetAssociationsMixin<Message>;

  @PrimaryKey
  @Column({
    ...generateUUIDFieldOptions<Chatroom>('id'),
    defaultValue: generateBinaryUUID,
  })
  id: string;

  @Column
  name?: string;

  @Column
  picture?: string;

  @BelongsToMany(() => User, () => UserChatroom)
  users?: Array<User & { UserChatroom: UserChatroom }>;

  @HasMany(() => Message)
  messages?: Message[];

  @BeforeFind
  static BeforeFindUUID(options: any) {
    overrideHookOptions(options);
  }

  @BeforeDestroy
  static BeforeDestroyUUID(options: any) {
    overrideHookOptions(options);
  }
}
