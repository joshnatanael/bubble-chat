import { Column, ForeignKey, Model, Table } from 'sequelize-typescript';
import { User } from 'src/users/users.model';
import { generateUUIDFieldOptions } from '../utils';
import { Chatroom } from 'src/chatrooms/chatrooms.model';

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
    ...generateUUIDFieldOptions<User>('id'),
    allowNull: false,
  })
  userId: string;

  @ForeignKey(() => Chatroom)
  @Column({
    ...generateUUIDFieldOptions<User>('id'),
    allowNull: false,
  })
  chatroomId: string;
}
