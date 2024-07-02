import { Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { ConfigService } from '@nestjs/config';
import { Request } from 'express';

const jwtExtractor = (req: Request) => {
  if (req && req.headers && req.headers['authorization']) {
    const currentRefreshToken = req.headers['authorization'] as
      | string
      | undefined;

    const parsedRefreshToken =
      currentRefreshToken?.replace(/Bearer /, '') || '';

    return parsedRefreshToken as string;
  }

  return null;
};

@Injectable()
export class RefreshTokenAuthorizationStrategy extends PassportStrategy(
  Strategy,
  'refresh_token_authorization',
) {
  constructor(
    private readonly usersService: UsersService,
    readonly configService: ConfigService,
  ) {
    super({
      jwtFromRequest: jwtExtractor,
      ignoreExpiration: false,
      secretOrKey: configService.get<string>('auth.token_secret'),
    });
  }

  async validate(payload: any) {
    const user = await this.usersService.getOneById(payload.userId, true);

    if (!user) return null;

    return user;
  }
}
