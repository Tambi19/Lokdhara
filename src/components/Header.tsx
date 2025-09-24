import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import navlogo from "../assets/navlogo.png"; 
import right1 from "../assets/right1.webp"; 
import right2 from "../assets/right2.png"; 
import title from "../assets/title.png";  // <-- import your title image

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="fixed top-0 w-full bg-white z-50 shadow-sm border-b border-gray-200 rounded-b-3xl">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Left Logo */}
          <div className="flex items-center space-x-3">
            <img src={navlogo} alt="Logo" className="h-20 w-auto" />
            {/* Replace text with title image */}
            <img src={title} alt="DarshanX Title" className="h-24 w-auto" />
          </div>

          {/* Desktop Navigation */} 
          <nav className="hidden md:flex items-center space-x-8 text-gray-700 font-medium">
            <a href="#home" className="hover:text-yellow-600 relative after:block after:h-[2px] after:w-0 after:bg-yellow-600 after:transition-all after:duration-300 hover:after:w-full">Home</a>
            <a href="#explore" className="hover:text-yellow-600 relative after:block after:h-[2px] after:w-0 after:bg-yellow-600 after:transition-all after:duration-300 hover:after:w-full">Explore</a>
            <a href="#vr-tours" className="hover:text-yellow-600 relative after:block after:h-[2px] after:w-0 after:bg-yellow-600 after:transition-all after:duration-300 hover:after:w-full">VR Tours</a>
            <a href="#archive" className="hover:text-yellow-600 relative after:block after:h-[2px] after:w-0 after:bg-yellow-600 after:transition-all after:duration-300 hover:after:w-full">Archive</a>
            <a href="#events" className="hover:text-yellow-600 relative after:block after:h-[2px] after:w-0 after:bg-yellow-600 after:transition-all after:duration-300 hover:after:w-full">Events</a>
            <a href="#shop" className="hover:text-yellow-600 relative after:block after:h-[2px] after:w-0 after:bg-yellow-600 after:transition-all after:duration-300 hover:after:w-full">Shop</a>
          </nav>

          {/* Right Side Logos */}
          <div className="hidden md:flex items-center space-x-4">
            <img src={right1} alt="Right Logo 1" className="h-12 w-auto" />
            <img src={right2} alt="Right Logo 2" className="h-12 w-auto" />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="p-2 text-gray-700">
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-sm">
          <nav className="flex flex-col space-y-2 px-4 py-3 text-gray-700 font-medium">
            <a href="#home" className="hover:text-yellow-600">Home</a>
            <a href="#explore" className="hover:text-yellow-600">Explore</a>
            <a href="#vr-tours" className="hover:text-yellow-600">VR Tours</a>
            <a href="#archive" className="hover:text-yellow-600">Archive</a>
            <a href="#events" className="hover:text-yellow-600">Events</a>
            <a href="#shop" className="hover:text-yellow-600">Shop</a>
          </nav>
          <div className="flex items-center justify-center space-x-4 py-3 border-t border-gray-100">
            <img src={right1} alt="Right Logo 1" className="h-8 w-auto" />
            <img src={right2} alt="Right Logo 2" className="h-8 w-auto" />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
