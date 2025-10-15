'use client'

import { type FC, useState } from 'react'
import { MessageSquare } from 'lucide-react'
import { useComments } from '@/app/shared/hooks'
import CommentForm from './comment-form.component'
import CommentItem from './comment-item.component'

const CommentsSection: FC = () => {
  const [showForm, setShowForm] = useState(false)
  const { comments, isLoading } = useComments()

  return (
    <div className="mt-12 border-t border-gray-200 pt-12">
      <div className="flex justify-between items-center mb-8">
        <div className="flex items-center gap-3">
          <MessageSquare className="w-6 h-6" />
          <h2 className="text-2xl font-bold">
            Comments ({comments.length})
          </h2>
        </div>
        <button
          onClick={() => setShowForm(!showForm)}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          {showForm ? 'Cancel' : 'Add Comment'}
        </button>
      </div>

      {showForm && (
        <div className="mb-8">
          <CommentForm onSuccess={() => setShowForm(false)} />
        </div>
      )}

      {isLoading ? (
        <div className="space-y-4">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="animate-pulse bg-gray-100 h-32 rounded-lg" />
          ))}
        </div>
      ) : comments.length === 0 ? (
        <div className="text-center py-12 bg-gray-50 rounded-lg">
          <MessageSquare className="w-12 h-12 mx-auto mb-4 text-gray-400" />
          <p className="text-gray-500">No comments yet. Be the first to comment!</p>
        </div>
      ) : (
        <div className="space-y-4">
          {comments.map((comment) => (
            <CommentItem key={comment.id} comment={comment} />
          ))}
        </div>
      )}
    </div>
  )
}

export default CommentsSection

