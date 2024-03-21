import { Body, Controller, Get, Param, Post, Put, Res } from '@nestjs/common';
import { UsersService } from './users.service';
import {
  UpdateStatusBodyDto,
  UpdateStatusParamDto,
} from './dtos/update-status.dto';
import {
  UpdatePasswordBodyDto,
  UpdatePasswordParamDto,
} from './dtos/update-password.dto';
import {
  UpdateProfileBodyDto,
  UpdateProfileParamDto,
} from './dtos/update-profile.dto';
import { CreateUserBodyDto } from './dtos/create-user.dto';
import { LoginUserBodyDto } from './dtos/login-user.dto';
import { sendRefreshToken } from 'src/utils/send-refresh-token';
import { Response } from 'express';
import { sendIsLoggedIn } from 'src/utils/send-is-logged-in';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get('')
  async findAll() {
    const users = await this.usersService.getAll();

    return users;
  }

  @Post('')
  async create(@Body() body: CreateUserBodyDto) {
    const users = await this.usersService.createUser(body);

    return users;
  }

  @Put('/:userId')
  async updateProfile(
    @Param() param: UpdateProfileParamDto,
    @Body() body: UpdateProfileBodyDto,
  ) {
    const users = await this.usersService.updateProfile(param.userId, body);

    return users;
  }

  @Put('/:userId/status')
  async updateStatus(
    @Param() param: UpdateStatusParamDto,
    @Body() body: UpdateStatusBodyDto,
  ) {
    const users = await this.usersService.updateStatus(
      param.userId,
      body.status,
    );

    return users;
  }

  @Put('/:userId/password')
  async updatePassword(
    @Param() param: UpdatePasswordParamDto,
    @Body() body: UpdatePasswordBodyDto,
  ) {
    const users = await this.usersService.updatePassword(
      param.userId,
      body.password,
    );

    return users;
  }

  @Post('/login')
  async login(
    @Body() body: LoginUserBodyDto,
    @Res({ passthrough: true }) response: Response,
  ) {
    const { user, refreshToken, accessToken } = await this.usersService.login(
      body.credential,
      body.password,
    );

    sendRefreshToken(response, refreshToken);
    sendIsLoggedIn(response, true);

    return { accessToken, user };
  }
}
