import { Pool } from 'pg';
export const createClient = () => {
  const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: 'postgres',
    port: 5432,
    ssl: false,
  });
  return pool.connect();
};
