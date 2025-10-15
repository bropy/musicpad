'use client'

import { Clock, FileText, ArrowRight } from 'lucide-react'
import { tests } from '@/app/features/tests/elements/constants/tests.constant'
import { Button } from '@heroui/react'
import { useTranslations } from 'next-intl'

// component
export default function AvailableTests() {
  const t = useTranslations('tests')

  //return
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t('title')}
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tests.map((test, index) => {
            const Icon = test.icon
            return (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 flex flex-col hover:shadow-md transition-shadow"
              >
                <div className="mb-4">
                  <div className={`w-12 h-12 ${test.iconColor} mb-4`}>
                    <Icon className="w-full h-full" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {t(`${test.key}.title`)}
                  </h3>
                </div>

                <div className="space-y-2 mb-6 flex-grow">
                  <div className="flex items-center text-gray-600 text-sm">
                    <Clock className="w-4 h-4 mr-2" />
                    <span>{t(`${test.key}.duration`)}</span>
                  </div>
                  <div className="flex items-center text-gray-600 text-sm">
                    <FileText className="w-4 h-4 mr-2" />
                    <span>{t(`${test.key}.questions`)}</span>
                  </div>
                </div>

                {test.available ? (
                  <Button
                    variant="solid"
                    color="primary"
                    className="w-full font-medium py-3 rounded-lg bg-teal-700 hover:bg-teal-800 text-white transition-colors flex items-center justify-center group"
                    endContent={<ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />}
                  >
                    {t(`${test.key}.button`)}
                  </Button>
                ) : (
                  <Button
                    isDisabled
                    variant="flat"
                    color="default"
                    className="w-full font-medium py-3 rounded-lg bg-teal-300 text-white cursor-not-allowed"
                  >
                    {t(`${test.key}.button`)}
                  </Button>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
