import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import navlogo from "../assets/navlogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBus, faHotel, faLocationDot } from "@fortawesome/free-solid-svg-icons";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isTripOpen, setIsTripOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Change navbar background slightly when scrolled
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 backdrop-blur-xl transition-all duration-500 ${
        isScrolled
          ? "bg-white/10 border-b border-yellow-300/20 shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 relative">
        <div className="flex items-center justify-between h-16">
          {/* 🌸 Logo */}
          <div className="flex items-center space-x-3">
            <img
              src={navlogo}
              alt="Logo"
              className="h-12 w-auto rounded-xl shadow-md ring-2 ring-yellow-100/50"
            />
            {/* <h1 className="text-2xl font-bold bg-gradient-to-r from-yellow-300 via-orange-400 to-pink-500 bg-clip-text text-transparent drop-shadow-lg tracking-wide">
            Lokdhara
            </h1> */}
          </div>

          {/* 🪷 Desktop Navigation */}
          <nav className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center space-x-10 font-semibold tracking-wide">
            {["Home", "Explore", "Community"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="relative group text-white/90 hover:text-transparent bg-gradient-to-r from-yellow-300 via-orange-400 to-pink-500 bg-clip-text transition duration-500"
              >
                {item}
                {/* 🔥 Glowing underline */}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500 rounded-full group-hover:w-full transition-all duration-500"></span>

                {/* ✨ Glow on hover */}
              </a>
            ))}

            {/* 🏯 Plan Your Trip Dropdown */}
            <div
              className="relative group text-white/90 hover:text-transparent bg-gradient-to-r from-yellow-300 via-orange-400 to-pink-500 bg-clip-text transition duration-500"
              onMouseEnter={() => setIsTripOpen(true)}
              onMouseLeave={() => setIsTripOpen(false)}
            >
              <button>Plan Your Trip</button>

              {isTripOpen && (
                <div className="absolute left-0 mt-4 w-64 bg-white/90 backdrop-blur-md shadow-2xl border border-yellow-300/40 rounded-2xl py-3 animate-fadeIn">
                  <a
                    href="#transport"
                    className="flex items-center gap-3 px-5 py-2 text-gray-700 hover:bg-yellow-100/70 transition"
                  >
                    <FontAwesomeIcon icon={faBus} className="text-amber-600" />
                    Local Transport
                  </a>
                  <a
                    href="#stay"
                    className="flex items-center gap-3 px-5 py-2 text-gray-700 hover:bg-yellow-100/70 transition"
                  >
                    <FontAwesomeIcon icon={faHotel} className="text-amber-600" />
                    Stay & Food
                  </a>
                  <a
                    href="#itineraries"
                    className="flex items-center gap-3 px-5 py-2 text-gray-700 hover:bg-yellow-100/70 transition"
                  >
                    <FontAwesomeIcon
                      icon={faLocationDot}
                      className="text-amber-600"
                    />
                    Itineraries
                  </a>
                </div>
              )}
            </div>
          </nav>

          {/* 📱 Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="p-2 text-yellow-300 focus:outline-none"
            >
              {isMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>

        {/* 📜 Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 w-full bg-black/70 backdrop-blur-md shadow-xl border-t border-yellow-300/20 rounded-b-3xl animate-fadeIn">
            <div className="flex flex-col items-start px-6 py-5 space-y-4 text-white font-medium">
              {["Home", "Explore", "Community"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsMenuOpen(false)}
                  className="w-full hover:text-yellow-300 transition duration-300"
                >
                  {item}
                </a>
              ))}

              {/* Mobile Dropdown */}
              <div className="w-full">
                <button
                  onClick={() => setIsTripOpen(!isTripOpen)}
                  className="w-full text-left hover:text-yellow-300 flex justify-between items-center"
                >
                  Plan Your Trip
                  <span>{isTripOpen ? "▲" : "▼"}</span>
                </button>

                {isTripOpen && (
                  <div className="mt-2 ml-4 flex flex-col gap-2 text-yellow-100 text-sm">
                    <a
                      href="#transport"
                      onClick={() => setIsMenuOpen(false)}
                      className="flex items-center gap-2 hover:text-yellow-300"
                    >
                      <FontAwesomeIcon icon={faBus} />
                      Local Transport
                    </a>
                    <a
                      href="#stay"
                      onClick={() => setIsMenuOpen(false)}
                      className="flex items-center gap-2 hover:text-yellow-300"
                    >
                      <FontAwesomeIcon icon={faHotel} />
                      Stay & Food
                    </a>
                    <a
                      href="#itineraries"
                      onClick={() => setIsMenuOpen(false)}
                      className="flex items-center gap-2 hover:text-yellow-300"
                    >
                      <FontAwesomeIcon icon={faLocationDot} />
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
