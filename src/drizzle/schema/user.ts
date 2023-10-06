import { sql } from 'drizzle-orm'
import { sqliteTable, integer, text } from 'drizzle-orm/sqlite-core'

export const users = sqliteTable('users', {
  id: integer('user_id').notNull().primaryKey({ autoIncrement: true }),
  firstName: text('first_name', { length: 32 }).notNull(),
  lastName: text('last_name', { length: 32 }).notNull(),
  email: text('email', { length: 64 }).notNull().unique(),
  password: text('password', { length: 255 }).notNull(),
  banned: integer('banned', { mode: 'boolean' }).notNull().default(false),
  verified: integer('verified', { mode: 'boolean' }).notNull().default(false),
  createdAt: integer('created_at', { mode: 'timestamp' })
    .notNull()
    .default(sql`CURRENT_TIMESTAMP`),
  updatedAt: integer('updated_at', { mode: 'timestamp' })
    .notNull()
    .default(sql`CURRENT_TIMESTAMP`),
})
