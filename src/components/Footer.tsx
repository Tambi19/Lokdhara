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
              <div className="w-10 h-10 bg-gradient-to-br from-red-700 to-red-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">D</span>
              </div>
              <span className="text-xl font-bold">DarshanX</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Preserving and sharing Sikkim's sacred heritage through immersive digital experiences 
              and authentic cultural connections.
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
              <li><a href="#explore" className="text-gray-300 hover:text-white transition-colors duration-200">Monasteries</a></li>
              <li><a href="#vr-tours" className="text-gray-300 hover:text-white transition-colors duration-200">VR Tours</a></li>
              <li><a href="#archive" className="text-gray-300 hover:text-white transition-colors duration-200">Digital Archive</a></li>
              <li><a href="#events" className="text-gray-300 hover:text-white transition-colors duration-200">Events</a></li>
              <li><a href="#shop" className="text-gray-300 hover:text-white transition-colors duration-200">Shop</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Guide Booking</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Audio Guides</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Festival Booking</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Cultural Tours</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Photography</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Offline Maps</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">Tourism Department</p>
                  <p className="text-gray-300">Gangtok, Sikkim 737101</p>
                  <p className="text-gray-300">India</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-red-500" />
                <a href="tel:+91-3592-202081" className="text-gray-300 hover:text-white transition-colors duration-200">
                  +91-3592-202081
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-red-500" />
                <a href="mailto:info@monastery360.in" className="text-gray-300 hover:text-white transition-colors duration-200">
                  info@darshanX.in
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="max-w-md mx-auto text-center">
            <h3 className="text-lg font-semibold mb-2">Stay Connected</h3>
            <p className="text-gray-300 mb-4">Get updates on new monastery tours and cultural events</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
              />
              <button className="px-6 py-2 bg-red-700 hover:bg-red-800 rounded-r-lg transition-colors duration-200">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            <p>&copy; 2025 DarshanX. All rights reserved.</p>
          </div>
          <div className="flex items-center space-x-6 text-sm">
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Support</a>
          </div>
          <div className="flex items-center text-gray-400 text-sm mt-4 md:mt-0">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-500 mx-1" />
            <span>for Sikkim's heritage</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;