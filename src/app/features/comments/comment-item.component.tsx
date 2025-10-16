'use client'

import { type FC, useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Trash2, Edit2, X, Check } from 'lucide-react'
import { Button } from '@heroui/button'
import { updateCommentSchema, type UpdateCommentForm } from '@/app/shared/validations'
import { useComments } from '@/app/entites'

interface Comment {
  id: string
  userName: string
  title: string
  content: string
  createdAt: string
  updatedAt: string
}

interface IProps {
  comment: Comment
}

const CommentItem: FC<IProps> = ({ comment }) => {
  const [isEditing, setIsEditing] = useState(false)
  const { updateComment, deleteComment, isUpdating, isDeleting } = useComments()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UpdateCommentForm>({
    resolver: zodResolver(updateCommentSchema),
    defaultValues: {
      title: comment.title,
      content: comment.content,
    },
  })

  const onSubmit = async (data: UpdateCommentForm) => {
    try {
      await updateComment({ id: comment.id, data })
      setIsEditing(false)
    } catch (error) {
      console.error('Failed to update comment:', error)
    }
  }

  const handleDelete = async () => {
    if (confirm('Are you sure you want to delete this comment?')) {
      try {
        await deleteComment(comment.id)
      } catch (error) {
        console.error('Failed to delete comment:', error)
      }
    }
  }

  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    })
  }

  if (isEditing) {
    return (
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <input
              {...register('title')}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.title && (
              <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>
            )}
          </div>

          <div>
            <textarea
              {...register('content')}
              rows={4}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
            />
            {errors.content && (
              <p className="text-red-500 text-sm mt-1">{errors.content.message}</p>
            )}
          </div>

          <div className="flex gap-2">
            <Button
              type="submit"
              disabled={isUpdating}
              startContent={<Check className="w-4 h-4" />}
              className="px-4 py-2 bg-primary hover:bg-primary/80 text-white rounded-lg"
            >
              Save
            </Button>
            <Button
              type="button"
              onClick={() => setIsEditing(false)}
              variant="bordered"
              startContent={<X className="w-4 h-4" />}
              className="px-4 py-2 border-gray-300 rounded-lg"
            >
              Cancel
            </Button>
          </div>
        </form>
      </div>
    )
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
      <div className="flex justify-between items-start mb-3">
        <div>
          <h3 className="font-semibold text-lg">{comment.title}</h3>
          <p className="text-sm text-gray-500">
            by {comment.userName} • {formatDate(comment.createdAt)}
          </p>
        </div>
        <div className="flex gap-2">
          <Button
            isIconOnly
            onClick={() => setIsEditing(true)}
            variant="light"
            className="text-gray-600 hover:text-blue-600"
            aria-label="Edit"
          >
            <Edit2 className="w-4 h-4" />
          </Button>
          <Button
            isIconOnly
            onClick={handleDelete}
            disabled={isDeleting}
            variant="light"
            className="text-gray-600 hover:text-red-600"
            aria-label="Delete"
          >
            <Trash2 className="w-4 h-4" />
          </Button>
        </div>
      </div>
      <p className="text-gray-700 whitespace-pre-wrap">{comment.content}</p>
    </div>
  )
}

export default CommentItem

