import * as path from 'path';
import * as dotenv from 'dotenv';
import { Response } from 'express';
import { commonConfig } from 'src/config/common.config';

const env = process.env.NODE_ENV;
const dotenv_path = path.resolve(process.cwd(), env ? `.env.${env}` : '.env');
dotenv.config({ path: dotenv_path });

const cconfig = commonConfig();

const isProduction = cconfig.env === 'production';

export const sendIsLoggedIn = (res: Response, isLoggedIn: boolean) => {
  res.cookie('is_logged_in', String(isLoggedIn), {
    sameSite: isProduction ? 'strict' : 'none',
    secure: isProduction,
    domain: isProduction ? cconfig.parent_domain : undefined,
  });
};
