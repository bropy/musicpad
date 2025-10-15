'use client';

import { BadgeCheck } from "lucide-react";
import { benefits } from './elements/constant';

// component
function BenefitsSection() {
  // return
  return (
      <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-12">
            What Will You Get
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-3">
                  <BadgeCheck className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
                  <p className="text-gray-700 leading-relaxed">
                    {benefit.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
  );
}

export default BenefitsSection;