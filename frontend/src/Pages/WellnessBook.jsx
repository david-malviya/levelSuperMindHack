import React from 'react';
import { BookOpen, Star, ExternalLink } from 'lucide-react';
import Navigation from './WellnessBanner';
import yogi from '../assets/yogi.jpg'
import bhagwatgita from '../assets/bhagwatgita.jpg'
import karma from '../assets/karma.jpg'

const books = [
  {
    id: '1',
    title: 'Autobiography of a yogi',
    author: ' Paramahansa Yogananda',
    description:
      '"Autobiography of a Yogi" reveals the path of self-realization through yoga, meditation, and spiritual insights, bridging Eastern wisdom with universal truth.',
    rating: 4.7,
    coverUrl:yogi,
    amazonUrl:
      'https://www.amazon.in/Autobiography-Yogi-HINDI-Paramahansa-Yogananda/dp/9389432472/ref=zg_bs_g_10533824031_d_sccl_4/262-7165653-8528301?psc=1',
    tags: ['Mindfulness', 'Spirituality', 'Self-Help']
  },
  {
    id: '2',
    title: 'Karma',
    author: 'Sadhguru ',
    description:
      'It explores how karma shapes life and shows how conscious action creates freedom and purpose.',
    rating: 4.8,
    coverUrl:karma,
    amazonUrl:
      'https://www.amazon.in/Karma-Yogis-Guide-Crafting-Destiny/dp/0143452673/ref=zg_bs_g_10533824031_d_sccl_10/262-7165653-8528301?psc=1',
    tags: ['Habits', 'Personal Development', 'Psychology']
  },
  {
    id: '3',
    title: 'Shrimad BhagwatGita',
    author: ' A.C. Bhaktivendanta Swami Prabhupada',
    description:
      'It is a sacred scripture of Hindu philosophy, part of the Mahabharata, where Lord Krishna imparts spiritual wisdom to Arjuna. It explores themes like duty (dharma), devotion, and self-realization, offering guidance for living a purposeful and balanced life. It is revered as a universal guide to spiritual and ethical living.',
    rating: 4.6,
    coverUrl:bhagwatgita,
    amazonUrl:
      'https://www.amazon.in/Shrimad-Bhagwat-Geeta-Yatharoop-Hindi/dp/938598618X/ref=sr_1_3?crid=1AII671XFH8G2&dib=eyJ2IjoiMSJ9.3_TY77GMs83QE5zQnxCIlF5wrCwXjq4W1r3SaAhXSy_6nRcIaW_ySksm2TVTKgDvR7nnUv_Efc_10HAUN4z51R2a0o-OdFPdc7hMonC5gPIQerjUMbrjaEfs5O7xuaxbeEEwpUEHMLlVGs65G-xWkrnA6Cb1CSJtpKTZadNSfLnaiT2yJeeUl6Fja6u1P43yWVwqOyt3LiUilgD7JrT_NKnMXHfqx1zeMD8UHclbMTA.YL_G1edzXkxkxTogHiuZqal95i8GfKVfVevOff6KoKw&dib_tag=se&keywords=gita&qid=1737229333&s=books&sprefix=gita%2Cstripbooks%2C179&sr=1-3',
    tags: ['Mindfulness', 'Wisdom', 'Mental Peace']
  }
];

const WellnessBook = () => {
  return (
    <>
    <Navigation/>
    <section id="books" className="bg-gradient-to-b from-emerald-50 to-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <BookOpen className="w-8 h-8 text-emerald-600" />
            <h2 className="text-3xl font-bold text-gray-900">Mindfulness Library</h2>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover transformative books that will guide you on your journey to Spiritual wellness and inner peace.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {books.map((book) => (
            <div
              key={book.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="aspect-[3/4] relative overflow-hidden">
                <img
                  src={book.coverUrl}
                  alt={book.title}
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center gap-1 text-yellow-400 mb-2">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(book.rating) ? 'fill-current' : 'opacity-50'
                        }`}
                      />
                    ))}
                    <span className="ml-2 text-white text-sm">{book.rating}</span>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {book.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium text-emerald-700 bg-emerald-50 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-2">{book.title}</h3>
                <p className="text-sm text-emerald-600 mb-3">by {book.author}</p>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {book.description}
                </p>

                <a
                  href={book.amazonUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-600 hover:text-emerald-700 transition-colors duration-200"
                >
                  View on Amazon
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </>

  );
};

export default WellnessBook;