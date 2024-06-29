import {
  BeforeBulkDestroy,
  BeforeDestroy,
  BeforeFind,
  BeforeUpdate,
  Column,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { generateUUIDFieldOptions, overrideHookOptions } from 'src/utils';
import { User } from '../users/users.model';
import { Chatroom } from '../chatrooms/chatrooms.model';

export interface UserChatroomAttributes {
  userId: string;
  chatroomId: string;
}

export type UserChatroomCreationAttributes = UserChatroomAttributes;

@Table
export class UserChatroom extends Model<
  UserChatroomAttributes,
  UserChatroomCreationAttributes
> {
  @ForeignKey(() => User)
  @Column({
    ...generateUUIDFieldOptions<UserChatroom>('userId'),
    allowNull: false,
  })
  userId: string;

  @ForeignKey(() => Chatroom)
  @Column({
    ...generateUUIDFieldOptions<UserChatroom>('chatroomId'),
    allowNull: false,
  })
  chatroomId: string;

  @BeforeFind
  static BeforeFindUUID(options: any) {
    overrideHookOptions(options);
  }

  @BeforeUpdate
  static BeforeUpdateUUID(instance: UserChatroom, options: any) {
    overrideHookOptions(options);
  }

  @BeforeDestroy
  static BeforeDestroyUUID(instance: UserChatroom, options: any) {
    overrideHookOptions(options);
  }

  @BeforeBulkDestroy
  static BeforeBulkDestroyUUID(options: any) {
    overrideHookOptions(options);
  }
}
