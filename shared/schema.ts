import { sql } from "drizzle-orm";
import { pgTable, text, varchar, jsonb } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const menuItems = pgTable("menu_items", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  category: text("category").notNull(), // 'essen' or 'getränke'
  name: text("name").notNull(),
  price: text("price").notNull(),
  description: text("description"),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export const insertMenuItemSchema = createInsertSchema(menuItems).omit({
  id: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
export type MenuItem = typeof menuItems.$inferSelect;
export type InsertMenuItem = z.infer<typeof insertMenuItemSchema>;

// Menu data structure for JSON
export const menuDataSchema = z.object({
  essen: z.array(z.object({
    name: z.string(),
    price: z.string(),
    description: z.string().optional(),
  })),
  getränke: z.array(z.object({
    name: z.string(),
    price: z.string(),
    description: z.string().optional(),
  })),
  menus: z.array(z.object({
    name: z.string(),
    price: z.string(),
    description: z.string().optional(),
  })),
});

export type MenuData = z.infer<typeof menuDataSchema>;
