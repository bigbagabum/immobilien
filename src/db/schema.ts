import { boolean, integer, pgTable, serial, text, varchar } from "drizzle-orm/pg-core";
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

export const users = pgTable("users", {
  id: serial().primaryKey(),
  name: varchar({ length: 250 }).notNull(),
  email: varchar({ length: 250 }).notNull().unique(),
  image: text(),
  role: varchar({ length: 100 }).default("customer"),
});

export const todos = pgTable("todos", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  title: varchar({ length: 250 }).notNull(),
  description: varchar({ length: 250 }).notNull(),
  status: boolean().default(false),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  userId: integer("user_id")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
});