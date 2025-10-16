'use client';

import { Twitter, Instagram, Facebook } from 'lucide-react';
import { useTranslations } from 'next-intl';

function CommunitySection() {
  const t = useTranslations('community');

  return (
    <div className="bg-gradient-to-r from-blue-50/50 via-gray-50 to-blue-50/50 py-20 sm:py-24 lg:py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
              {t('title')}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl">
              {t('subtitle')}
            </p>
          </div>
          
          <div className="flex gap-3">
            <a
              href="#"
              className="flex items-center justify-center w-20 h-14 border-2 border-gray-900 rounded-lg hover:bg-gray-900 hover:text-white transition-colors group"
            >
              <Twitter className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="flex items-center justify-center w-20 h-14 border-2 border-gray-900 rounded-lg hover:bg-gray-900 hover:text-white transition-colors group"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="flex items-center justify-center w-20 h-14 border-2 border-gray-900 rounded-lg hover:bg-gray-900 hover:text-white transition-colors group"
            >
              <Facebook className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CommunitySection;