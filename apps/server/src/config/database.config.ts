import { registerAs } from '@nestjs/config';
import { Dialect } from 'sequelize/types';

export const databaseConfig = registerAs('database', () => ({
  username: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || 'password',
  database: process.env.DB_NAME || 'bubble_chat',
  host: process.env.DB_HOST || 'localhost',
  port: Number(process.env.DB_PORT) || 3306,
  timezone: 'Asia/Jakarta',
  dialect: (process.env.DB_DIALECT || 'mysql') as Dialect,
  dialectOptions: {
    dateStrings: true,
    typeCast: true,
    timezone: 'local',
    multipleStatements: true,
    bigNumberStrings: true,
  },
}));
