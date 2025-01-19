import React from 'react';
import { Video, BookOpen, GamepadIcon } from 'lucide-react';


export default function WellnessBanner() {
  const sections = [
    {
      id: 'videos',
      title: 'Spirtual Videos',
      icon: Video,
      description: 'Explore spiritual wisdom through guided visuals',
      gradient: 'from-purple-500 to-indigo-500',
      href: '/videos'
    },
    {
      id: 'books',
      title: 'Spirtual Books',
      icon: BookOpen,
      description: 'Timeless teachings for spiritual enlightenment',
      gradient: 'from-emerald-500 to-teal-500',
      href: '/wellness_books'
    },
    {
      id: 'games',
      title: 'Soulful Games',
      icon: GamepadIcon,
      description: 'Engage in mindful activities for inner peace',
      gradient: 'from-orange-500 to-pink-500',
      href: '/WellnessGames'
    }
  ];

  return (
    <div className="bg-[#0A0A2A] py-12 ">
      <h1 className=' text-center mb-16 text-[35px] font-semibold text-yellow-300 w-fit m-auto border-0 border-b-2 border-yellow-500'>Your path to Spirtuality...</h1>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
          {sections.map((section) => {
            const Icon = section.icon;
            return (
              <a
                key={section.id}
                href={section.href}
                className="group relative overflow-hidden rounded-2xl p-6 bg-white shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 px-8 py-3 bg-gradient-to-r from-purple-100 to-pink-200 text-lg font-semibold hover:from-purple-200 hover:to-pink-300 transition-all transform hover:scale-105"
              >
                {/* Gradient Overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${section.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                />
                
                <div className="relative z-10">
                  {/* Icon and Title */}
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${section.gradient}`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {section.title}
                    </h3>
                  </div>
                  
                  {/* Description */}
                  <p className="text-gray-600">
                    {section.description}
                  </p>
                  
                  {/* Explore Now Button */}
                  <div className="mt-4 flex items-center text-sm font-medium">
                    <span
                      className={`bg-gradient-to-r ${section.gradient} bg-clip-text text-transparent`}
                    >
                      Explore Now
                    </span>
                    <svg
                      className={`ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-200 bg-gradient-to-r ${section.gradient} bg-clip-text text-transparent`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}