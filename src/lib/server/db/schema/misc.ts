import { pgTable, text, integer } from 'drizzle-orm/pg-core';
import { user } from './user';

//only for admin
export const blog = pgTable('blog', {
	id: integer('id').primaryKey().generatedAlwaysAsIdentity().notNull(),
	text: text('text').notNull().default(''),
	author: integer('user')
		.references(() => user.id)
		.notNull(),
});
