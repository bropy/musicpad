'use client';

import { Check } from 'lucide-react';
import { plans } from './elements/constant';

// component
export default function PricingPlans() {

    // return
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Explore our plans
          </h1>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto">
            Discover our flexible offers and choose the one that best suits your learning and personal development journey.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8"
            >
              <div className="border-b border-gray-200 pb-6 mb-6">
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
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <Check className="w-5 h-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <button className="w-full bg-teal-700 hover:bg-teal-800 text-white font-medium py-3 px-6 rounded-lg transition-colors">
                Get started
              </button>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-gray-600">
            *Visit our{' '}
            <a href="#" className="text-gray-900 underline hover:text-teal-700 transition-colors">
              pricing page
            </a>
            {' '}to find out more details.
          </p>
        </div>
      </div>
    </div>
  );
}