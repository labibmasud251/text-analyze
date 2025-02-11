import type { Knex } from 'knex';
import dotenv from 'dotenv';

dotenv.config();

interface KnexConfig {
  [key: string]: Knex.Config;
}

const knexConfig: KnexConfig = {
  development: {
    client: 'mysql2',
    connection: {
      host: process.env.DB_HOST || 'localhost',
      user: process.env.DB_USER || 'root',
      password: process.env.DB_PASSWORD || 'labibmasud251',
      database: process.env.DB_NAME || 'text_analyzer',
    },
    migrations: {
      directory: './migrations',
    },
  },
};

export default knexConfig;