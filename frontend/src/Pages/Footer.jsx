import { Facebook, Github, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from 'lucide-react'
import React from 'react'

function Footer() {
  return (
    <div>
      <footer className="relative z-20 bg-[#0a0a2a] border-t border-purple-500/20">
    <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <div className="space-y-6">
                <h3 className="text-2xl font-bold text-yellow-300">SoulAstro</h3>
                <p className="text-gray-300">
                    Unlocking cosmic wisdom for your spiritual journey. Expert astrological guidance for life's important decisions.
                </p>
                <div className="flex space-x-4">
                    <a href="https://github.com/soulastro" target="_blank" rel="noopener noreferrer" 
                       className="text-gray-300 hover:text-yellow-300 transition-colors">
                        <Github className="w-6 h-6" />
                    </a>
                    <a href="https://linkedin.com/company/soulastro" target="_blank" rel="noopener noreferrer"
                       className="text-gray-300 hover:text-yellow-300 transition-colors">
                        <Linkedin className="w-6 h-6" />
                    </a>
                    <a href="https://twitter.com/soulastro" target="_blank" rel="noopener noreferrer"
                       className="text-gray-300 hover:text-yellow-300 transition-colors">
                        <Twitter className="w-6 h-6" />
                    </a>
                    <a href="https://instagram.com/soulastro" target="_blank" rel="noopener noreferrer"
                       className="text-gray-300 hover:text-yellow-300 transition-colors">
                        <Instagram className="w-6 h-6" />
                    </a>
                    <a href="https://facebook.com/soulastro" target="_blank" rel="noopener noreferrer"
                       className="text-gray-300 hover:text-yellow-300 transition-colors">
                        <Facebook className="w-6 h-6" />
                    </a>
                </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
                <h3 className="text-xl font-semibold text-yellow-300">Quick Links</h3>
                <ul className="space-y-3">
                    <li>
                        <a href="#services" className="text-gray-300 hover:text-yellow-300 transition-colors">Services</a>
                    </li>
                    <li>
                        <a href="#about" className="text-gray-300 hover:text-yellow-300 transition-colors">About Us</a>
                    </li>
                    <li>
                        <a href="#testimonials" className="text-gray-300 hover:text-yellow-300 transition-colors">Testimonials</a>
                    </li>
                    <li>
                        <a href="/blog" className="text-gray-300 hover:text-yellow-300 transition-colors">Blog</a>
                    </li>
                    <li>
                        <a href="/careers" className="text-gray-300 hover:text-yellow-300 transition-colors">Careers</a>
                    </li>
                </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
                <h3 className="text-xl font-semibold text-yellow-300">Contact Us</h3>
                <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                        <MapPin className="w-5 h-5 text-purple-400 flex-shrink-0 mt-1" />
                        <p className="text-gray-300">
                            3rd Floor, Tower D<br />
                            Kamala Mills Compound<br />
                            Lower Parel<br />
                            Mumbai, Maharashtra 400001<br />
                            India
                        </p>
                    </div>
                    <div className="flex items-center space-x-3">
                        <Phone className="w-5 h-5 text-purple-400" />
                        <p className="text-gray-300">+91 (123) 456-7890</p>
                    </div>
                    <div className="flex items-center space-x-3">
                        <Mail className="w-5 h-5 text-purple-400" />
                        <a href="mailto:contact@soulastro.com" className="text-gray-300 hover:text-yellow-300 transition-colors">
                            contact@soulastro.com
                        </a>
                    </div>
                </div>
            </div>

            {/* Newsletter */}
            <div className="space-y-6">
                <h3 className="text-xl font-semibold text-yellow-300">Newsletter</h3>
                <p className="text-gray-300">Subscribe to receive celestial updates and spiritual insights.</p>
                <form className="space-y-3">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="w-full px-4 py-2 bg-[#2a2a6a]/50 border border-purple-500/20 rounded-lg focus:outline-none focus:border-yellow-300 text-white placeholder-gray-400"
                    />
                    <button
                        type="submit"
                        className="w-full px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg text-white font-semibold hover:from-purple-700 hover:to-pink-700 transition-all"
                    >
                        Subscribe
                    </button>
                </form>
            </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-purple-500/20 text-center">
            <p className="text-gray-400">
                © {new Date().getFullYear()} SoulAstro. All rights reserved. |{' '}
                <a href="/privacy" className="hover:text-yellow-300 transition-colors">Privacy Policy</a> |{' '}
                <a href="/terms" className="hover:text-yellow-300 transition-colors">Terms of Service</a>
            </p>
        </div>
    </div>
</footer>
    </div>
  )
}

export default Footer