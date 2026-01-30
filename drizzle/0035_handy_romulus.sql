CREATE TABLE "courseMessage" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "courseMessage_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"course" integer NOT NULL,
	"createdAt" timestamp NOT NULL,
	"content" text DEFAULT '' NOT NULL,
	"author" integer NOT NULL,
	"uuid" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE "courseMessageComment" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "courseMessageComment_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"courseMessage" integer NOT NULL,
	"createdAt" timestamp NOT NULL,
	"comment" text DEFAULT '' NOT NULL,
	"author" integer NOT NULL,
	"uuid" text NOT NULL
);
--> statement-breakpoint
ALTER TABLE "assignmentComment" DROP CONSTRAINT "assignmentComment_author_user_id_fk";
--> statement-breakpoint
ALTER TABLE "courseMessage" ADD CONSTRAINT "courseMessage_course_course_id_fk" FOREIGN KEY ("course") REFERENCES "public"."course"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "courseMessage" ADD CONSTRAINT "courseMessage_author_user_id_fk" FOREIGN KEY ("author") REFERENCES "public"."user"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "courseMessageComment" ADD CONSTRAINT "courseMessageComment_courseMessage_courseMessage_id_fk" FOREIGN KEY ("courseMessage") REFERENCES "public"."courseMessage"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "courseMessageComment" ADD CONSTRAINT "courseMessageComment_author_user_id_fk" FOREIGN KEY ("author") REFERENCES "public"."user"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "assignmentComment" ADD CONSTRAINT "assignmentComment_author_user_id_fk" FOREIGN KEY ("author") REFERENCES "public"."user"("id") ON DELETE no action ON UPDATE no action;