/*
	db/index.ts
	Martin Bykov
*/

import "dotenv/config";
import { drizzle } from "drizzle-orm/postgres-js";
import { env } from "$env/dynamic/private";
import postgres from "postgres";
import * as schema from "./schema";

if (!env.DATABASE_URL) throw Error("DATABASE_URL not set!");

const client = postgres(env.DATABASE_URL, { prepare: false });
export const db = drizzle(client, { schema });