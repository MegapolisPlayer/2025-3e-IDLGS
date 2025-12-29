import { PostgresJsDatabase } from 'drizzle-orm/postgres-js';
import { schema } from '$lib/server/db/mainSchema';

export type DBType = PostgresJsDatabase<typeof schema>;
