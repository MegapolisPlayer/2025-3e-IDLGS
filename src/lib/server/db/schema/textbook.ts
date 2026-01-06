import { pgTable, text, integer, timestamp } from 'drizzle-orm/pg-core';

export const textbook = pgTable('textbook', {
	id: integer('id').primaryKey().generatedAlwaysAsIdentity().notNull(),
	uuid: text('uuid')
		.notNull()
		.$defaultFn(() => crypto.randomUUID()),
	name: text('name').notNull().default(''),
	description: text('description').notNull().default(''),
	summary: text('summary').notNull().default(''),
	red: integer('red').notNull().default(255),
	green: integer('green').notNull().default(255),
	blue: integer('blue').notNull().default(255),
	createdAt: timestamp('createdAt')
		.notNull()
		.$defaultFn(() => new Date()),
	modifiedAt: timestamp('modifiedAt')
		.notNull()
		.$defaultFn(() => new Date()),
	subject: text('subject').notNull(),
});

export const chapter = pgTable('chapter', {
	id: integer('id').primaryKey().generatedAlwaysAsIdentity().notNull(),
	uuid: text('uuid')
		.notNull()
		.$defaultFn(() => crypto.randomUUID()),
	name: text('name').notNull(),
	summary: text('summary').notNull(),
	textbook: integer('textbook')
		.references(() => textbook.id)
		.notNull(),
});

export const article = pgTable('article', {
	id: integer('id').primaryKey().generatedAlwaysAsIdentity().notNull(),
	uuid: text('uuid')
		.notNull()
		.$defaultFn(() => crypto.randomUUID()),
	chapter: integer('chapter')
		.references(() => chapter.id)
		.notNull(),
	name: text('name').notNull(),
	text: text('text').notNull(),
});
