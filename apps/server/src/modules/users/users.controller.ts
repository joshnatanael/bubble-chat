import {
  Body,
  Controller,
  Get,
  Post,
  Put,
  Req,
  UseGuards,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { UpdateStatusBodyDto } from './dtos/update-status.dto';
import { UpdatePasswordBodyDto } from './dtos/update-password.dto';
import { UpdateProfileBodyDto } from './dtos/update-profile.dto';
import { CreateUserBodyDto } from './dtos/create-user.dto';
import { LoginUserBodyDto } from './dtos/login-user.dto';
import { AccessTokenGuard } from './access-token.guard';
import { CurrentUser } from './decorators/current-user.decorator';
import { User } from './users.model';
import { RefreshTokenAuthorizationGuard } from './refresh-token-authorization.guard';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get('')
  @UseGuards(AccessTokenGuard)
  async findAll() {
    const users = await this.usersService.getAll();

    return users;
  }

  @Post('')
  async create(@Body() body: CreateUserBodyDto) {
    const { user, accessToken, refreshToken } =
      await this.usersService.createUser(body);

    return { user, accessToken, refreshToken };
  }

  @Get('/current')
  @UseGuards(AccessTokenGuard)
  async getProfile(@CurrentUser() user: User) {
    return {
      user,
    };
  }

  @Put('/')
  @UseGuards(AccessTokenGuard)
  async updateProfile(
    @CurrentUser() user: User,
    @Body() body: UpdateProfileBodyDto,
  ) {
    const users = await this.usersService.updateProfile(user.id, body);

    return users;
  }

  @Put('/status')
  @UseGuards(AccessTokenGuard)
  async updateStatus(
    @CurrentUser() user: User,
    @Body() body: UpdateStatusBodyDto,
  ) {
    const users = await this.usersService.updateStatus(user.id, body.status);

    return users;
  }

  @Put('/password')
  @UseGuards(AccessTokenGuard)
  async updatePassword(
    @CurrentUser() user: User,
    @Body() body: UpdatePasswordBodyDto,
  ) {
    const users = await this.usersService.updatePassword(
      user.id,
      body.password,
    );

    return users;
  }

  @Post('/login')
  async login(@Body() body: LoginUserBodyDto) {
    const { user, refreshToken, accessToken } = await this.usersService.login(
      body.credential,
      body.password,
    );

    return { accessToken, user, refreshToken };
  }

  @Get('/refresh-token')
  @UseGuards(RefreshTokenAuthorizationGuard)
  async refreshToken(@CurrentUser() user: User, @Req() req: Request) {
    const currentRefreshToken = req.headers['authorization'] as
      | string
      | undefined;

    const parsedRefreshToken =
      currentRefreshToken?.replace(/Bearer /, '') || '';

    const { refreshToken, accessToken } = await this.usersService.refreshToken(
      user,
      parsedRefreshToken,
    );

    return { refreshToken, accessToken };
  }

  @Get('/logout')
  @UseGuards(RefreshTokenAuthorizationGuard)
  async logout(@CurrentUser() user: User) {
    await this.usersService.logout(user);

    return { message: 'Successfully Logged Out' };
  }
}
