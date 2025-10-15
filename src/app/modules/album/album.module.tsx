'use client'

import { type FC } from 'react'
import { useQuery } from '@tanstack/react-query'
import Link from 'next/link'

import { allTopAlbumsQueryOptions, type LastFmAlbum } from '@/pkg/libraries/rest-api'
import { ContainerComponent } from '@/app/shared/ui/container'
import { useLikedAlbumsStore } from '@/app/shared/store'
import { CommentsSection } from '@/app/features/comments'

const AlbumsModule: FC = () => {
  const { data: albums, isLoading } = useQuery(allTopAlbumsQueryOptions())
  const { addLikedAlbum, removeLikedAlbum, isLiked } = useLikedAlbumsStore()

  const handleToggleLike = (album: LastFmAlbum, e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    
    const albumData = {
      id: album.mbid || album.name,
      name: album.name,
      artist: album.artist || '',
      image: album.image.find(img => img.size === 'extralarge')?.[`#text`] || '',
      url: album.url,
      slug: album.slug,
    }

    if (isLiked(albumData.id)) {
      removeLikedAlbum(albumData.id)
    } else {
      addLikedAlbum(albumData)
    }
  }

  if (isLoading) {
    return (
      <ContainerComponent>
        <div className="py-24">
          <h1 className="text-4xl font-bold mb-8">Top Albums</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="animate-pulse">
                <div className="bg-gray-200 aspect-square rounded-lg mb-4"></div>
                <div className="bg-gray-200 h-4 rounded mb-2"></div>
                <div className="bg-gray-200 h-3 rounded w-2/3"></div>
              </div>
            ))}
          </div>
        </div>
      </ContainerComponent>
    )
  }

  return (
    <ContainerComponent>
      <div className="py-24">
        <h1 className="text-4xl font-bold mb-8">Top Albums</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {albums?.map((album) => {
            const albumId = album.mbid || album.name
            const liked = isLiked(albumId)
            const imageUrl = album.image.find(img => img.size === 'extralarge')?.[`#text`] || ''

            return (
              <div key={albumId} className="group relative">
                <Link href={`/album/${album.slug}`}>
                  <div className="aspect-square rounded-lg overflow-hidden mb-4 bg-gray-100">
                    {imageUrl && (
                      <img
                        src={imageUrl}
                        alt={album.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                      />
                    )}
                  </div>
                </Link>
                <div className="flex justify-between items-start">
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold truncate">{album.name}</h3>
                    <p className="text-sm text-gray-600 truncate">{album.artist}</p>
                  </div>
                  <button
                    onClick={(e) => handleToggleLike(album, e)}
                    className="ml-2 flex-shrink-0 text-2xl focus:outline-none hover:scale-125 transition-transform"
                    aria-label={liked ? 'Unlike' : 'Like'}
                  >
                    {liked ? '❤️' : '🤍'}
                  </button>
                </div>
              </div>
            )
          })}
        </div>

        <CommentsSection />
      </div>
    </ContainerComponent>
  )
}

export default AlbumsModule
