import { Pool } from 'pg';
import { envConfig } from './env';

const pool = new Pool({
  user: envConfig.PG_USER,
  host: envConfig.PG_HOST,
  database: envConfig.PG_DB,
  password: envConfig.PG_PASS,
  port: envConfig.PG_PORT,
});

export default pool;
