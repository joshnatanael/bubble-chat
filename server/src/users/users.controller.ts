import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dtos/create-user.dto';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get('')
  async findAll() {
    const users = await this.usersService.getAll();

    return users;
  }

  @Post('')
  async create(@Body() body: CreateUserDto) {
    const users = await this.usersService.createUser(body);

    return users;
  }
}
