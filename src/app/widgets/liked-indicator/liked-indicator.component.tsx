'use client'

import { type FC } from 'react'
import Link from 'next/link'
import { Heart } from 'lucide-react'
import { useLikedAlbumsStore } from '@/app/shared/store'

const LikedIndicator: FC = () => {
  const { likedAlbums } = useLikedAlbumsStore()

  if (likedAlbums.length === 0) {
    return null
  }

  return (
    <Link
      href="/liked"
      className="fixed bottom-6 right-6 bg-red-500 text-white px-6 py-4 rounded-full shadow-lg hover:bg-red-600 transition-all hover:scale-110 flex items-center gap-3 z-50"
    >
      <Heart className="w-6 h-6 fill-current" />
      <span className="font-semibold">{likedAlbums.length}</span>
    </Link>
  )
}

export default LikedIndicator

