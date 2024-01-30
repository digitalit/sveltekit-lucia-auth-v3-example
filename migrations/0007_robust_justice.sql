ALTER TABLE "users_sessions" ALTER COLUMN "expires_at" SET DATA TYPE timestamp with time zone;--> statement-breakpoint
ALTER TABLE "users_sessions" ALTER COLUMN "expires_at" SET NOT NULL;