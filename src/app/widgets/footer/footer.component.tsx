'use client';

import { Brain, Facebook, Instagram, Twitter, Headphones, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@heroui/button';
import { useTranslations, useLocale } from 'next-intl';
import { useRouter, usePathname } from '@/pkg/libraries/locale/navigation';

// component
export default function Footer() {
  const [isLangOpen, setIsLangOpen] = useState(false);
  const t = useTranslations('footer');
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'de', name: 'Deutsch' }
  ];

  const handleLanguageChange = (langCode: string) => {
    router.replace(pathname, { locale: langCode });
    setIsLangOpen(false);
  };

  const currentLanguage = languages.find(lang => lang.code === locale)?.name || 'English';

  // return
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Brain className="w-8 h-8" />
              <span className="text-2xl font-bold">{t('brand_name')}</span>
            </div>
            <div className="flex gap-4">
              <a href="#" className="hover:text-teal-400 transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-teal-400 transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-teal-400 transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">{t('customer_support.title')}</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  {t('customer_support.how_to_cancel')}
                </a>
              </li>
            </ul>
            <Button 
              startContent={<Headphones className="w-5 h-5" />}
              variant="bordered"
              className="mt-6 border-white text-white hover:bg-white hover:text-slate-900 rounded-full px-4 py-2"
            >
              <div className="text-left text-sm">
                <div className="font-semibold">{t('customer_support.support_button')}</div>
                <div className="text-xs">{t('customer_support.support_availability')}</div>
              </div>
            </Button>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">{t('legal.title')}</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  {t('legal.privacy_policy')}
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  {t('legal.terms_conditions')}
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  {t('legal.cookie_policy')}
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  {t('legal.refund_policy')}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">{t('about_us.title')}</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  {t('about_us.help')}
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  {t('about_us.blog')}
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  {t('about_us.reviews')}
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  {t('about_us.pricing')}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700 mb-8"></div>

        <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
          <div className="text-gray-400 text-sm text-center lg:text-left">
            {t('copyright')}
          </div>

          <div className="flex items-center gap-6">
            <div className="relative">
              <Button
                onClick={() => setIsLangOpen(!isLangOpen)}
                variant="bordered"
                endContent={<ChevronDown className={`w-4 h-4 transition-transform ${isLangOpen ? 'rotate-180' : ''}`} />}
                className="border-slate-600 text-white hover:border-slate-500 rounded-lg px-4 py-2 min-w-[140px]"
              >
                {currentLanguage}
              </Button>
              
              {isLangOpen && (
                <div className="absolute bottom-full mb-2 left-0 w-full bg-slate-800 border border-slate-600 rounded-lg shadow-lg overflow-hidden z-50">
                  {languages.map((lang) => (
                    <Button
                      key={lang.code}
                      onClick={() => handleLanguageChange(lang.code)}
                      variant="light"
                      className="w-full px-4 py-2 text-left hover:bg-slate-700 text-white rounded-none justify-start"
                    >
                      {lang.name}
                    </Button>
                  ))}
                </div>
              )}
            </div>

            <div className="flex gap-2">
              <div className="bg-white rounded px-2 py-1 text-xs font-semibold text-gray-800 min-w-[50px] text-center">
                {t('payment_methods.visa')}
              </div>
              <div className="bg-white rounded px-2 py-1 text-xs font-semibold text-gray-800 min-w-[50px] text-center">
                {t('payment_methods.mastercard')}
              </div>
              <div className="bg-white rounded px-2 py-1 text-xs font-semibold text-gray-800 min-w-[50px] text-center">
                {t('payment_methods.paypal')}
              </div>
              <div className="bg-white rounded px-2 py-1 text-xs font-semibold text-gray-800 min-w-[50px] text-center">
                {t('payment_methods.apple_pay')}
              </div>
              <div className="bg-white rounded px-2 py-1 text-xs font-semibold text-gray-800 min-w-[50px] text-center">
                {t('payment_methods.google_pay')}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}