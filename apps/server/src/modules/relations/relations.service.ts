import { Injectable } from '@nestjs/common';
import { RelationsRepository } from './relations.repository';
import { UsersService } from '../users/users.service';
import { GetRelationsQueryto } from './dtos/get-relations.dto';
import { User } from '../users/users.model';
import { Op } from 'sequelize';

@Injectable()
export class RelationsService {
  constructor(
    private relationsRepository: RelationsRepository,
    private usersService: UsersService,
  ) {}

  async getAllByCondition(userId: string, query: GetRelationsQueryto) {
    const user = await this.usersService.getOneById(userId);

    return user.getRelations({
      where: {
        type: query.type,
        isAccepted: query.isAccepted,
      },
      include: [
        {
          model: User,
          where: {
            [Op.not]: {
              id: userId,
            },
          },
        },
      ],
    });
  }
}
