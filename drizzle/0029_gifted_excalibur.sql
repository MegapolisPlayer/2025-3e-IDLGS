CREATE TABLE "userDailyChallengeLinker" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "userDailyChallengeLinker_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"dailyChallenge" integer NOT NULL,
	"user" integer NOT NULL,
	"completed" boolean DEFAULT false NOT NULL
);
--> statement-breakpoint
CREATE TABLE "passwordReset" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "passwordReset_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"uuid" text NOT NULL,
	"expiresAt" timestamp NOT NULL,
	"user" integer NOT NULL
);
--> statement-breakpoint
ALTER TABLE "userDailyChallengeLinker" ADD CONSTRAINT "userDailyChallengeLinker_dailyChallenge_dailyChallenges_id_fk" FOREIGN KEY ("dailyChallenge") REFERENCES "public"."dailyChallenges"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "userDailyChallengeLinker" ADD CONSTRAINT "userDailyChallengeLinker_user_user_id_fk" FOREIGN KEY ("user") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "passwordReset" ADD CONSTRAINT "passwordReset_user_user_id_fk" FOREIGN KEY ("user") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE no action;