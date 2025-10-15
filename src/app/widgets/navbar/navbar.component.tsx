'use client'
import { type FC, useState } from 'react'
import { Brain, Menu, X, Music, Heart } from 'lucide-react'
import Link from 'next/link'
import { useLikedAlbumsStore } from '@/app/shared/store'

const Navbar: FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const { likedAlbums } = useLikedAlbumsStore()

    return (
        <nav className="w-full bg-white border-b border-gray-200 py-4 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2">
                    <Brain className="w-8 h-8 text-gray-700" />
                    <span className="text-2xl font-bold text-gray-900">MusicPad</span>
                </Link>
                
                <div className="hidden sm:flex items-center gap-6">
                    <Link href="/album" className="flex items-center gap-2 text-gray-700 hover:text-gray-900">
                        <Music className="w-5 h-5" />
                        Albums
                    </Link>
                    <Link href="/liked" className="flex items-center gap-2 text-gray-700 hover:text-gray-900">
                        <Heart className="w-5 h-5" />
                        Liked {likedAlbums.length > 0 && `(${likedAlbums.length})`}
                    </Link>
                </div>

                <button 
                    className="sm:hidden p-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {isMenuOpen ? (
                        <X className="w-6 h-6" />
                    ) : (
                        <Menu className="w-6 h-6" />
                    )}
                </button>
            </div>

            {isMenuOpen && (
                <div className="sm:hidden mt-4 pb-4 border-t border-gray-200 pt-4">
                    <div className="flex flex-col gap-3">
                        <Link href="/album" className="flex items-center gap-2 text-gray-700 hover:text-gray-900 px-2 py-2">
                            <Music className="w-5 h-5" />
                            Albums
                        </Link>
                        <Link href="/liked" className="flex items-center gap-2 text-gray-700 hover:text-gray-900 px-2 py-2">
                            <Heart className="w-5 h-5" />
                            Liked {likedAlbums.length > 0 && `(${likedAlbums.length})`}
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    )
}

export default Navbar