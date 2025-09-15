import React from "react";
import {
  Smartphone,
  Globe,
  Archive,
  Calendar,
  ShoppingBag,
  Users,
  Headphones,
  Download,
} from "lucide-react";

const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: <Smartphone className="w-10 h-10" />,
      title: "360° VR Tours",
      description:
        "Experience monasteries in stunning detail with immersive virtual reality tours",
      bg: "bg-gradient-to-br from-blue-500 to-indigo-500 text-white",
    },
    {
      icon: <Globe className="w-10 h-10" />,
      title: "Interactive Map",
      description:
        "Navigate through Sikkim's monasteries with our smart location-based explorer",
      bg: "bg-gradient-to-br from-green-400 to-emerald-600 text-white",
    },
    {
      icon: <Archive className="w-10 h-10" />,
      title: "Digital Archive",
      description:
        "Access ancient manuscripts, murals, and oral histories with AI-powered search",
      bg: "bg-gradient-to-br from-purple-500 to-pink-500 text-white",
    },
    {
      icon: <Calendar className="w-10 h-10" />,
      title: "Cultural Calendar",
      description:
        "Discover and book participation in traditional festivals and ceremonies",
      bg: "bg-gradient-to-br from-red-500 to-orange-500 text-white",
    },
    {
      icon: <ShoppingBag className="w-10 h-10" />,
      title: "Local Marketplace",
      description:
        "Shop authentic handicrafts and souvenirs from monastery communities",
      bg: "bg-gradient-to-br from-yellow-400 to-amber-500 text-gray-900",
    },
    {
      icon: <Users className="w-10 h-10" />,
      title: "Guide Booking",
      description:
        "Connect with expert local guides for personalized monastery experiences",
      bg: "bg-gradient-to-br from-indigo-500 to-cyan-500 text-white",
    },
    {
      icon: <Headphones className="w-10 h-10" />,
      title: "Audio Guides",
      description:
        "Listen to location-based stories and historical narratives as you explore",
      bg: "bg-gradient-to-br from-pink-500 to-rose-500 text-white",
    },
    {
      icon: <Download className="w-10 h-10" />,
      title: "Offline Access",
      description:
        "Download content for exploration even in remote monastery locations",
      bg: "bg-gradient-to-br from-teal-500 to-cyan-500 text-white",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-6">
            Immersive Cultural Experience
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover the rich heritage of Sikkim's monasteries through
            cutting-edge technology and authentic cultural preservation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`${feature.bg} rounded-2xl p-8 shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-500`}
            >
              <div className="flex items-center justify-center mb-6">
                <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center shadow-md">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-center">
                {feature.title}
              </h3>
              <p className="text-sm opacity-90 text-center leading-relaxed">
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
