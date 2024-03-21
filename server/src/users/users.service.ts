import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { UsersRepository } from './users.repository';
import { User } from './users.model';
import { CreateUserBodyDto } from './dtos/create-user.dto';
import { UpdateProfileBodyDto } from './dtos/update-profile.dto';
import { Op, Transaction } from 'sequelize';
import { comparePassword } from 'src/utils/compare-password';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class UsersService {
  private tokenSecret: string;
  private refreshTokenExp: string;
  private accessTokenExp: string;

  constructor(
    private usersRepository: UsersRepository,
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
  ) {
    this.tokenSecret = this.configService.get('auth.token_secret')!;
    this.refreshTokenExp = this.configService.get(
      'auth.refresh_token_expiration',
    )!;
    this.accessTokenExp = this.configService.get(
      'auth.access_token_expiration',
    )!;
  }

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

  generateAccessToken(userId: string): string {
    const payload = { userId };
    return `Bearer ${this.jwtService.sign(payload, {
      secret: this.tokenSecret,
      expiresIn: this.accessTokenExp,
    })}`;
  }

  generateRefreshToken(userId: string): string {
    const payload = { userId };
    return this.jwtService.sign(payload, {
      secret: this.tokenSecret,
      expiresIn: this.refreshTokenExp,
    });
  }

  async updateRefreshTokenByUserId(
    userId: string,
    refreshToken?: string | null,
    transaction?: Transaction,
  ) {
    const user = await this.getOneById(userId);

    user.set({ refreshToken });

    user.save({ transaction });
  }

  async invalidateRefreshToken(
    userId: string,
    transaction?: Transaction,
  ): Promise<string> {
    const refreshToken = this.generateRefreshToken(userId);

    await this.updateRefreshTokenByUserId(userId, refreshToken, transaction);

    return refreshToken;
  }

  async login(
    credential: string,
    password: string,
  ): Promise<{ user: User; refreshToken: string; accessToken: string }> {
    const user = await this.usersRepository.getOneByCondition({
      where: {
        [Op.or]: {
          username: credential,
          email: credential,
        },
      },
      attributes: {
        include: ['password'],
      },
    });

    if (!user) {
      throw new NotFoundException({
        code: 'InvalidCredentials',
        message: 'Incorrect user credentials or password',
      });
    }

    if (!user.password) {
      throw new NotFoundException({
        code: 'InvalidCredentials',
        message: 'Incorrect user credentials or password',
      });
    }

    const isCorrectPassword = await comparePassword(password, user.password);

    if (!isCorrectPassword) {
      throw new NotFoundException({
        code: 'InvalidCredentials',
        message: 'Incorrect user credentials or password',
      });
    }

    delete user.dataValues.password;

    const refreshToken = await this.invalidateRefreshToken(user.id);
    const accessToken = this.generateAccessToken(user.id);

    return { user, refreshToken, accessToken };
  }
}
