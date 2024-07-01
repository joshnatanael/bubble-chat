export const ENV = process.env.NODE_ENV;
export const API_BASE = process.env.NEXT_PUBLIC_API_BASE;
export const REFRESH_TOKEN_EXPIRATION = Number(
  process.env.NEXT_PUBLIC_REFRESH_TOKEN_EXPIRATION || 31536000,
);
export const PARENT_DOMAIN = process.env.NEXT_PUBLIC_PARENT_DOMAIN;
