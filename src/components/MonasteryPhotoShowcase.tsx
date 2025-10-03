import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Camera, Maximize2, Heart, Share2 } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const HeritagePhotoShowcase: React.FC = () => {
  const showcaseRef = useRef<HTMLDivElement>(null);
  const photoGridRef = useRef<HTMLDivElement>(null);
  const featuredPhotoRef = useRef<HTMLDivElement>(null);

  const heritagePhotos = [
    {
      id: 1,
      src: "https://static.wixstatic.com/media/055605_65e20a7fcbc54e2e8720adfc2544c35e~mv2.jpg/v1/fill/w_1800,h_1082,al_c,q_85/taj_new_contant_edited.jpg",
      title: "Taj Mahal at Twilight",
      site: "Taj Mahal, Agra",
      photographer: "Heritage Archive",
      likes: 520,
      featured: true
    },
    {
      id: 2,
      src: "https://blog.dookinternational.com/wp-content/uploads/2017/06/a3.jpeg",
      title: "Qutub Minar Rise",
      site: "Qutub Minar, Delhi",
      photographer: "Monument Lens",
      likes: 310
    },
    {
      id: 3,
      src: "https://s7ap1.scene7.com/is/image/incredibleindia/konark-temple-puri-odisha-2-attr-hero?qlt=82&ts=1726674676369",
      title: "Konark Sun Temple",
      site: "Konark Sun Temple, Odisha",
      photographer: "Ancient Stones",
      likes: 405
    },
    {
      id: 4,
      src: "https://www.andbeyond.com/wp-content/uploads/sites/5/khajuraho-india-temple-complex.jpg",
      title: "Khajuraho Carvings",
      site: "Khajuraho Group of Monuments, MP",
      photographer: "Sculpture Eye",
      likes: 278
    },
    {
      id: 5,
      src: "https://blogs.pathbeat.in/wp-content/uploads/2024/09/Hampi_karnataka.jpg",
      title: "Vijaya Vittala Temple, Hampi",
      site: "Hampi, Karnataka",
      photographer: "Ruins Travel",
      likes: 343
    },
    {
      id: 6,
      src: "https://shiningsikh.com/wp-content/uploads/2024/12/IMG_2687-e1734423773701.jpg",
      title: "Golden Temple Reflection",
      site: "Harmandir Sahib, Amritsar",
      photographer: "Spiritual Frame",
      likes: 462
    },
    {
      id: 7,
      src: "https://cdn.kastatic.org/ka-perseus-images/a8a19d777ab5fee4a3666927202d88dcba7bd42c.jpg",
      title: "Meenakshi Temple Glow",
      site: "Meenakshi Temple, Madurai",
      photographer: "Temple Glow",
      likes: 299
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate photo grid on scroll
      gsap.fromTo(
        photoGridRef.current?.children || [],
        {
          y: 100,
          opacity: 0,
          scale: 0.8
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1.2,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: photoGridRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Featured photo animation
      gsap.fromTo(
        featuredPhotoRef.current,
        {
          scale: 0.5,
          opacity: 0,
          rotationY: 45
        },
        {
          scale: 1,
          opacity: 1,
          rotationY: 0,
          duration: 2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: featuredPhotoRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }, showcaseRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={showcaseRef}
      className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 bg-clip-text text-transparent">
            Heritage in Focus
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore the timeless beauty and cultural legacy of India's iconic heritage
            through our curated visual journey.
          </p>
        </div>

        {/* Featured Photo */}
        <div ref={featuredPhotoRef} className="mb-16">
          <div className="relative max-w-4xl mx-auto group cursor-pointer">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src={heritagePhotos[0].src}
                alt={heritagePhotos[0].title}
                className="w-full h-96 md:h-[500px] object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

              {/* Photo Info Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-2">
                      {heritagePhotos[0].title}
                    </h3>
                    <p className="text-gray-300 mb-1">
                      {heritagePhotos[0].site}
                    </p>
                    <p className="text-sm text-gray-400">
                      by {heritagePhotos[0].photographer}
                    </p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <button className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors duration-200">
                      <Heart className="w-6 h-6" />
                    </button>
                    <button className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors duration-200">
                      <Share2 className="w-6 h-6" />
                    </button>
                    <button className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors duration-200">
                      <Maximize2 className="w-6 h-6" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Featured Badge */}
              <div className="absolute top-6 left-6 bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-2 rounded-full font-semibold text-sm">
                <Camera className="w-4 h-4 inline mr-2" />
                Featured
              </div>
            </div>
          </div>
        </div>

        {/* Photo Grid */}
        <div
          ref={photoGridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {heritagePhotos.slice(1).map((photo) => (
            <div key={photo.id} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-xl shadow-lg">
                <img
                  src={photo.src}
                  alt={photo.title}
                  className="w-full h-64 object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Hover Overlay */}
                <div className="absolute inset-0 flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-full">
                    <h4 className="text-lg font-semibold mb-1">{photo.title}</h4>
                    <p className="text-sm text-gray-300 mb-2">{photo.site}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-400">
                        by {photo.photographer}
                      </span>
                      <div className="flex items-center space-x-2">
                        <Heart className="w-4 h-4 text-red-400" />
                        <span className="text-sm">{photo.likes}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Corner Gradient */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-yellow-400/30 to-transparent rounded-bl-full" />
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <button className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            View Full Gallery
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeritagePhotoShowcase;
