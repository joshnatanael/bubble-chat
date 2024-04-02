import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JsonWebTokenError } from '@nestjs/jwt';
import { AuthGuard } from '@nestjs/passport';

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
