CREATE TABLE "users" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(250) NOT NULL,
	"email" varchar(250) NOT NULL,
	"image" text,
	"role" varchar(100) DEFAULT 'customer',
	CONSTRAINT "users_email_unique" UNIQUE("email")
);
