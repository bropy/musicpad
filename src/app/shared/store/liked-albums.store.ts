import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface Album {
  id: string
  name: string
  artist: string
  image: string
  url: string
  slug?: string
}

interface LikedAlbumsState {
  likedAlbums: Album[]
  addLikedAlbum: (album: Album) => void
  removeLikedAlbum: (id: string) => void
  isLiked: (id: string) => boolean
  clearLikedAlbums: () => void
}

export const useLikedAlbumsStore = create<LikedAlbumsState>()(
  persist(
    (set, get) => ({
      likedAlbums: [],
      addLikedAlbum: (album) => {
        set((state) => ({
          likedAlbums: [...state.likedAlbums, album],
        }))
      },
      removeLikedAlbum: (id) => {
        set((state) => ({
          likedAlbums: state.likedAlbums.filter((album) => album.id !== id),
        }))
      },
      isLiked: (id) => {
        return get().likedAlbums.some((album) => album.id === id)
      },
      clearLikedAlbums: () => {
        set({ likedAlbums: [] })
      },
    }),
    {
      name: 'liked-albums-storage',
    }
  )
)

