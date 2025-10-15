import { eq, desc } from 'drizzle-orm'

import { db } from '@/pkg/integrations/drizzle/drizzle.client'

import { Comment, comments, NewComment } from '../schemas/comments.schema'

export const CommentsRepository = {
  findAll: async (): Promise<Comment[]> => {
    return db.select().from(comments).orderBy(desc(comments.createdAt))
  },

  findById: async (id: string): Promise<Comment | undefined> => {
    const result = await db.select().from(comments).where(eq(comments.id, id))
    return result[0]
  },

  create: async (data: Omit<NewComment, 'id' | 'createdAt' | 'updatedAt'>): Promise<Comment> => {
    const result = await db
      .insert(comments)
      .values({
        userName: data.userName,
        title: data.title,
        content: data.content,
      })
      .returning()
    return result[0]
  },

  update: async (
    id: string,
    data: Partial<Pick<NewComment, 'title' | 'content'>>
  ): Promise<Comment | undefined> => {
    const result = await db
      .update(comments)
      .set({
        ...data,
        updatedAt: new Date(),
      })
      .where(eq(comments.id, id))
      .returning()
    return result[0]
  },

  delete: async (id: string): Promise<void> => {
    await db.delete(comments).where(eq(comments.id, id))
  },
}
