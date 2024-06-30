import { Controller, Get, Query, UseGuards } from '@nestjs/common';
import { RefreshTokenAuthorizationGuard } from '../users/refresh-token-authorization.guard';
import { CurrentUser } from '../users/decorators/current-user.decorator';
import { User } from '../users/users.model';
import { RelationsService } from './relations.service';
import { GetRelationsQueryto } from './dtos/get-relations.dto';

@Controller('relations')
export class RelationsController {
  constructor(private relationsService: RelationsService) {}

  @Get('')
  @UseGuards(RefreshTokenAuthorizationGuard)
  getRelationsByType(
    @CurrentUser() user: User,
    @Query() query: GetRelationsQueryto,
  ) {
    return this.relationsService.getAllByCondition(user.id, query);
  }
}
