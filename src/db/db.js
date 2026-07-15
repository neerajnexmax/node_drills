import { drizzle } from 'drizzle-orm/node-postgres'; //orm for postgresql
import { Pool } from 'pg'; //connect to posgres db.

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
});


export const db = drizzle(pool);
