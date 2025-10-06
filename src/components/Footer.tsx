import React from 'react';
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, Youtube, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-700 to-orange-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <span className="text-xl font-bold">Sanskriti-X</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Explore culture and heritage sites with AR.  
              Sanskriti-X brings traditions to life through immersive digital experiences 
              that connect you with India’s living heritage.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Explore</h3>
            <ul className="space-y-3">
              <li><a href="#home" className="text-gray-300 hover:text-white transition-colors duration-200">Home</a></li>
              <li><a href="#sites" className="text-gray-300 hover:text-white transition-colors duration-200">Heritage Sites</a></li>
              <li><a href="#ar-experiences" className="text-gray-300 hover:text-white transition-colors duration-200">AR Experiences</a></li>
              <li><a href="#archive" className="text-gray-300 hover:text-white transition-colors duration-200">Digital Archive</a></li>
              <li><a href="#festivals" className="text-gray-300 hover:text-white transition-colors duration-200">Festivals</a></li>
              <li><a href="#shop" className="text-gray-300 hover:text-white transition-colors duration-200">Shop</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">AR Guided Tours</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Cultural Storytelling</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Festival Bookings</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Local Experiences</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Photography & AR Filters</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Offline AR Maps</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">Sanskriti-X HQ</p>
                  <p className="text-gray-300">New Delhi, India</p>
                  <p className="text-gray-300">PIN 110001</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-orange-500" />
                <a href="tel:+91-98765-43210" className="text-gray-300 hover:text-white transition-colors duration-200">
                  +91-98765-43210
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-orange-500" />
                <a href="mailto:info@lokdhara.in" className="text-gray-300 hover:text-white transition-colors duration-200">
                  info@sanskriti-X.in
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="max-w-md mx-auto text-center">
            <h3 className="text-lg font-semibold mb-2">Stay Connected</h3>
            <p className="text-gray-300 mb-4">Get updates on heritage AR tours and cultural events</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
              <button className="px-6 py-2 bg-orange-700 hover:bg-orange-800 rounded-r-lg transition-colors duration-200">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            <p>&copy; 2025 Sanskriti X. All rights reserved.</p>
          </div>
          <div className="flex items-center space-x-6 text-sm">
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Support</a>
          </div>
          <div className="flex items-center text-gray-400 text-sm mt-4 md:mt-0">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-orange-500 mx-1" />
            <span>to celebrate India’s heritage</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
