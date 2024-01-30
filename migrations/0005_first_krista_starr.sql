ALTER TABLE "users_sessions" ALTER COLUMN "expires_at" SET DATA TYPE bigint;--> statement-breakpoint
ALTER TABLE "users_sessions" ALTER COLUMN "expires_at" DROP NOT NULL;