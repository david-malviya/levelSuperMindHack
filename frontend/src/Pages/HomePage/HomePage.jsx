

import React, { useEffect, useState } from 'react';
import { Quote,  Moon, Stars, Sparkles, Compass, Brain, Heart } from 'lucide-react';
import Planet from './Planet';
import WellnessBanner from '../WellnessBanner'
import about from '../../assets/aboutus.jpg'
import sweta from '../../assets/sweta.jpg'
import bharti from '../../assets/bharti.jpg'
import mandirabedi from '../../assets/mandirabedi.jpg'
import { useNavigate } from 'react-router-dom';
import mercury from './Images/mercury.png'
import venus from './Images/venus.png'
import earth from './Images/earth.png'
import mars from './Images/mars.png'
import jupyter from './Images/jupiter.png'
import saturn from './Images/saturn.png'
import uranus from './Images/uranus.png'
import neptune from './Images/neptune.png'
import sun from './Images/sun.png';

function HomePage() {
    const [token,setToken] = useState(false)
    useEffect(()=>{
    const token = localStorage.getItem('token')
    if(token){
      setToken(true)
    }
    },[])
const navigate =useNavigate()
const TalkToAI = ()=>{
    navigate('/chatbot')
}

    const services = [
        {
            name: "Vedic Astrology",
            description: "Discover your life path through ancient Vedic wisdom and planetary alignments.",
            icon: Stars,
            image: "https://images.unsplash.com/photo-1532968961962-8a0cb3a2d4f5?auto=format&fit=crop&q=80&w=800"
        },
        {
            name: "Birth Chart Analysis",
            description: "Get detailed insights into your personality, strengths, and life purpose.",
            icon: Moon,
            image: "https://media.istockphoto.com/id/1182564329/photo/full-moon-on-a-clear-night-stock-photo.jpg?s=2048x2048&w=is&k=20&c=EcvnKNtG0MGxOtupxSa8RRyTnzK8W_xcOlXpaPvvzCA="
        },
        {
            name: "Relationship Compatibility",
            description: "Understand your relationships through celestial compatibility analysis.",
            icon: Heart,
            image: "https://images.unsplash.com/photo-1596815064285-45ed8a9c0463?auto=format&fit=crop&q=80&w=800"
        },
        {
            name: "Career Guidance",
            description: "Navigate your professional path with astrological career insights.",
            icon: Compass,
            image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800"
        },
        {
            name: "Spiritual Counseling",
            description: "Find inner peace and purpose through spiritual astrological guidance.",
            icon: Brain,
            image: "https://images.unsplash.com/photo-1528319725582-ddc096101511?auto=format&fit=crop&q=80&w=800"
        },
        {
            name: "Remedial Solutions",
            description: "Discover personalized remedies to overcome life's challenges.",
            icon: Sparkles,
            image: "https://images.unsplash.com/photo-1531747118685-ca8fa6e08806?auto=format&fit=crop&q=80&w=800"
        }
    ];



    const planets = [
        {
            name: 'Mercury',
            image: mercury,
            orbitSize: 120,
            speed: 20,
            size: 'w-10 h-10'
        },
        {
            name: 'Venus',
            image: venus,
            orbitSize: 160,
            speed: 25,
            size: 'w-10 h-10'
        },
        {
            name: 'Earth',
            image: earth,
            orbitSize: 200,
            speed: 30,
            size: 'w-10 h-10'
        },
        {
            name: 'Mars',
            image: mars,
            orbitSize: 240,
            speed: 35,
            size: 'w-10 h-10'
        },
        {
            name: 'Jupiter',
            image: jupyter,
            orbitSize: 300,
            speed: 45,
            size: 'w-10 h-10'
        },
        {
            name: 'Saturn',
            image: saturn,
            orbitSize: 360,
            speed: 50,
            size: 'w-10 h-10'
        },
        {
            name: 'Uranus',
            image: uranus,
            orbitSize: 420,
            speed: 55,
            size: 'w-8 h-8'
        },
        {
            name: 'Neptune',
            image: neptune,
            orbitSize: 480,
            speed: 60,
            size: 'w-8 h-8'
        }
    ];



    const testimonials = [
        {
            id: 'video1',
            videoId: 'i1KL9-vcB7w', // Replace with your actual YouTube video ID
            name: 'Mandira Bedi',
            title: 'Life Coach',
            quote: 'The accuracy of my kundli reading was incredible. It helped me make important life decisions with confidence.',
            image: mandirabedi
        },
        {
            id: 'video2',
            videoId: 'wSmmPNmnVMM', // Replace with your actual YouTube video ID
            name: 'Shweta Tiwari',
            title: 'Entrepreneur',
            quote: 'SoulAstro\'s predictions were spot on. Their guidance helped me navigate crucial business decisions.',
            image: sweta
        },
        {
            id: 'video3',
            videoId: '4Wyr0AAW2Sk', // Replace with your actual YouTube video ID
            name: 'Bharti Singh',
            title: 'Yoga Instructor',
            quote: 'The spiritual insights I gained through my kundli reading transformed my perspective on life.',
            image: bharti
        }
    ];




    return (
        <div className="min-h-screen bg-[#0a0a2a] text-white overflow-hidden">
            {/* Hero Section */}
            <div className="absolute top-0 left-0 w-full p-6 z-50">
                <nav className="flex justify-between items-center max-w-7xl mx-auto">
                    <h1 className="text-3xl font-bold">SoulAstro</h1>
                    <div className="space-x-6">
                        <button
                        onClick={()=>navigate('horoscope')}
                            className="px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all transform hover:scale-105"
                        >
                            Daily Horoscope
                        </button>
                        <button
                        onClick={()=>navigate('authenticate')}
                            className="px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all transform hover:scale-105"
                        >
                            {token?'SignOut':'SignIn'}
                        </button>
                        <button

                            onClick={TalkToAI}
                            className="px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all transform hover:scale-105"
                        >
                            Talk to AI
                        </button>
                    </div>
                </nav>
            </div>

            {/* Solar System */}
            <div className="relative w-full h-screen flex items-center justify-center mb-24">
                {/* Stars background */}
                <div className="absolute inset-0 stars"></div>

                {/* Sun */}
                <div className="relative z-10">
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                        <div className="relative">
                            {planets.map((planet, index) => (
                                <Planet
                                    key={planet.name}
                                    {...planet}
                                />
                            ))}
                            <div className="w-24 h-24 rounded-full animate-pulse">
                                    <img
                                        src={sun}
                                        alt="Sun"
                                        className="w-full h-full object-cover rounded-full"
                                    />
                                </div>
                        </div>
                    </div>
                </div>

                {/* Content Overlay */}
                <div className="absolute bottom-20 left-0 w-full text-center z-20 ">
                    <h2 className="text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-500">
                    Align Your Stars, Uncover Your Destiny                    </h2>
                    <p className="text-xl mb-8 text-gray-300 max-w-2xl mx-auto">
                        Explore the mysteries of the universe and uncover your destiny through the ancient wisdom of the stars.
                    </p>
                    <button
                    onClick={()=>navigate('/zodiac')}
                    className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all transform hover:scale-105">
                        Get Your Zodiac
                    </button>
                </div>
            </div>







            < WellnessBanner/>







            





            <section className="relative z-20 min-h-screen py-28">
        {/* Stars Background */}
        <div className="absolute inset-0">
          <div className="stars"></div>
          <div className="stars2"></div>
          <div className="stars3"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <h2 className="text-4xl font-bold mb-16 text-center">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-500 w-fit m-auto border-0 border-b-2 border-yellow-500">
              Our Services
            </span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div 
                  key={service.name}
                  className="group relative overflow-hidden rounded-xl transition-all duration-500 hover:scale-105"
                >
                  <div className="absolute inset-0">
                    <img 
                      src={service.image} 
                      alt={service.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-[#0a0a2a]/80 group-hover:bg-[#0a0a2a]/70 transition-all duration-500"></div>
                  </div>

                  <div className="relative p-8 h-full flex flex-col items-center text-center z-10">
                    <div className="p-3 bg-purple-600/30 rounded-full backdrop-blur-sm mb-6 group-hover:bg-purple-600/50 transition-all duration-500">
                      <Icon className="w-8 h-8 text-yellow-300" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-yellow-300">{service.name}</h3>
                    <p className="text-gray-300">{service.description}</p>
                    
                    <button className="mt-6 px-6 py-2 bg-gradient-to-r from-purple-600/0 to-pink-600/0 group-hover:from-purple-600 group-hover:to-pink-600 rounded-full text-transparent group-hover:text-white transition-all duration-500 border border-purple-600/30 group-hover:border-transparent">
                      Learn More
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>























      <section className="relative z-20 min-h-screen py-28">
        {/* Stars Background */}
        <div className="absolute inset-0">
          <div className="stars"></div>
          <div className="stars2"></div>
          <div className="stars3"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <h2 className="text-4xl font-bold mb-16 text-center">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-500 w-fit m-auto border-0 border-b-2 border-yellow-500">
              Our Happy Customers
            </span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="space-y-6">
                {/* Video Container */}
                <div className="relative aspect-video bg-[#2a2a6a] rounded-lg overflow-hidden group">
                  <iframe
                    className="w-full h-full"
                    src={`https://www.youtube.com/embed/${testimonial.videoId}`}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>

                {/* Testimonial Card */}
                <div className="bg-[#2a2a6a]/50 p-6 rounded-lg backdrop-blur-sm">
                  <div className="flex items-start gap-4">
                    <Quote className="w-8 h-8 text-purple-400 flex-shrink-0 mt-1" />
                    <p className="text-gray-300 italic">{testimonial.quote}</p>
                  </div>
                  <div className="mt-4 flex items-center gap-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-semibold text-yellow-300">{testimonial.name}</h4>
                      <p className="text-sm text-gray-400">{testimonial.title}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>




            <section id="about" className="min-h-screen relative z-20 py-20 mt-24 bg-[#0A0A2A]">
    {/* Background Image with Overlay */}
    <div className="absolute inset-0 z-0">
        <img 
            src={about}
            alt="Galaxy background"
            className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-[#0a0a2a]/90"></div>
    </div>

    <div className="max-w-7xl mx-auto px-6 relative z-10">
        <h2 className="text-4xl font-bold mb-12 text-center">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-500 w-fit m-auto border-0 border-b-2 border-yellow-500">
                About SoulAstro
            </span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
                <div className="bg-[#2a2a6a]/30 p-8 rounded-lg backdrop-blur-sm border border-purple-500/20">
                    <h3 className="text-3xl font-semibold mb-6 text-yellow-300">Unveiling Cosmic Wisdom</h3>
                    <div className="space-y-4 text-gray-300">
                        <p>
                            Welcome to SoulAstro, where ancient Vedic wisdom meets modern technology. Founded with the vision of making authentic astrological guidance accessible to everyone, we combine centuries-old astrological principles with cutting-edge digital innovation.
                        </p>
                        <p>
                            Our platform offers comprehensive Kundli analysis, personalized horoscopes, and expert consultations that help you navigate life's journey with confidence. Whether you're seeking clarity in relationships, career guidance, or spiritual growth, our team of experienced astrologers provides accurate, actionable insights.
                        </p>
                        <p>
                            What sets us apart is our commitment to authenticity and precision. We utilize advanced astronomical calculations and AI-powered analysis to ensure the most accurate readings while maintaining the sacred traditions of Vedic astrology.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-3 gap-4">
                    <div className="bg-[#2a2a6a]/30 p-6 rounded-lg backdrop-blur-sm border border-purple-500/20 text-center">
                        <h4 className="text-3xl font-bold text-yellow-300 mb-2">20K+</h4>
                        <p className="text-gray-300">Happy Clients</p>
                    </div>
                    <div className="bg-[#2a2a6a]/30 p-6 rounded-lg backdrop-blur-sm border border-purple-500/20 text-center">
                        <h4 className="text-3xl font-bold text-yellow-300 mb-2">50+</h4>
                        <p className="text-gray-300">Expert Astrologers</p>
                    </div>
                    <div className="bg-[#2a2a6a]/30 p-6 rounded-lg backdrop-blur-sm border border-purple-500/20 text-center">
                        <h4 className="text-3xl font-bold text-yellow-300 mb-2">98%</h4>
                        <p className="text-gray-300">Accuracy Rate</p>
                    </div>
                </div>
            </div>

            <div className="space-y-6">
                <div className="bg-[#2a2a6a]/30 p-8 rounded-lg backdrop-blur-sm border border-purple-500/20">
                    <h3 className="text-2xl font-semibold mb-4 text-yellow-300">Our Services</h3>
                    <ul className="space-y-4 text-gray-300">
                        <li className="flex items-center gap-3">
                            <Stars className="text-yellow-300 w-5 h-5" />
                            <span>Detailed Kundli Analysis</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <Moon className="text-yellow-300 w-5 h-5" />
                            <span>Birth Chart Readings</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <Heart className="text-yellow-300 w-5 h-5" />
                            <span>Relationship Compatibility</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <Compass className="text-yellow-300 w-5 h-5" />
                            <span>Career Guidance</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <Brain className="text-yellow-300 w-5 h-5" />
                            <span>Spiritual Counseling</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <Sparkles className="text-yellow-300 w-5 h-5" />
                            <span>Remedial Solutions</span>
                        </li>
                    </ul>
                </div>

                <div className="bg-[#2a2a6a]/30 p-8 rounded-lg backdrop-blur-sm border border-purple-500/20">
                    <h3 className="text-2xl font-semibold mb-4 text-yellow-300">Why Choose Us</h3>
                    <ul className="space-y-3 text-gray-300">
                        <li>✨ Expert Vedic Astrologers</li>
                        <li>✨ Advanced Technology Integration</li>
                        <li>✨ Personalized Consultation</li>
                        <li>✨ 24/7 Support Available</li>
                        <li>✨ Secure & Confidential</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</section>

        </div>
    );
}

export default HomePage;