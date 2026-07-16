import { drizzle } from 'drizzle-orm/node-postgres'; //orm for postgresql
import { Pool } from 'pg'; //connect to posgres db.

if (!globalThis.db) {
    const pool = new Pool({
        connectionString: process.env.DATABASE_URL,
    });
    globalThis.db = drizzle(pool);
}

export const db = globalThis.db;
