import { pgTable, text, timestamp, uuid, varchar } from 'drizzle-orm/pg-core'

export const comments = pgTable('comments', {
  id: uuid('id').defaultRandom().primaryKey(),
  userName: varchar('user_name', { length: 100 }).notNull(),
  title: varchar('title', { length: 200 }).notNull(),
  content: text('content').notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
})

export type Comment = typeof comments.$inferSelect
export type NewComment = typeof comments.$inferInsert
