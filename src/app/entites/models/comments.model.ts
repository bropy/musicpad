export interface CommentModel {
  id: string
  userName: string
  title: string
  content: string
  createdAt: Date
  updatedAt: Date
}

export interface CreateCommentDto {
  userName: string
  title: string
  content: string
}

export interface UpdateCommentDto {
  title?: string
  content?: string
}
