import {
  BeforeSave,
  Column,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';
import {
  generateBinaryUUID,
  generateUUIDFieldOptions,
  hashPassword,
} from '../utils/index';

@Table
export class User extends Model {
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

  @BeforeSave
  static async BeforeSaveHook(instance: User) {
    if (instance.changed('password') && instance.password) {
      instance.password = await hashPassword(instance.password);
    }
  }
}
