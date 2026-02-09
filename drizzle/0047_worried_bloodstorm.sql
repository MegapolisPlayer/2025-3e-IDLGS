CREATE TABLE "articleDefinitionIndex" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "articleDefinitionIndex_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"article" integer NOT NULL,
	"definition" integer NOT NULL,
	"startIndex" integer DEFAULT 0 NOT NULL,
	"endIndex" integer DEFAULT 0 NOT NULL
);
--> statement-breakpoint
ALTER TABLE "articleDefinitionIndex" ADD CONSTRAINT "articleDefinitionIndex_article_article_id_fk" FOREIGN KEY ("article") REFERENCES "public"."article"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "articleDefinitionIndex" ADD CONSTRAINT "articleDefinitionIndex_definition_textbookWordDefinition_id_fk" FOREIGN KEY ("definition") REFERENCES "public"."textbookWordDefinition"("id") ON DELETE cascade ON UPDATE no action;