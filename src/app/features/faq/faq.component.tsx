'use client'

import { useState } from 'react'
import { ChevronRight } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { faqKeys } from '@/app/features/faq/elements/constant/faq.constant'

// component
export default function FAQAccordion() {
  const t = useTranslations('faq')
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(prev => (prev === index ? null : index))
  }

  // return
  return (
    <div className="bg-white py-20 sm:py-24 lg:py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-[300px_1fr] gap-12">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              {t('title_line1')}<br />{t('title_line2')}<br />{t('title_line3')}
            </h1>
          </div>

          <div className="space-y-4">
            {faqKeys.map((key, index) => (
              <div key={key} className="border-b border-gray-200">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full py-5 flex items-center justify-between text-left hover:text-gray-600 transition-colors"
                >
                  <span className="text-lg font-medium text-gray-900 pr-4">
                    {t(`questions.${key}.question`)}
                  </span>
                  <ChevronRight
                    className={`w-5 h-5 flex-shrink-0 transition-transform duration-300 ${
                      openIndex === index ? 'rotate-90' : ''
                    }`}
                  />
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openIndex === index ? 'max-h-96 pb-5' : 'max-h-0'
                  }`}
                >
                  <p className="text-gray-600 leading-relaxed">
                    {t(`questions.${key}.answer`)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
