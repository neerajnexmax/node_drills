import { drizzle } from 'drizzle-orm/node-postgres'; //orm for postgresql
import { Pool } from 'pg'; //connect to posgres db.
import * as schema from "./schema.js";

if (!globalThis.db) {
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
export const db = globalThis.db;

