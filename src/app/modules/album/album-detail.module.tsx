'use client'

import { type FC } from 'react'
import Link from 'next/link'

import { type LastFmAlbum } from '@/pkg/libraries/rest-api'
import { ContainerComponent } from '@/app/shared/ui/container'
import { useLikedAlbumsStore } from '@/app/shared/store'

interface IProps {
  album: LastFmAlbum
}

const AlbumDetailModule: FC<IProps> = ({ album }) => {
  const { addLikedAlbum, removeLikedAlbum, isLiked } = useLikedAlbumsStore()

  const albumId = album.mbid || album.name
  const liked = isLiked(albumId)
  const imageUrl = album.image.find(img => img.size === 'extralarge')?.[`#text`] || ''

  const handleToggleLike = () => {
    const albumData = {
      id: albumId,
      name: album.name,
      artist: album.artist || '',
      image: imageUrl,
      url: album.url,
      slug: album.slug,
    }

    if (liked) {
      removeLikedAlbum(albumId)
    } else {
      addLikedAlbum(albumData)
    }
  }

  return (
    <ContainerComponent>
      <div className="py-24">
        <Link href="/album" className="text-blue-600 hover:underline mb-6 inline-block">
          ← Back to albums
        </Link>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="aspect-square rounded-lg overflow-hidden bg-gray-100">
            {imageUrl && (
              <img
                src={imageUrl}
                alt={album.name}
                className="w-full h-full object-cover"
              />
            )}
          </div>
          <div>
            <h1 className="text-4xl font-bold mb-4">{album.name}</h1>
            <p className="text-xl text-gray-600 mb-6">{album.artist}</p>
            <div className="flex gap-4 mb-8">
              <button
                onClick={handleToggleLike}
                className={`px-6 py-3 rounded-lg transition-all flex items-center gap-2 ${
                  liked 
                    ? 'bg-red-500 text-white hover:bg-red-600' 
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
              >
                {liked ? '❤️ Liked' : '🤍 Like'}
              </button>
            </div>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-700 mb-2">Listeners</h3>
                <p className="text-gray-900">{parseInt(album.listeners).toLocaleString()}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ContainerComponent>
  )
}

export default AlbumDetailModule

