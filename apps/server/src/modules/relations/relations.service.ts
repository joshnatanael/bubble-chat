import { Injectable } from '@nestjs/common';
import { RelationsRepository } from './relations.repository';
import { UsersService } from '../users/users.service';
import { GetRelationsQueryDto } from './dtos/get-relations.dto';
import { User } from '../users/users.model';
import { Op } from 'sequelize';
import { CreateRelationBodyDto } from './dtos/create-relation.dto';
import { Sequelize } from 'sequelize-typescript';

@Injectable()
export class RelationsService {
  constructor(
    private relationsRepository: RelationsRepository,
    private usersService: UsersService,
    private sequelize: Sequelize,
  ) {}

  async getAllByCondition(userId: string, query: GetRelationsQueryDto) {
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

  async create(user: User, body: CreateRelationBodyDto) {
    try {
      const userToAdd = await this.usersService.getOneById(body.userId);

      return this.sequelize.transaction(async (t) => {
        const relation = await this.relationsRepository.create(
          body.type,
          body.type === 'friend' ? false : true,
          { transaction: t },
        );

        await relation.addUsers([user, userToAdd], { transaction: t });

        return relation;
      });
    } catch (error) {
      console.log(error);

      throw error;
    }
  }
}
