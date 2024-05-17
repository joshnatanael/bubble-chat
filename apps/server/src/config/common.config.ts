import { registerAs } from '@nestjs/config';

export const commonConfig = registerAs('common', () => ({
  env: process.env.NODE_ENV,
  parent_domain: process.env.PARENT_DOMAIN,
}));
