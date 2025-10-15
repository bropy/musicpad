'use client'

import { type FC } from 'react'
import Link from 'next/link'
import { useLikedAlbumsStore } from '@/app/shared/store'
import { ContainerComponent } from '@/app/shared/ui/container'

const LikedAlbumsPageModule: FC = () => {
  const { likedAlbums, removeLikedAlbum } = useLikedAlbumsStore()

  return (
    <ContainerComponent>
      <div className="py-24">
        <div className="mb-8">
          <Link href="/" className="text-blue-600 hover:underline mb-6 inline-block">
            ← Back to home
          </Link>
        </div>
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Your Liked Albums</h1>
          <p className="text-gray-600">
            {likedAlbums.length === 0
              ? 'You haven\'t liked any albums yet'
              : `${likedAlbums.length} album${likedAlbums.length !== 1 ? 's' : ''} saved`}
          </p>
        </div>

        {likedAlbums.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-gray-500 mb-6">Start exploring and save your favorite albums!</p>
            <Link
              href="/album"
              className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Browse Albums
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {likedAlbums.map((album) => (
              <div key={album.id} className="group relative">
                {album.slug ? (
                  <Link href={`/album/${album.slug}`}>
                    <div className="aspect-square rounded-lg overflow-hidden mb-4 bg-gray-100">
                      {album.image && (
                        <img
                          src={album.image}
                          alt={album.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                        />
                      )}
                    </div>
                  </Link>
                ) : (
                  <div className="aspect-square rounded-lg overflow-hidden mb-4 bg-gray-100">
                    {album.image && (
                      <img
                        src={album.image}
                        alt={album.name}
                        className="w-full h-full object-cover"
                      />
                    )}
                  </div>
                )}
                <div className="flex justify-between items-start">
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold truncate">{album.name}</h3>
                    <p className="text-sm text-gray-600 truncate">{album.artist}</p>
                  </div>
                  <button
                    onClick={() => removeLikedAlbum(album.id)}
                    className="ml-2 flex-shrink-0 text-2xl focus:outline-none hover:scale-125 transition-transform"
                    aria-label="Unlike"
                  >
                    ❤️
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </ContainerComponent>
  )
}

export default LikedAlbumsPageModule

