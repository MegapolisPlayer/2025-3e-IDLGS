ALTER TABLE "article" ADD COLUMN "chapter" integer NOT NULL;--> statement-breakpoint
ALTER TABLE "article" ADD COLUMN "name" text NOT NULL;--> statement-breakpoint
ALTER TABLE "article" ADD COLUMN "text" text NOT NULL;--> statement-breakpoint
ALTER TABLE "user" ADD COLUMN "name" text NOT NULL;--> statement-breakpoint
ALTER TABLE "user" ADD COLUMN "surname" text NOT NULL;--> statement-breakpoint
ALTER TABLE "user" ADD COLUMN "degree" text NOT NULL;--> statement-breakpoint
ALTER TABLE "user" ADD COLUMN "background" integer DEFAULT 1 NOT NULL;--> statement-breakpoint
ALTER TABLE "article" ADD CONSTRAINT "article_chapter_chapter_id_fk" FOREIGN KEY ("chapter") REFERENCES "public"."chapter"("id") ON DELETE no action ON UPDATE no action;