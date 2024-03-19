import { Injectable } from '@nestjs/common';
import { User } from './users.model';
import { InjectModel } from '@nestjs/sequelize';
import { Attributes, CreateOptions, FindOptions, Optional } from 'sequelize';

export interface UserAttributes {
  id: string;
  username: string;
  firstName?: string;
  lastName?: string;
  status?: string;
  password: string;
  email: string;
  picture?: string;
}

export type UserCreationAttributes = Optional<UserAttributes, 'id'>;

@Injectable()
export class UsersRepository {
  constructor(
    @InjectModel(User)
    private userModel: typeof User,
  ) {}

  getAll(): Promise<User[]> {
    return this.userModel.findAll({
      attributes: { exclude: ['password'] },
    });
  }

  getOneByCondition(
    options: FindOptions<Attributes<User>>,
  ): Promise<User | null> {
    return this.userModel.findOne({
      ...options,
      attributes: { exclude: ['password'] },
    });
  }

  create(
    body: UserCreationAttributes,
    options?: CreateOptions<Attributes<User>>,
  ) {
    return this.userModel.create(body, {
      ...options,
    });
  }
}
