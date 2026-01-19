ALTER TABLE "course" DROP CONSTRAINT "course_textbook_textbook_id_fk";
--> statement-breakpoint
ALTER TABLE "course" ADD CONSTRAINT "course_textbook_textbook_id_fk" FOREIGN KEY ("textbook") REFERENCES "public"."textbook"("id") ON DELETE cascade ON UPDATE no action;