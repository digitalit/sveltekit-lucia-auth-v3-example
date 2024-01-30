CREATE TABLE IF NOT EXISTS "todos" (
	"id" varchar PRIMARY KEY NOT NULL,
	"title" varchar(600) NOT NULL,
	"completed" boolean DEFAULT false NOT NULL,
	"created_at" timestamp DEFAULT now()
);
