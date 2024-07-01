import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { RefreshTokenAuthorizationGuard } from '../users/refresh-token-authorization.guard';
import { CurrentUser } from '../users/decorators/current-user.decorator';
import { User } from '../users/users.model';
import { RelationsService } from './relations.service';
import { GetRelationsQueryDto } from './dtos/get-relations.dto';
import { CreateRelationBodyDto } from './dtos/create-relation.dto';
import { DeleteRelationParamDto } from './dtos/delete-relation.dto';

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

  @Delete('/:relationId')
  @UseGuards(RefreshTokenAuthorizationGuard)
  deleteRelation(
    @CurrentUser() user: User,
    @Param() params: DeleteRelationParamDto,
  ) {
    return this.relationsService.delete(user.id, params.relationId);
  }
}
