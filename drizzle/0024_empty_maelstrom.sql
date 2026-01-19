ALTER TABLE "assignment" DROP CONSTRAINT "assignment_course_course_id_fk";
--> statement-breakpoint
ALTER TABLE "assignmentComment" DROP CONSTRAINT "assignmentComment_assignment_assignment_id_fk";
--> statement-breakpoint
ALTER TABLE "assignmentComment" DROP CONSTRAINT "assignmentComment_author_user_id_fk";
--> statement-breakpoint
ALTER TABLE "grade" DROP CONSTRAINT "grade_course_course_id_fk";
--> statement-breakpoint
ALTER TABLE "grade" DROP CONSTRAINT "grade_user_user_id_fk";
--> statement-breakpoint
ALTER TABLE "grade" DROP CONSTRAINT "grade_assignment_assignment_id_fk";
--> statement-breakpoint
ALTER TABLE "percentageGradeValue" DROP CONSTRAINT "percentageGradeValue_course_course_id_fk";
--> statement-breakpoint
ALTER TABLE "question" DROP CONSTRAINT "question_course_course_id_fk";
--> statement-breakpoint
ALTER TABLE "article" DROP CONSTRAINT "article_chapter_chapter_id_fk";
--> statement-breakpoint
ALTER TABLE "blog" DROP CONSTRAINT "blog_user_user_id_fk";
--> statement-breakpoint
ALTER TABLE "chapter" DROP CONSTRAINT "chapter_textbook_textbook_id_fk";
--> statement-breakpoint
ALTER TABLE "userSession" DROP CONSTRAINT "userSession_user_user_id_fk";
--> statement-breakpoint
ALTER TABLE "assignment" ADD CONSTRAINT "assignment_course_course_id_fk" FOREIGN KEY ("course") REFERENCES "public"."course"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "assignmentComment" ADD CONSTRAINT "assignmentComment_assignment_assignment_id_fk" FOREIGN KEY ("assignment") REFERENCES "public"."assignment"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "assignmentComment" ADD CONSTRAINT "assignmentComment_author_user_id_fk" FOREIGN KEY ("author") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "grade" ADD CONSTRAINT "grade_course_course_id_fk" FOREIGN KEY ("course") REFERENCES "public"."course"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "grade" ADD CONSTRAINT "grade_user_user_id_fk" FOREIGN KEY ("user") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "grade" ADD CONSTRAINT "grade_assignment_assignment_id_fk" FOREIGN KEY ("assignment") REFERENCES "public"."assignment"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "percentageGradeValue" ADD CONSTRAINT "percentageGradeValue_course_course_id_fk" FOREIGN KEY ("course") REFERENCES "public"."course"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "question" ADD CONSTRAINT "question_course_course_id_fk" FOREIGN KEY ("course") REFERENCES "public"."course"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "article" ADD CONSTRAINT "article_chapter_chapter_id_fk" FOREIGN KEY ("chapter") REFERENCES "public"."chapter"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "blog" ADD CONSTRAINT "blog_user_user_id_fk" FOREIGN KEY ("user") REFERENCES "public"."user"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "chapter" ADD CONSTRAINT "chapter_textbook_textbook_id_fk" FOREIGN KEY ("textbook") REFERENCES "public"."textbook"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "userSession" ADD CONSTRAINT "userSession_user_user_id_fk" FOREIGN KEY ("user") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE no action;