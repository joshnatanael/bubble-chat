import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { UsersRepository } from './users.repository';
import { User } from './users.model';
import { CreateUserBodyDto } from './dtos/create-user.dto';
import { UpdateProfileBodyDto } from './dtos/update-profile.dto';

@Injectable()
export class UsersService {
  constructor(private usersRepository: UsersRepository) {}

  getAll(): Promise<User[]> {
    return this.usersRepository.getAll();
  }

  async createUser(body: CreateUserBodyDto): Promise<User> {
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

    const user = await this.usersRepository.create(body);

    delete user.dataValues?.password;

    return user;
  }

  async getOneById(userId: string): Promise<User> {
    const user = await this.usersRepository.getOneByCondition({
      where: { id: userId },
    });

    if (!user) {
      throw new NotFoundException({
        code: 'UserNotExist',
        message: 'User not found',
      });
    }

    return user;
  }

  async updateStatus(userId: string, status?: string): Promise<User> {
    const user = await this.getOneById(userId);

    user.set({ status });

    return user.save();
  }

  async updatePassword(userId: string, password: string): Promise<User> {
    const user = await this.getOneById(userId);

    user.set({ password });

    user.save();

    delete user.dataValues?.password;

    return user;
  }

  async updateProfile(
    userId: string,
    userProfile: UpdateProfileBodyDto,
  ): Promise<User> {
    const userWithEmail = await this.usersRepository.getOneByCondition({
      where: {
        email: userProfile.email,
      },
    });

    if (!!userWithEmail && userWithEmail.id !== userId) {
      throw new BadRequestException({
        code: 'EmailExisted',
        message: 'Email already registered',
      });
    }

    const user = await this.getOneById(userId);

    user.set(userProfile);

    return user.save();
  }
}
