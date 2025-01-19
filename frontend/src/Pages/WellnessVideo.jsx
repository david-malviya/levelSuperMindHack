import React, { useState } from 'react';
import { PlayCircle } from 'lucide-react';
import Navigation from './WellnessBanner';


const videos = [
  {
    id: '1',
    title: 'Live Life to the fullest',
    description: 'It emphasizes living with awareness, balance, and inner peace. He teaches that true fulfillment comes from understanding oneself and aligning actions with higher purpose, rather than external achievements',
    videoId: '9s-2wkfBk4s?si=uUTu6irSV_u8nB8u'
  },
  {
    id: '2',
    title: '10 Minutes to Start Your Day Right!',
    description: 'It offers a quick, transformative morning routine that helps you center your mind, invigorate your body, and align your energy. Through practical techniques like breathing exercises and mindful awareness, it encourages a balanced, calm, and focused approach to life, setting a positive foundation for the day ahead.',
    videoId: 'BjVPyzegUOQ?si=fKJSQ31yo5lUFsmi'
  },
  {
    id: '3',
    title: 'Understanding Karma',
    description: 'Karma is the law of cause and effect, where every action, thought, or intention influences future outcomes. Good actions lead to positive results, while negative actions bring consequences, shaping one\'s destiny.',
    videoId: 'a0mYxG89JtQ?si=lw0PEY7IWPRE10KR'
  }
];

const VideoSection = () => {
  const [activeVideo, setActiveVideo] = useState(videos[0]);

  return (
    <>
    <Navigation/>
    <section className="bg-gradient-to-b from-emerald-50 to-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Wellness Videos</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our curated collection of Spiritual videos designed to help you find peace, 
            clarity, and balance in your daily life.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="aspect-video bg-gray-900 rounded-xl overflow-hidden shadow-xl">
              <iframe
                src={`https://www.youtube.com/embed/${activeVideo.videoId}`}
                title={activeVideo.title}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div className="mt-6">
              <h3 className="text-2xl font-semibold text-gray-900">{activeVideo.title}</h3>
              <p className="mt-2 text-gray-600">{activeVideo.description}</p>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">More Videos</h3>
              <div className="space-y-4">
                {videos.map((video) => (
                  <button
                    key={video.id}
                    onClick={() => setActiveVideo(video)}
                    className={`w-full text-left p-4 rounded-lg transition-all duration-200 ${
                      activeVideo.id === video.id
                        ? 'bg-indigo-50 border-2 border-indigo-200'
                        : 'bg-gray-50 hover:bg-gray-100'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <PlayCircle
                        className={`w-6 h-6 mt-1 ${
                          activeVideo.id === video.id ? 'text-indigo-600' : 'text-gray-400'
                        }`}
                      />
                      <div>
                        <h4 className="font-medium text-gray-900">{video.title}</h4>
                        <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                          {video.description}
                        </p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div> 
    </section>
    </>
  );
};

export default VideoSection;