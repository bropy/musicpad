import { queryOptions } from '@tanstack/react-query'
import { restApiFetcher } from '../fetcher'

// types
export interface Comment {
  id: string
  userName: string
  title: string
  content: string
  createdAt: string
  updatedAt: string
}

// fetch comments
export const fetchComments = async (): Promise<Comment[]> => {
  const response = await restApiFetcher.get('comments')
  return response.json<Comment[]>()
}

// query options
export const commentsQueryOptions = () =>
  queryOptions({
    queryKey: ['comments'],
    queryFn: fetchComments,
    staleTime: 30 * 1000, // 30 seconds
    gcTime: 5 * 60 * 1000, // 5 minutes
  })

