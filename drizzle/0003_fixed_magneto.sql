ALTER TABLE "question" ALTER COLUMN "type" SET DATA TYPE text;--> statement-breakpoint
ALTER TABLE "question" ALTER COLUMN "type" SET DEFAULT '';--> statement-breakpoint
ALTER TABLE "image" ADD COLUMN "refCount" integer DEFAULT 1 NOT NULL;--> statement-breakpoint
ALTER TABLE "question" ADD COLUMN "aitr" text DEFAULT '' NOT NULL;--> statement-breakpoint
ALTER TABLE "user" ADD COLUMN "readOnlyKey" text NOT NULL;--> statement-breakpoint
ALTER TABLE "user" ADD COLUMN "apiKey" text NOT NULL;