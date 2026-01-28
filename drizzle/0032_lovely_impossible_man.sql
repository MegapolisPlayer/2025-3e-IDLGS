ALTER TABLE "userTextbookLinker" ALTER COLUMN "readProgress" SET DATA TYPE numeric;--> statement-breakpoint
ALTER TABLE "userTextbookLinker" ALTER COLUMN "readProgress" SET DEFAULT '0';--> statement-breakpoint
ALTER TABLE "bookmark" ADD COLUMN "uuid" text NOT NULL;--> statement-breakpoint
ALTER TABLE "highlight" ADD COLUMN "uuid" text NOT NULL;