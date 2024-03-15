import { Injectable } from '@nestjs/common';
import { UsersRepository } from './users.repository';
import { User } from './users.model';

@Injectable()
export class UsersService {
  constructor(private usersRepository: UsersRepository) {}

  getAll(): Promise<User[]> {
    return this.usersRepository.getAll();
  }
}
