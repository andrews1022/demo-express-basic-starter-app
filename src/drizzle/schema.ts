import { pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";

export const dogsTable = pgTable("dogs", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: text("name").notNull(),
  breed: text("breed").notNull(),
  created_at: timestamp("created_at").notNull().defaultNow(),
  updated_at: timestamp("updated_at").notNull().defaultNow(),
});
