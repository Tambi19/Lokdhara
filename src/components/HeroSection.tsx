import React, { useEffect, useRef } from "react";
import monasteryImg from "../assets/monastery.webp";
import gsap from "gsap";

const Hero: React.FC = () => {
  const btnRefs = useRef<HTMLButtonElement[]>([]);

  useEffect(() => {
    btnRefs.current.forEach((btn) => {
      gsap.fromTo(
        btn,
        { opacity: 0, y: 30, scale: 0.9 },
        { opacity: 1, y: 0, scale: 1, duration: 1, ease: "back.out(1.7)" }
      );

      btn.addEventListener("mouseenter", () => {
        gsap.to(btn, {
          scale: 1.08,
          boxShadow: "0px 0px 25px rgba(255,255,255,0.5)",
          duration: 0.3,
          ease: "power2.out",
        });
      });

      btn.addEventListener("mouseleave", () => {
        gsap.to(btn, {
          scale: 1,
          boxShadow: "0px 0px 8px rgba(255,255,255,0.2)",
          duration: 0.3,
          ease: "power2.inOut",
        });
      });
    });
  }, []);

  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center text-center text-white"
      style={{
        backgroundImage: `url(${monasteryImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-purple-900/40"></div>

      <div className="relative z-10 max-w-3xl px-4">
        <h1 className="text-5xl md:text-6xl font-bold leading-tight">
          Discover Sikkim's{" "}
          <span className="text-purple-300">Sacred Heritage</span>
        </h1>
        <p className="mt-6 text-lg md:text-xl text-gray-200">
          Immerse yourself in ancient monasteries through cutting-edge 360° VR
          technology, exploring centuries of Buddhist wisdom and cultural
          treasures.
        </p>

        {/* CTA Buttons */}
        <div className="mt-8 flex flex-wrap justify-center gap-6">
          {/* VR Tour Button */}
          <button
            ref={(el) => el && (btnRefs.current[0] = el)}
            className="relative px-8 py-3 rounded-full font-semibold text-white 
            border border-teal-400/70 backdrop-blur-lg 
            bg-gradient-to-r from-teal-400/30 to-purple-500/30 
            hover:from-teal-400/50 hover:to-purple-500/50 
            transition duration-300 overflow-hidden"
          >
            Start VR Tour
          </button>

          {/* Explore Map Button */}
          <button
            ref={(el) => el && (btnRefs.current[1] = el)}
            className="relative px-8 py-3 rounded-full font-semibold text-white 
            border border-orange-400/70 backdrop-blur-lg 
            bg-gradient-to-r from-orange-400/30 to-pink-500/30 
            hover:from-orange-400/50 hover:to-pink-500/50 
            transition duration-300 overflow-hidden"
          >
            Explore Map
          </button>
        </div>

        {/* Stats */}
        <div className="mt-10 flex justify-center gap-8 text-white-300 font-semibold">
          <div>
            <p className="text-2xl">25+</p>
            <p className="text-sm">Monasteries</p>
          </div>
          <div>
            <p className="text-2xl">1000+</p>
            <p className="text-sm">Years of History</p>
          </div>
          <div>
            <p className="text-2xl">50K+</p>
            <p className="text-sm">Visitors</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
