'use client';

import { Twitter, Instagram, Facebook } from 'lucide-react';

function CommunitySection() {
  return (
    <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
              Community
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl">
              Follow us on social media for daily quizzes, challenges and brain teasers to keep your mind sharp
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