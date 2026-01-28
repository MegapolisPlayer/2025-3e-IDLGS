CREATE TABLE "bookmark" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "bookmark_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"user" integer NOT NULL,
	"article" integer NOT NULL,
	"textIndex" integer DEFAULT 0 NOT NULL
);
--> statement-breakpoint
CREATE TABLE "highlight" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "highlight_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"user" integer NOT NULL,
	"article" integer NOT NULL,
	"color" integer DEFAULT 0 NOT NULL,
	"startIndex" integer DEFAULT 0 NOT NULL,
	"endIndex" integer DEFAULT 0 NOT NULL
);
--> statement-breakpoint
ALTER TABLE "userTextbookLinker" ADD COLUMN "readProgress" integer DEFAULT 0 NOT NULL;--> statement-breakpoint
ALTER TABLE "bookmark" ADD CONSTRAINT "bookmark_user_user_id_fk" FOREIGN KEY ("user") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "bookmark" ADD CONSTRAINT "bookmark_article_article_id_fk" FOREIGN KEY ("article") REFERENCES "public"."article"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "highlight" ADD CONSTRAINT "highlight_user_user_id_fk" FOREIGN KEY ("user") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "highlight" ADD CONSTRAINT "highlight_article_article_id_fk" FOREIGN KEY ("article") REFERENCES "public"."article"("id") ON DELETE cascade ON UPDATE no action;