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
import {
  BelongsToManyAddAssociationsMixin,
  DataTypes,
  Optional,
} from 'sequelize';
import { User } from '../users/users.model';
import { UserRelation } from '../user-relations/user-relations.model';

export const relationTypeValue = ['friend', 'block'];
export type RelationType = 'friend' | 'block';

export interface RelationAttributes {
  id: string;
  type: RelationType;
  isAccepted: boolean;
}

export type RelationCreationAttributes = Optional<RelationAttributes, 'id'>;

@Table
export class Relation extends Model<
  RelationAttributes,
  RelationCreationAttributes
> {
  declare addUsers: BelongsToManyAddAssociationsMixin<User, 'id'>;

  @PrimaryKey
  @Column({
    ...generateUUIDFieldOptions<Relation>('id'),
    defaultValue: generateBinaryUUID,
  })
  id: string;

  @Column({
    type: DataTypes.ENUM('friend', 'block'),
  })
  type: RelationType;

  @Column({
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  })
  isAccepted: boolean;

  @BelongsToMany(() => User, () => UserRelation)
  users?: Array<User & { UserRelation: UserRelation }>;

  @BeforeFind
  static BeforeFindUUID(options: any) {
    overrideHookOptions(options);
  }
}
