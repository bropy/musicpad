'use client'

import { type FC } from 'react'
import { Button } from '@heroui/button'
import Image from 'next/image'
import { ArrowRight, Star } from 'lucide-react'
import { GraphIcon } from '@/app/shared/icons'
import { useFeatureFlag } from '@/pkg/integrations/growthbook'
import { FEATURE_FLAGS } from '@/app/shared/flags'
import { captureException, addBreadcrumb } from '@/pkg/integrations/sentry'
import { useTranslations } from 'next-intl'

const HeroComponent: FC = () => {
    const showHeroButton = useFeatureFlag(FEATURE_FLAGS.HERO_BUTTON, true)
    const t = useTranslations('iq_hero')

    const handleStartTest = () => {
        console.log('Start test button clicked!')
        
        addBreadcrumb('User clicked Start IQ Test button', 'ui.click', 'info')
        
        const testError = new Error('Button clicked - This is a test error for Sentry')
        
        captureException(testError, {
            component: 'HeroComponent',
            action: 'start_iq_test',
            button: 'Start IQ Test Now',
            user_action: 'button_click',
            page: 'home',
            timestamp: new Date().toISOString(),
        })
        
        alert('Error sent to Sentry! Check your dashboard.')
    }

    return (
        <div className="w-full bg-gradient-to-b from-gray-50 to-white py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-8 lg:gap-12">
                    <div className="flex-1 w-full lg:w-auto text-center lg:text-left">
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 lg:mb-6">
                            {t('title_part1')} <span className="text-blue-500">{t('title_part2')}</span>
                        </h1>
                        <p className="text-base sm:text-lg text-gray-600 mb-6 lg:mb-8 max-w-xl mx-auto lg:mx-0">
                            {t('subtitle')}
                        </p>
                        
                        {showHeroButton && (
                            <div className="flex flex-col sm:flex-row gap-4 mb-8 lg:mb-10 justify-center lg:justify-start">
                                <Button 
                                    startContent={<ArrowRight className="w-5 h-5" />} 
                                    color="primary"
                                    onClick={handleStartTest}
                                    className="bg-teal-600 hover:bg-teal-700 text-white font-semibold px-6 py-6 rounded-lg text-base"
                                >
                                    {t('start_button')}
                                </Button>
                                <Button 
                                    color="primary"
                                    className="bg-white hover:bg-gray-50 text-teal-600 border-2 border-teal-600 font-semibold px-6 py-6 rounded-lg text-base"
                                >
                                    {t('how_it_works')}
                                </Button>
                            </div>
                        )}
                        
                        <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                            <div className="flex -space-x-2">
                                <Image 
                                    src="https://myiq.com/_next/image?url=%2Fimages%2FrateToday%2Favatar1.webp&w=128&q=75" 
                                    alt="reviewer" 
                                    width={48} 
                                    height={48}
                                    className="rounded-full border-2 border-white"
                                />
                                <Image 
                                    src="https://myiq.com/_next/image?url=%2Fimages%2FrateToday%2Favatar1.webp&w=128&q=75" 
                                    alt="reviewer" 
                                    width={48} 
                                    height={48}
                                    className="rounded-full border-2 border-white"
                                />
                                <Image 
                                    src="https://myiq.com/_next/image?url=%2Fimages%2FrateToday%2Favatar1.webp&w=128&q=75" 
                                    alt="reviewer" 
                                    width={48} 
                                    height={48}
                                    className="rounded-full border-2 border-white"
                                />
                                <Image 
                                    src="https://myiq.com/_next/image?url=%2Fimages%2FrateToday%2Favatar1.webp&w=128&q=75" 
                                    alt="reviewer" 
                                    width={48} 
                                    height={48}
                                    className="rounded-full border-2 border-white"
                                />
                            </div>
                            <div className="text-center sm:text-left">
                                <div className="flex items-center gap-1 mb-1 justify-center sm:justify-start">
                                    <p className="text-sm font-medium text-gray-700">{t('reviews_label')}</p>
                                    <div className="flex gap-0.5">
                                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                    </div>
                                </div>
                                <p className="text-sm text-gray-600">
                                    <span className="font-bold text-gray-900">12024</span> {t('tests_today')}
                                </p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="flex-1 w-full lg:w-auto flex justify-center lg:justify-end">
                        <div className="w-full max-w-md lg:max-w-lg">
                            <GraphIcon />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroComponent