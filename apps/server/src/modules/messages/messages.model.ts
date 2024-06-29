import {
  BeforeFind,
  BelongsTo,
  Column,
  ForeignKey,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';
import { DataTypes, Optional } from 'sequelize';
import {
  generateBinaryUUID,
  generateUUIDFieldOptions,
  overrideHookOptions,
} from 'src/utils';
import { User } from 'src/modules/users/users.model';
import { Chatroom } from 'src/modules/chatrooms/chatrooms.model';

export interface MessageAttributes {
  id: string;
  content: string;
  userId: string;
  chatroomId: string;
  isDeleted: boolean;
}

export type MessageCreationAttributes = Optional<MessageAttributes, 'id'>;

@Table
export class Message extends Model<
  MessageAttributes,
  MessageCreationAttributes
> {
  @PrimaryKey
  @Column({
    ...generateUUIDFieldOptions<Message>('id'),
    defaultValue: generateBinaryUUID,
  })
  id: string;

  @Column
  content: string;

  @ForeignKey(() => User)
  @Column({
    ...generateUUIDFieldOptions<Message>('userId'),
    allowNull: false,
  })
  userId: string;

  @BelongsTo(() => User)
  user?: User;

  @ForeignKey(() => Chatroom)
  @Column({
    ...generateUUIDFieldOptions<Message>('chatroomId'),
    allowNull: false,
  })
  chatroomId: string;

  @BelongsTo(() => Chatroom)
  chatroom?: Chatroom;

  @Column({
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  })
  isDeleted: boolean;

  @BeforeFind
  static BeforeFindUUID(options: any) {
    overrideHookOptions(options);
  }
}
