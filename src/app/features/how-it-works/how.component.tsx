'use client'

import { type FC } from 'react'
import { useTranslations } from 'next-intl'
import { stepsConstants } from './elements/constants'

// component
const HowItWorksComponent: FC = () => {
    const t = useTranslations('how_it_works')

    // return
    return (
        <section className="w-full bg-gradient-to-r from-blue-50 via-white to-blue-50 py-20 sm:py-24 lg:py-28">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-2xl sm:text-5xl font-semibold text-gray-900 text-center mb-16">
                    {t('title')}
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {stepsConstants.map((step, index) => (
                        <div 
                            key={index}
                            className="bg-white rounded-2xl p-3 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                        >
                            <div className="mb-6">
                                <step.icon 
                                    className={`w-12 h-12 ${
                                        index === 1 ? 'text-blue-500' : 'text-gray-700'
                                    }`}
                                    strokeWidth={1.5}
                                />
                            </div>
                            <h3 className="text-md font-bold text-gray-900 mb-3">
                                {step.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default HowItWorksComponent