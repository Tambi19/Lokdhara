import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import navlogo from "../assets/navlogo.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBus, faHotel, faLocationDot } from "@fortawesome/free-solid-svg-icons";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isTripOpen, setIsTripOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="fixed top-0 w-full bg-white z-50 shadow-sm border-b border-gray-200 rounded-b-3xl transition-all duration-300">
      <div className="container mx-auto px-4 relative">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img src={navlogo} alt="Logo" className="h-12 w-auto rounded-xl shadow-md" />
          </div>

          {/* Desktop Nav */}
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
            <a
              href="#crowdreport"
              className="hover:text-yellow-600 relative after:block after:h-[2px] after:w-0 after:bg-yellow-600 after:transition-all after:duration-300 hover:after:w-full"
            >
              Community
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
                  <a
                    href="#transport"
                    className="flex items-center gap-2 px-4 py-2 hover:bg-yellow-100"
                  >
                    <FontAwesomeIcon icon={faBus} className="w-5 h-5 text-blue-500" />
                    Local Transport Services
                  </a>
                  <a
                    href="#stay"
                    className="flex items-center gap-2 px-4 py-2 hover:bg-yellow-100"
                  >
                    <FontAwesomeIcon icon={faHotel} className="w-5 h-5 text-blue-500" />
                    Stay & Food Recommendations
                  </a>
                  <a
                    href="#itineraries"
                    className="flex items-center gap-2 px-4 py-2 hover:bg-yellow-100"
                  >
                    <FontAwesomeIcon icon={faLocationDot} className="w-5 h-5 text-blue-500" />
                    Travel Itineraries
                  </a>
                </div>
              )}
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="p-2 text-gray-700 focus:outline-none">
              {isMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>

        {/* 🌐 Mobile Dropdown Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 w-full bg-white shadow-xl border-t border-gray-200 rounded-b-3xl animate-fadeIn">
            <div className="flex flex-col items-start px-6 py-4 space-y-4 text-gray-700 font-medium">
              <a
                href="#home"
                onClick={() => setIsMenuOpen(false)}
                className="w-full hover:text-yellow-600"
              >
                Home
              </a>
              <a
                href="#explore"
                onClick={() => setIsMenuOpen(false)}
                className="w-full hover:text-yellow-600"
              >
                Explore
              </a>
              <a
                href="#crowdreport"
                onClick={() => setIsMenuOpen(false)}
                className="w-full hover:text-yellow-600"
              >
                Community
              </a>

              {/* Trip Dropdown in Mobile */}
              <div className="w-full">
                <button
                  onClick={() => setIsTripOpen(!isTripOpen)}
                  className="w-full text-left hover:text-yellow-600 flex justify-between items-center"
                >
                  Plan Your Trip
                  <span>{isTripOpen ? "▲" : "▼"}</span>
                </button>

                {isTripOpen && (
                  <div className="mt-2 ml-4 flex flex-col gap-2 text-gray-600 text-sm">
                    <a
                      href="#transport"
                      onClick={() => setIsMenuOpen(false)}
                      className="flex items-center gap-2 hover:text-yellow-600"
                    >
                      <FontAwesomeIcon icon={faBus} className="w-4 h-4 text-blue-500" />
                      Local Transport
                    </a>
                    <a
                      href="#stay"
                      onClick={() => setIsMenuOpen(false)}
                      className="flex items-center gap-2 hover:text-yellow-600"
                    >
                      <FontAwesomeIcon icon={faHotel} className="w-4 h-4 text-blue-500" />
                      Stay & Food
                    </a>
                    <a
                      href="#itineraries"
                      onClick={() => setIsMenuOpen(false)}
                      className="flex items-center gap-2 hover:text-yellow-600"
                    >
                      <FontAwesomeIcon icon={faLocationDot} className="w-4 h-4 text-blue-500" />
                      Itineraries
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
