import { z } from 'zod'

export const createCommentSchema = z.object({
  userName: z.string().min(1, 'Name is required').max(100, 'Name must be less than 100 characters'),
  title: z.string().min(1, 'Title is required').max(200, 'Title must be less than 200 characters'),
  content: z.string().min(1, 'Comment is required').min(10, 'Comment must be at least 10 characters'),
})

export const updateCommentSchema = z.object({
  title: z.string().min(1, 'Title is required').max(200, 'Title must be less than 200 characters').optional(),
  content: z.string().min(10, 'Comment must be at least 10 characters').optional(),
})

export type CreateCommentForm = z.infer<typeof createCommentSchema>
export type UpdateCommentForm = z.infer<typeof updateCommentSchema>

