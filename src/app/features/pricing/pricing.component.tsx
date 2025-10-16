'use client';

import { Check } from 'lucide-react';
import { Button } from '@heroui/button';
import { Card, CardHeader, CardBody, CardFooter } from '@heroui/card';
import { useTranslations } from 'next-intl';
import { plans } from './elements/constant';

// component
export default function PricingPlans() {
    const t = useTranslations('pricing');

    // return
  return (
    <div className="bg-gradient-to-r from-blue-50/50 via-gray-50 to-blue-50/50 py-20 sm:py-24 lg:py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t('title')}
          </h1>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        <div className="flex justify-center items-center gap-8 mb-8 flex-wrap">
          {plans.map((plan, index) => (
            <Card
              key={index}
              isHoverable
              className="w-full max-w-[365px] p-4 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <CardHeader className="flex-col items-start border-b border-gray-200 pb-6">
                <h2 className="text-sm font-semibold text-gray-900 tracking-wide mb-4">
                  {plan.name}
                </h2>
                <div className="flex items-baseline">
                  <span className="text-5xl font-bold text-gray-900">
                    {plan.price}
                  </span>
                  <span className="text-xl text-gray-500 ml-2">
                    *
                  </span>
                  <span className="text-gray-500 ml-1">
                    {plan.period}
                  </span>
                </div>
              </CardHeader>

              <CardBody className="py-6">
                <ul className="space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="w-5 h-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardBody>

              <CardFooter>
                <Button 
                  className="w-full bg-primary hover:bg-primary/80 text-white font-medium py-3 px-6 rounded-lg"
                  size="lg"
                >
                  {t('get_started')}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <p className="text-gray-600">
            {t('footer_text')}{' '}
            <a href="#" className="text-gray-900 underline hover:text-teal-700 transition-colors">
              {t('pricing_page')}
            </a>
            {' '}{t('footer_text_end')}
          </p>
        </div>
      </div>
    </div>
  );
}