import { Injectable, UnauthorizedException, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { JsonWebTokenError } from 'jsonwebtoken';

export function UseAccessTokenGuard() {
  return UseGuards(RefreshTokenGuard);
}
@Injectable()
export class RefreshTokenGuard extends AuthGuard('refresh_token') {
  handleRequest(err: any, user: any, info: any, context: any, status: any) {
    if (info instanceof JsonWebTokenError || !user) {
      throw new UnauthorizedException({
        code: 'Unauthorized',
        message: 'JWT token is invalid or has expired',
      });
    }

    return super.handleRequest(err, user, info, context, status);
  }
}
