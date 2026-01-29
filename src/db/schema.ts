import { integer, pgTable, varchar } from "drizzle-orm/pg-core";
import { timestamp } from "drizzle-orm/pg-core";

export const postsTable = pgTable("posts", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  title: varchar({ length: 255 }).notNull(),
  text: varchar({ length: 255 }).notNull(),
});

export const reviewsTable = pgTable("reviews", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  title: varchar({ length: 255 }).notNull(),
  content: varchar({ length: 1000 }).notNull(),
  createdAt: timestamp().defaultNow().notNull(),
});
