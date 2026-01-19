ALTER TABLE "courseCode" DROP CONSTRAINT "courseCode_course_course_id_fk";
--> statement-breakpoint
ALTER TABLE "courseCode" ADD CONSTRAINT "courseCode_course_course_id_fk" FOREIGN KEY ("course") REFERENCES "public"."course"("id") ON DELETE cascade ON UPDATE no action;