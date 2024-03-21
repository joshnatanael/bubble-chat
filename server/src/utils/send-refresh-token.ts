import * as path from 'path';
import * as dotenv from 'dotenv';
import { Response } from 'express';
import { authConfig } from 'src/config/auth.config';
import { commonConfig } from 'src/config/common.config';

const env = process.env.NODE_ENV;
const dotenv_path = path.resolve(process.cwd(), env ? `.env.${env}` : '.env');
dotenv.config({ path: dotenv_path });

const aconfig = authConfig();
const cconfig = commonConfig();

const isProduction = cconfig.env === 'production';
const refreshTokenExp = aconfig.refresh_token_expiration;

export const sendRefreshToken = (res: Response, refreshToken: string) => {
  res.cookie('refresh_token', refreshToken, {
    httpOnly: true,
    maxAge: Number(refreshTokenExp),
    sameSite: isProduction ? 'strict' : 'none',
    secure: isProduction,
    domain: isProduction ? cconfig.parent_domain : undefined,
  });
};
