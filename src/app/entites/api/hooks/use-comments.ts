import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { restApiFetcher } from '@/pkg/libraries/rest-api'

interface Comment {
  id: string
  userName: string
  title: string
  content: string
  createdAt: string
  updatedAt: string
}

interface CreateCommentDto {
  userName: string
  title: string
  content: string
}

interface UpdateCommentDto {
  title?: string
  content?: string
}

export const useComments = () => {
  const queryClient = useQueryClient()

  const { data: comments, isLoading } = useQuery({
    queryKey: ['comments'],
    queryFn: async () => {
      const response = await restApiFetcher.get('comments')
      return response.json<Comment[]>()
    },
  })

  const createMutation = useMutation({
    mutationFn: async (data: CreateCommentDto) => {
      const response = await restApiFetcher.post('comments', { json: data })
      return response.json<Comment>()
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['comments'] })
    },
  })

  const updateMutation = useMutation({
    mutationFn: async ({ id, data }: { id: string; data: UpdateCommentDto }) => {
      const response = await restApiFetcher.patch(`comments/${id}`, { json: data })
      return response.json<Comment>()
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['comments'] })
    },
  })

  const deleteMutation = useMutation({
    mutationFn: async (id: string) => {
      await restApiFetcher.delete(`comments/${id}`)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['comments'] })
    },
  })

  return {
    comments: comments || [],
    isLoading,
    createComment: createMutation.mutateAsync,
    updateComment: updateMutation.mutateAsync,
    deleteComment: deleteMutation.mutateAsync,
    isCreating: createMutation.isPending,
    isUpdating: updateMutation.isPending,
    isDeleting: deleteMutation.isPending,
  }
}

