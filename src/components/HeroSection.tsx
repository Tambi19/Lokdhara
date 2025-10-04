import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHourglassHalf, faBell } from "@fortawesome/free-solid-svg-icons";
import heroimg from "../assets/hero.jpg";

type HeroProps = {
  onNavigate: (tab: "home" | "timetravel" | "arview") => void;
};

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const btnRefs = useRef<HTMLButtonElement[]>([]);

  useEffect(() => {
    btnRefs.current.forEach((btn) => {
      gsap.fromTo(
        btn,
        { opacity: 0, y: 30, scale: 0.9 },
        { opacity: 1, y: 0, scale: 1, duration: 1, ease: "back.out(1.7)" }
      );
    });
  }, []);

  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center text-center text-white"
      style={{
        backgroundImage: `url(${heroimg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-purple-900/40"></div>

      <div className="relative z-10 max-w-3xl px-4">
        <h1 className="text-5xl md:text-6xl font-bold leading-tight font-tibetan">
          Discover{" "}
          <span className="text-purple-300 font-tibetan">Culture & Sacred Heritage</span>
        </h1>
        <p className="mt-6 text-lg md:text-xl text-gray-200">
          Immerse yourself in Cultural Heritage Sites through cutting-edge 360° AR
          technology, exploring centuries of cultural treasures.
        </p>

        {/* CTA Buttons */}
        <div className="mt-8 flex flex-wrap justify-center gap-6">
          <button
            ref={(el) => el && (btnRefs.current[0] = el)}
            onClick={() => onNavigate("timetravel")}
            className="relative flex items-center gap-2 px-8 py-3 rounded-full font-semibold text-white 
                       border border-orange-400/70 backdrop-blur-lg 
                       bg-gradient-to-r from-orange-400/30 to-pink-500/30 
                       hover:from-orange-400/50 hover:to-pink-500/50 
                       transition duration-300 overflow-hidden"
          >
            <FontAwesomeIcon icon={faHourglassHalf} className="w-5 h-5 text-blue-300" />
            Time Travel
          </button>

          <button
            ref={(el) => el && (btnRefs.current[1] = el)}
            onClick={() => onNavigate("arview")}
            className="relative flex items-center gap-2 px-8 py-3 rounded-full font-semibold text-white 
                       border border-orange-400/70 backdrop-blur-lg 
                       bg-gradient-to-r from-orange-400/30 to-pink-500/30 
                       hover:from-orange-400/50 hover:to-pink-500/50 
                       transition duration-300 overflow-hidden"
          >
            <FontAwesomeIcon icon={faBell} className="w-5 h-5 text-white" />
            AR View
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
