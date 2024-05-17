import { Optional } from 'sequelize/types';
import {
  BeforeFind,
  BelongsToMany,
  Column,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';
import {
  generateBinaryUUID,
  generateUUIDFieldOptions,
  overrideHookOptions,
} from 'src/utils';
import { User } from 'src/users/users.model';
import { UserChatroom } from 'src/user-chatrooms/user-chatrooms.model';

export interface ChatroomAttributes {
  id: string;
  name?: string;
  picture: string;
  users?: Array<User & { UserChatroom: UserChatroom }>;
}

export type ChatroomCreationAttributes = Optional<ChatroomAttributes, 'id'>;

@Table
export class Chatroom extends Model<
  ChatroomAttributes,
  ChatroomCreationAttributes
> {
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

  @BeforeFind
  static BeforeFindUUID(options: any) {
    overrideHookOptions(options);
  }
}
