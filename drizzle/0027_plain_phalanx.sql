CREATE TABLE "message" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "message_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"text" text DEFAULT '' NOT NULL,
	"lang" text DEFAULT 'en' NOT NULL
);
--> statement-breakpoint
ALTER TABLE "course" ADD COLUMN "archived" boolean DEFAULT false NOT NULL;--> statement-breakpoint
ALTER TABLE "textbook" ADD COLUMN "archived" boolean DEFAULT false NOT NULL;--> statement-breakpoint
ALTER TABLE "user" ADD COLUMN "clickedOnLastMessage" boolean DEFAULT true NOT NULL;