'use client';

import { Check } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { boostItems } from './elements/constants';

// component
function BoostAbilities() {
  const t = useTranslations('boost');

  // return
  return (
    <div className="bg-gradient-to-r from-blue-50 via-white to-blue-50 py-20 sm:py-24 lg:py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t('title')}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {boostItems.map((item) => (
            <div
              key={item.number}
              className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-center w-14 h-14 rounded-full border-4 border-blue-500 text-blue-500 text-xl font-bold mb-6">
                {item.number}
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                {item.title}
              </h3>

              <ul className="space-y-4">
                {item.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 leading-relaxed">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BoostAbilities;

