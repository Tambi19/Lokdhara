import React from 'react';
import { Smartphone, Globe, Archive, Calendar, ShoppingBag, Users, Headphones, Download } from 'lucide-react';

const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "360° VR Tours",
      description: "Experience monasteries in stunning detail with immersive virtual reality tours",
      color: "bg-blue-500"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Interactive Map",
      description: "Navigate through Sikkim's monasteries with our smart location-based explorer",
      color: "bg-green-500"
    },
    {
      icon: <Archive className="w-8 h-8" />,
      title: "Digital Archive",
      description: "Access ancient manuscripts, murals, and oral histories with AI-powered search",
      color: "bg-purple-500"
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Cultural Calendar",
      description: "Discover and book participation in traditional festivals and ceremonies",
      color: "bg-red-500"
    },
    {
      icon: <ShoppingBag className="w-8 h-8" />,
      title: "Local Marketplace",
      description: "Shop authentic handicrafts and souvenirs from monastery communities",
      color: "bg-yellow-500"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Guide Booking",
      description: "Connect with expert local guides for personalized monastery experiences",
      color: "bg-indigo-500"
    },
    {
      icon: <Headphones className="w-8 h-8" />,
      title: "Audio Guides",
      description: "Listen to location-based stories and historical narratives as you explore",
      color: "bg-pink-500"
    },
    {
      icon: <Download className="w-8 h-8" />,
      title: "Offline Access",
      description: "Download content for exploration even in remote monastery locations",
      color: "bg-teal-500"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Immersive Cultural Experience
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the rich heritage of Sikkim's monasteries through cutting-edge technology 
            and authentic cultural preservation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className={`${feature.color} w-16 h-16 rounded-full flex items-center justify-center text-white mb-4 mx-auto`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3 text-center">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-center leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;