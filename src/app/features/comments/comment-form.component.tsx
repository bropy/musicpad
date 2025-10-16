'use client'

import { type FC } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '@heroui/button'
import { createCommentSchema, type CreateCommentForm } from '@/app/shared/validations'
import { useComments } from '@/app/entites'

interface IProps {
  onSuccess?: () => void
}

const CommentForm: FC<IProps> = ({ onSuccess }) => {
  const { createComment, isCreating } = useComments()
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CreateCommentForm>({
    resolver: zodResolver(createCommentSchema),
    defaultValues: {
      userName: '',
      title: '',
      content: '',
    },
  })

  const onSubmit = async (data: CreateCommentForm) => {
    try {
      await createComment(data)
      reset()
      onSuccess?.()
    } catch (error) {
      console.error('Failed to create comment:', error)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <input
          {...register('userName')}
          placeholder="Your name"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {errors.userName && (
          <p className="text-red-500 text-sm mt-1">{errors.userName.message}</p>
        )}
      </div>

      <div>
        <input
          {...register('title')}
          placeholder="Title"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {errors.title && (
          <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>
        )}
      </div>

      <div>
        <textarea
          {...register('content')}
          placeholder="Write your comment..."
          rows={4}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
        />
        {errors.content && (
          <p className="text-red-500 text-sm mt-1">{errors.content.message}</p>
        )}
      </div>

      <Button
        type="submit"
        disabled={isCreating}
        className="w-full px-6 py-3 bg-primary hover:bg-primary/80 text-white rounded-lg"
        size="lg"
      >
        {isCreating ? 'Posting...' : 'Post Comment'}
      </Button>
    </form>
  )
}

export default CommentForm

