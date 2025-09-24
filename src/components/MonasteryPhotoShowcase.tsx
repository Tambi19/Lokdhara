import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Camera, Maximize2, Heart, Share2 } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const MonasteryPhotoShowcase: React.FC = () => {
  const showcaseRef = useRef<HTMLDivElement>(null);
  const photoGridRef = useRef<HTMLDivElement>(null);
  const featuredPhotoRef = useRef<HTMLDivElement>(null);

  const monasteryPhotos = [
    {
      id: 1,
      src: "https://www.karmapa.org/wp-content/uploads/Rumtek_Monastery_-_Inside_Close_View-1400px-cropped.jpg",
      title: "Rumtek Monastery Golden Hour",
      monastery: "Rumtek Monastery",
      photographer: "Heritage Team",
      likes: 234,
      featured: true
    },
    {
      id: 2,
      src: "https://res.cloudinary.com/kmadmin/image/upload/v1726815209/kiomoi/Pemayangtse_Monastery_5141.jpg",
      title: "Ancient Prayer Wheels",
      monastery: "Pemayangtse Monastery",
      photographer: "Cultural Archive",
      likes: 189
    },
    {
      id: 3,
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Enchey_Monastery_-_Gangtok_-_Sikkim_-_India.jpg/1024px-Enchey_Monastery_-_Gangtok_-_Sikkim_-_India.jpg",
      title: "Morning Meditation Hall",
      monastery: "Enchey Monastery",
      photographer: "Spiritual Journey",
      likes: 156
    },
    {
      id: 4,
      src: "https://tripxl.com/blog/wp-content/uploads/2024/08/Tashiding-Monastery-OG-Photo.jpg",

      title: "Sacred Mountain View",
      monastery: "Tashiding Monastery",
      photographer: "Mountain Heritage",
      likes: 298
    },
    {
      id: 5,
      src: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0b/8f/64/9f/ralong-monastery-view.jpg?w=900&h=-1&s=1",
      title: "Traditional Architecture",
      monastery: "Ralang Monastery",
      photographer: "Architecture Focus",
      likes: 167
    },
    {
      id: 6,
      src: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2b/f3/0e/56/caption.jpg?w=1200&h=1200&s=1",
      title: "Peaceful Courtyard",
      monastery: "Dubdi Monastery",
      photographer: "Serenity Captured",
      likes: 203
    },
    {
      id: 7,
      src: "https://www.karmapa.org/wp-content/uploads/Rumtek_Monastery_-_Inside_Close_View-1400px-cropped.jpg",
      title: "Rumtek Monastery Golden Hour",
      monastery: "Rumtek Monastery",
      photographer: "Heritage Team",
      likes: 234,
      featured: true
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate photo grid on scroll
      gsap.fromTo(photoGridRef.current?.children || [], 
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
      gsap.fromTo(featuredPhotoRef.current,
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
    <section ref={showcaseRef} className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 bg-clip-text text-transparent">
            Sacred Moments Captured
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience the breathtaking beauty and spiritual essence of Sikkim's monasteries 
            through our curated photography collection
          </p>
        </div>

        {/* Featured Photo */}
        <div ref={featuredPhotoRef} className="mb-16">
          <div className="relative max-w-4xl mx-auto group cursor-pointer">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img 
                src={monasteryPhotos[0].src}
                alt={monasteryPhotos[0].title}
                className="w-full h-96 md:h-[500px] object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              
              {/* Photo Info Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-2">{monasteryPhotos[0].title}</h3>
                    <p className="text-gray-300 mb-1">{monasteryPhotos[0].monastery}</p>
                    <p className="text-sm text-gray-400">by {monasteryPhotos[0].photographer}</p>
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
        <div ref={photoGridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {monasteryPhotos.slice(1).map((photo, index) => (
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
                    <p className="text-sm text-gray-300 mb-2">{photo.monastery}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-400">by {photo.photographer}</span>
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

export default MonasteryPhotoShowcase;