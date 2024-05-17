import { registerAs } from '@nestjs/config';

export const authConfig = registerAs('auth', () => ({
  token_secret: process.env.TOKEN_SECRET || 'bubble_chat_secret',
  refresh_token_expiration:
    process.env.REFRESH_TOKEN_EXPIRATION || '2592000000',
  access_token_expiration: process.env.ACCESS_TOKEN_EXPIRATION || '15000',
}));
