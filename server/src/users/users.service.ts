import { BadRequestException, Injectable } from '@nestjs/common';
import { UsersRepository } from './users.repository';
import { User } from './users.model';
import { CreateUserDto } from './dtos/create-user.dto';

@Injectable()
export class UsersService {
  constructor(private usersRepository: UsersRepository) {}

  getAll(): Promise<User[]> {
    return this.usersRepository.getAll();
  }

  async createUser(body: CreateUserDto): Promise<User> {
    const userWithEmail = await this.usersRepository.getOneByCondition({
      where: {
        email: body.email,
      },
    });

    if (!!userWithEmail) {
      throw new BadRequestException({
        code: 'EmailExisted',
        message: 'Email already registered',
      });
    }

    const userWithUsername = await this.usersRepository.getOneByCondition({
      where: {
        username: body.username,
      },
    });

    if (!!userWithUsername) {
      throw new BadRequestException({
        code: 'UsernameExisted',
        message: 'Username already registered',
      });
    }

    return this.usersRepository.create(body);
  }
}
