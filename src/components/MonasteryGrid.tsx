import React, { useState } from "react";
import { MapPin, Clock, Eye, Star, Navigation } from "lucide-react";

const HeritageGrid: React.FC = () => {
  const [selectedSite, setSelectedSite] = useState<any>(null);


  const heritageSites = [
    {
      id: 1,
      name: "Taj Mahal",
      location: "Agra, Uttar Pradesh",
      founded: "1632",
      image:
        "https://static.wixstatic.com/media/055605_65e20a7fcbc54e2e8720adfc2544c35e~mv2.jpg/v1/fill/w_1800,h_1082,al_c,q_85/taj_new_contant_edited.jpg",
      description:
        "A symbol of eternal love, the Taj Mahal is a UNESCO World Heritage Site and one of the New Seven Wonders of the World.",
      rating: 4.9,
      visitors: "70K+",
      isArAvailable: true,
      arGlb: "/model/ar/taj.glb",
      arUsdz: "/model/ar/taj.usdz",
      mapsUrl: "https://www.google.com/maps/dir/?api=1&destination=Taj+Mahal+Agra",
    },
    {
      id: 2,
      name: "Qutub Minar",
      location: "Delhi",
      founded: "1199",
      image: "https://blog.dookinternational.com/wp-content/uploads/2017/06/a3.jpeg",
      description: "The tallest brick minaret in the world, built during the Delhi Sultanate.",
      rating: 4.8,
      visitors: "55K+",
      isArAvailable: true,
      arGlb: "/model/ar/qutub.glb",
      arUsdz: "/model/ar/qutub.usdz",
      mapsUrl: "https://www.google.com/maps/dir/?api=1&destination=Qutub+Minar+Delhi",
    },
    {
      id: 3,
      name: "Konark Sun Temple",
      location: "Odisha",
      founded: "13th Century",
      image: "https://s7ap1.scene7.com/is/image/incredibleindia/konark-temple-puri-odisha-2-attr-hero?qlt=82&ts=1726674676369",
      description: "Famous for its stone chariot with intricately carved wheels, walls, and pillars.",
      rating: 4.7,
      visitors: "30K+",
      isArAvailable: true,
      arGlb: "/model/ar/konark.glb",
      arUsdz: "/model/ar/konark.usdz",
      mapsUrl: "https://www.google.com/maps/dir/?api=1&destination=Konark+Sun+Temple+Odisha",
    },
    { id: 4, name: "Hampi", location: "Karnataka", founded: "14th Century", image: "https://blogs.pathbeat.in/wp-content/uploads/2024/09/Hampi_karnataka.jpg", description: "The ruins of Vijayanagara, once one of the richest cities in the world.", rating: 4.8, visitors: "40K+", isArAvailable: true, arGlb: "/model/ar/hampi.glb", arUsdz: "/model/ar/hampi.usdz",      mapsUrl: "https://www.google.com/maps/dir/?api=1&destination=Konark+Sun+Temple+Odisha",
 }, { id: 5, name: "Humayun Tomb", location: "Delhi", founded: "14th Century", image: "https://pohcdn.com/sites/default/files/styles/paragraph__hero_banner__hb_image__1880bp/public/hero_banner/humayun%27s-tomb_optimized.jpg", description: "The ruins of Vijayanagara, once one of the richest cities in the world.", rating: 4.8, visitors: "40K+", isArAvailable: true, arGlb: "/model/ar/humayun.glb", arUsdz: "/model/ar/humayun.usdz",      mapsUrl: "https://www.google.com/maps/dir/?api=1&destination=Konark+Sun+Temple+Odisha",
 }, {
  id: 4,
  name: "Jagannath Puri Temple",
  location: "Puri, Odisha",
  founded: "12th Century",
  image: "https://www.tripsavvy.com/thmb/CqvMyrnnVy5fNLFYTr5zW13s-XE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/_DSC0713_Snapseed_Darkroom-819d0b229974460e8141622c4494e2ed.jpg",
  description:
    "One of the Char Dham pilgrimage sites, the Jagannath Temple is dedicated to Lord Jagannath and is renowned for the annual Rath Yatra festival.",
  rating: 4.9,
  visitors: "80K+",
  isArAvailable: true,
  arGlb: "/model/ar/jagannath.glb", 
  arUsdz: "/model/ar/jagannath.usdz",
  mapsUrl: "https://www.google.com/maps/dir/?api=1&destination=Jagannath+Temple+Puri+Odisha",
},

    // add mapsUrl for other sites similarly...
  ];

   return (
    <section id="explore" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Explore India's Heritage
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Journey through timeless monuments and temples, each narrating the story of India's glorious past.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {heritageSites.map((site) => (
            <div
              key={site.id}
              className="relative bg-white border border-gray-200/80 rounded-2xl shadow-md overflow-hidden 
             hover:shadow-2xl hover:border-yellow-400/60 transition-all duration-500 transform hover:-translate-y-2"
            >
              <div className="relative">
                <img
                  src={site.image}
                  alt={site.name}
                  className="w-full h-52 object-cover rounded-t-2xl"
                />

                <div className="absolute bottom-4 left-4 flex items-center space-x-2 bg-black/50 backdrop-blur-md rounded-full px-3 py-1 shadow">
                  <Eye className="w-4 h-4 text-white" />
                  <span className="text-white text-xs font-medium">{site.visitors}</span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-1">{site.name}</h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{site.description}</p>

                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-1 text-gray-500 text-xs font-medium">
                    <MapPin className="w-4 h-4" />
                    <span>{site.location}</span>
                  </div>
                  <div className="flex items-center space-x-1 text-gray-500 text-xs font-medium">
                    <Clock className="w-4 h-4" />
                    <span>Founded {site.founded}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-semibold text-gray-700">{site.rating}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    {site.isArAvailable ? (
                      <button
                        onClick={() => setSelectedSite(site)}
                        className="bg-gradient-to-r from-green-600 to-green-800 text-white px-3 py-2 rounded-lg 
                         hover:from-green-700 hover:to-green-900 transition-all duration-300 text-sm font-semibold shadow-md"
                      >
                        View AR
                      </button>
                    ) : (
                      <button className="bg-gradient-to-r from-blue-700 to-blue-900 text-white px-3 py-2 rounded-lg 
                         hover:from-blue-800 hover:to-blue-950 transition-all duration-300 text-sm font-semibold shadow-md">
                        Learn More
                      </button>
                    )}

                    <button
                      onClick={() => window.open(site.mapsUrl, "_blank")}
                      className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition-all"
                      title="Get Directions"
                    >
                      <Navigation className="w-5 h-5 text-blue-600" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ✅ Fixed AR Modal */}
      {selectedSite && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/90 z-50">
          <button
            onClick={() => setSelectedSite(null)}
            className="absolute top-4 right-4 bg-red-600 text-white rounded-full w-10 h-10 flex items-center justify-center text-xl font-bold shadow-lg z-50"
          >
            ✕
          </button>

          <model-viewer
            src={selectedSite.arGlb}
            ios-src={selectedSite.arUsdz}
            alt={selectedSite.name}
            ar
            auto-rotate
            camera-controls
            interaction-prompt="auto"
            shadow-intensity="1"
            exposure="1"
            style={{ width: "90%", height: "90%" }}
          ></model-viewer>

          {/* 🎧 Only this audio now */}
          <audio
            src={`/audio/${selectedSite.id}.mp3`}
            autoPlay
            controls
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-80"
          />
        </div>
      )}
    </section>
  );
};

export default HeritageGrid;
