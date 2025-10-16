'use client'
import { type FC, useState } from 'react'
import { Brain, Menu, X } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@heroui/button'

const Navbar: FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-200/50 py-4 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2">
                    <Brain className="w-8 h-8 text-gray-700" />
                    <span className="text-2xl font-bold text-gray-900">myIQ</span>
                </Link>
                
                <div className="hidden md:flex items-center gap-4">
                    <Button 
                        variant="bordered"
                        className="border-primary text-primary font-semibold px-6 py-2 rounded-lg"
                    >
                        Log In
                    </Button>
                    <Button 
                        className="bg-primary hover:bg-primary/80 text-white font-semibold px-6 py-2 rounded-lg"
                    >
                        Start Test
                    </Button>
                </div>

                <button 
                    className="md:hidden p-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
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
                <div className="md:hidden mt-4 pb-4 border-t border-gray-200/50 pt-4">
                    <div className="flex flex-col gap-3">
                        <Button 
                            variant="bordered"
                            className="w-full border-teal-600 text-teal-600 hover:bg-teal-50 font-semibold py-3 rounded-lg"
                        >
                            Log In
                        </Button>
                        <Button 
                            className="w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 rounded-lg"
                        >
                            Start Test
                        </Button>
                    </div>
                </div>
            )}
        </nav>
    )
}

export default Navbar