import { Pool } from 'pg';
export const createClient = () => {
  let pool: Pool;
  if (process.env.NODE_ENV === 'development') {
    pool = new Pool({
      user: 'postgres',
      host: 'localhost',
      database: 'postgres',
      password: 'postgres',
      port: 5432,
      ssl: false,
    });
  } else {
    pool = new Pool({
      user: 'postgres',
      host: 'localhost',
      database: 'postgres',
      password: 'postgres',
      port: 5432,
      ssl: {
        rejectUnauthorized: false,
        ca: process.env.CA_CERT,
      },
    });
  }
  return pool.connect();
};
