import {
  BeforeFind,
  Column,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { User } from '../users/users.model';
import { generateUUIDFieldOptions, overrideHookOptions } from 'src/utils';
import { Relation } from '../relations/relations.model';

export interface UserRelationAttributes {
  userId: string;
  relationId: string;
}

export type UserRelationCreationAttributes = UserRelationAttributes;

@Table
export class UserRelation extends Model<
  UserRelationAttributes,
  UserRelationCreationAttributes
> {
  @ForeignKey(() => User)
  @Column({
    ...generateUUIDFieldOptions<UserRelation>('userId'),
    allowNull: false,
  })
  userId: string;

  @ForeignKey(() => Relation)
  @Column({
    ...generateUUIDFieldOptions<UserRelation>('relationId'),
    allowNull: false,
  })
  relationId: string;

  @BeforeFind
  static BeforeFindUUID(options: any) {
    overrideHookOptions(options);
  }
}
