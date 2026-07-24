import 'dotenv/config';
import { drizzle } from 'drizzle-orm/node-postgres'; //orm for postgresql
import { Pool } from 'pg'; //connect to posgres db.
import * as schema from "./schema.js";
if (!globalThis.db) {
    if (!process.env.DATABASE_URL) {
        throw new Error("DATABASE_URL is not set in environment variables.");
    }
    const pool = new Pool({
        connectionString: process.env.DATABASE_URL,
    });
    globalThis.db = drizzle(pool, { schema: { ...schema } });
}

console.log('Schema keys:', Object.keys(schema));
if (globalThis.db) {
    console.log('Db query object keys:', Object.keys(globalThis.db.query || {}));
}

/** @type {import('drizzle-orm/node-postgres').NodePgDatabase<typeof schema>} */
export const db = process.env.NODE_ENV == "production" ? globalThis.db : drizzle(process.env.DATABASE_URL, { schema: { ...schema } });

