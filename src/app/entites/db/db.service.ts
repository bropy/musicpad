import 'server-only'

import { CommentsRepository } from './repositories/comments.repositories'

export const dbService = {
  comments: CommentsRepository,
}