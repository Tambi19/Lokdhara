import React from 'react';
import { MapPin, Clock, Eye, Star } from 'lucide-react';

const MonasteryGrid: React.FC = () => {
  const monasteries = [
    {
      id: 1,
      name: "Rumtek Monastery",
      location: "Gangtok",
      founded: "1966",
      image: "https://www.karmapa.org/wp-content/uploads/Rumtek_Monastery_-_Inside_Close_View-1400px-cropped.jpg",
      description: "The largest monastery in Sikkim and seat of the Kagyu lineage",
      rating: 4.8,
      visitors: "12K+",
      hasVR: true
    },
    {
      id: 2,
      name: "Pemayangtse Monastery",
      location: "Pelling",
      founded: "1705",
      image: "https://res.cloudinary.com/kmadmin/image/upload/v1726815209/kiomoi/Pemayangtse_Monastery_5141.jpg",
      description: "One of the oldest monasteries in Sikkim with stunning architecture",
      rating: 4.7,
      visitors: "8K+",
      hasVR: true
    },
    {
      id: 3,
      name: "Enchey Monastery",
      location: "Gangtok",
      founded: "1909",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Enchey_Monastery_-_Gangtok_-_Sikkim_-_India.jpg/1024px-Enchey_Monastery_-_Gangtok_-_Sikkim_-_India.jpg",
      description: "Famous for its annual Chaam dance and spiritual significance",
      rating: 4.6,
      visitors: "6K+",
      hasVR: false
    },
    {
      id: 4,
      name: "Tashiding Monastery",
      location: "Tashiding",
      founded: "1717",
      image: "https://tripxl.com/blog/wp-content/uploads/2024/08/Tashiding-Monastery-OG-Photo.jpg",
      description: "Sacred site believed to wash away sins of devotees",
      rating: 4.9,
      visitors: "5K+",
      hasVR: true
    },
    {
      id: 5,
      name: "Ralang Monastery",
      location: "Ravangla",
      founded: "1768",
      image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0b/8f/64/9f/ralong-monastery-view.jpg?w=900&h=-1&s=1",
      description: "Known for its ancient murals and peaceful meditation halls",
      rating: 4.5,
      visitors: "4K+",
      hasVR: false
    },
    {
      id: 6,
      name: "Dubdi Monastery",
      location: "Yuksom",
      founded: "1701",
      image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2b/f3/0e/56/caption.jpg?w=1200&h=1200&s=1",
      description: "The oldest monastery in Sikkim with historical significance",
      rating: 4.4,
      visitors: "3K+",
      hasVR: true
    }
  ];

  return (
    <section id="explore" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Explore Sacred Monasteries
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Journey through centuries-old monasteries, each telling unique stories of 
            Buddhist culture and Sikkim's spiritual heritage
          </p>
          
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <button className="px-6 py-2 bg-red-800 text-white rounded-full hover:bg-red-900 transition-colors duration-200">
              All Monasteries
            </button>
            <button className="px-6 py-2 bg-gray-200 text-gray-700 rounded-full hover:bg-gray-300 transition-colors duration-200">
              VR Available
            </button>
            <button className="px-6 py-2 bg-gray-200 text-gray-700 rounded-full hover:bg-gray-300 transition-colors duration-200">
              Historical
            </button>
            <button className="px-6 py-2 bg-gray-200 text-gray-700 rounded-full hover:bg-gray-300 transition-colors duration-200">
              Active Monasteries
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {monasteries.map((monastery) => (
            <div key={monastery.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative">
                <img 
                  src={monastery.image} 
                  alt={monastery.name}
                  className="w-full h-48 object-cover"
                />
                {monastery.hasVR && (
                  <div className="absolute top-4 right-4 bg-red-800 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    VR Available
                  </div>
                )}
                <div className="absolute bottom-4 left-4 flex items-center space-x-2 bg-black/50 backdrop-blur-sm rounded-full px-3 py-1">
                  <Eye className="w-4 h-4 text-white" />
                  <span className="text-white text-sm">{monastery.visitors}</span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {monastery.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {monastery.description}
                </p>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-1 text-gray-600 text-sm">
                    <MapPin className="w-4 h-4" />
                    <span>{monastery.location}</span>
                  </div>
                  <div className="flex items-center space-x-1 text-gray-600 text-sm">
                    <Clock className="w-4 h-4" />
                    <span>Founded {monastery.founded}</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-medium text-gray-700">{monastery.rating}</span>
                  </div>
                  <button className="bg-red-800 text-white px-4 py-2 rounded-lg hover:bg-red-900 transition-colors duration-200 text-sm font-medium">
                    {monastery.hasVR ? 'Start VR Tour' : 'Learn More'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MonasteryGrid;