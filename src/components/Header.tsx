import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import navlogo from "../assets/navlogo.jpeg"; 
// import title from "../assets/title.png"; 

// Font Awesome imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBus, faHotel, faLocationDot } from "@fortawesome/free-solid-svg-icons";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isTripOpen, setIsTripOpen] = useState(false); // For dropdown
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="fixed top-0 w-full bg-white z-50 shadow-sm border-b border-gray-200 rounded-b-3xl">
  <div className="container mx-auto px-4 relative">
    <div className="flex items-center justify-between h-16">
      {/* Left Logo */}
      <div className="flex items-center space-x-3">
        <img src={navlogo} alt="Logo" className="h-12 w-auto" />
      </div>

      {/* Centered Navigation */}
      <nav className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center space-x-8 text-gray-700 font-medium">
        <a
          href="#home"
          className="hover:text-yellow-600 relative after:block after:h-[2px] after:w-0 after:bg-yellow-600 after:transition-all after:duration-300 hover:after:w-full"
        >
          Home
        </a>
        <a
          href="#explore"
          className="hover:text-yellow-600 relative after:block after:h-[2px] after:w-0 after:bg-yellow-600 after:transition-all after:duration-300 hover:after:w-full"
        >
          Explore
        </a>

        {/* Dropdown */}
        <div
          className="relative"
          onMouseEnter={() => setIsTripOpen(true)}
          onMouseLeave={() => setIsTripOpen(false)}
        >
          <button className="hover:text-yellow-600 relative after:block after:h-[2px] after:w-0 after:bg-yellow-600 after:transition-all after:duration-300 hover:after:w-full">
            Plan Your Trip
          </button>

          {isTripOpen && (
            <div className="absolute left-0 mt-2 w-56 bg-white shadow-lg border border-gray-200 rounded-lg py-2">
              <a href="#transport" className="flex items-center gap-2 px-4 py-2 hover:bg-yellow-100">
                <FontAwesomeIcon icon={faBus} className="w-5 h-5 text-blue-500" />
                Local Transport Services
              </a>
              <a href="#stay" className="flex items-center gap-2 px-4 py-2 hover:bg-yellow-100">
                <FontAwesomeIcon icon={faHotel} className="w-5 h-5 text-blue-500" />
                Stay & Food Recommendations
              </a>
              <a href="#itineraries" className="flex items-center gap-2 px-4 py-2 hover:bg-yellow-100">
                <FontAwesomeIcon icon={faLocationDot} className="w-5 h-5 text-blue-500" />
                Travel Itineraries
              </a>
            </div>
          )}
        </div>
      </nav>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button onClick={toggleMenu} className="p-2 text-gray-700">
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
    </div>
  </div>
</header>

  );
};

export default Header;
