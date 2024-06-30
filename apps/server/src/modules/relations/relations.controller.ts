import { Body, Controller, Get, Post, Query, UseGuards } from '@nestjs/common';
import { RefreshTokenAuthorizationGuard } from '../users/refresh-token-authorization.guard';
import { CurrentUser } from '../users/decorators/current-user.decorator';
import { User } from '../users/users.model';
import { RelationsService } from './relations.service';
import { GetRelationsQueryDto } from './dtos/get-relations.dto';
import { CreateRelationBodyDto } from './dtos/create-relation.dto';

@Controller('relations')
export class RelationsController {
  constructor(private relationsService: RelationsService) {}

  @Get('')
  @UseGuards(RefreshTokenAuthorizationGuard)
  getRelations(
    @CurrentUser() user: User,
    @Query() query: GetRelationsQueryDto,
  ) {
    return this.relationsService.getAllByCondition(user.id, query);
  }

  @Post('')
  @UseGuards(RefreshTokenAuthorizationGuard)
  createRelation(
    @CurrentUser() user: User,
    @Body() body: CreateRelationBodyDto,
  ) {
    return this.relationsService.create(user, body);
  }
}
