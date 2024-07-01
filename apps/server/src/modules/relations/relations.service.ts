import { BadRequestException, Injectable } from '@nestjs/common';
import { RelationsRepository } from './relations.repository';
import { UsersService } from '../users/users.service';
import { GetRelationsQueryDto } from './dtos/get-relations.dto';
import { User } from '../users/users.model';
import { Attributes, FindOptions, Op } from 'sequelize';
import { CreateRelationBodyDto } from './dtos/create-relation.dto';
import { Sequelize } from 'sequelize-typescript';
import { Relation } from './relations.model';

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

  async getOneByCondition(options: FindOptions<Attributes<Relation>>) {
    const relation = await this.relationsRepository.getOneByCondition({
      ...options,
    });

    return relation;
  }

  async create(user: User, body: CreateRelationBodyDto) {
    try {
      if (user.id === body.userId) {
        throw new BadRequestException({
          code: 'UserIdConflict',
          message: 'User id cannot be the same',
        });
      }

      const userToAdd = await this.usersService.getOneById(body.userId);

      const relation = await this.getOneByCondition({
        include: [
          {
            model: User,
            where: { id: user.id },
          },
          {
            model: User,
            where: { id: userToAdd.id },
          },
        ],
      });

      if (relation) {
        if (relation.type === 'friend' && relation.isAccepted) {
          throw new BadRequestException({
            code: 'AlreadyFriend',
            message: 'Users already a friend',
          });
        }
        return relation;
      }

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
