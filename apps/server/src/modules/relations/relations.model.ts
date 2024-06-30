import {
  BelongsToMany,
  Column,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';
import { generateBinaryUUID, generateUUIDFieldOptions } from 'src/utils';
import { DataTypes, Optional } from 'sequelize';
import { User } from '../users/users.model';
import { UserRelation } from '../user-relations/user-relations.model';

export type RelationType = 'friend' | 'block';

export interface RelationAttributes {
  id: string;
  type: RelationType;
}

export type RelationCreationAttributes = Optional<RelationAttributes, 'id'>;

@Table
export class Relation extends Model<
  RelationAttributes,
  RelationCreationAttributes
> {
  @PrimaryKey
  @Column({
    ...generateUUIDFieldOptions<Relation>('id'),
    defaultValue: generateBinaryUUID,
  })
  id: string;

  @Column({
    type: DataTypes.ENUM('friend', 'block'),
  })
  content: RelationType;

  @Column({
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  })
  isAccepted: boolean;

  @BelongsToMany(() => User, () => UserRelation)
  users?: Array<User & { UserRelation: UserRelation }>;
}
