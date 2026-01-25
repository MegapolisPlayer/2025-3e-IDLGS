ALTER TABLE "message" ADD COLUMN "name" text DEFAULT '' NOT NULL;--> statement-breakpoint
ALTER TABLE "message" ADD COLUMN "content" text DEFAULT '' NOT NULL;--> statement-breakpoint
ALTER TABLE "user" ADD COLUMN "lastMessage" integer NOT NULL;--> statement-breakpoint
ALTER TABLE "message" DROP COLUMN "text";--> statement-breakpoint
ALTER TABLE "user" DROP COLUMN "clickedOnLastMessage";