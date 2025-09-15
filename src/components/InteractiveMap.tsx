import React, { useState } from "react";
import { MapPin, Navigation, Filter, Search } from "lucide-react";
import mapImg from "../assets/map.png"; // ✅ Import your map image

const InteractiveMap: React.FC = () => {
  const [selectedMonastery, setSelectedMonastery] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  const monasteryMarkers = [
    { id: 1, name: "Rumtek Monastery", lat: 27.3389, lng: 88.5277, region: "East Sikkim" },
    { id: 2, name: "Pemayangtse Monastery", lat: 27.3248, lng: 88.208, region: "West Sikkim" },
    { id: 3, name: "Enchey Monastery", lat: 27.3389, lng: 88.6138, region: "East Sikkim" },
    { id: 4, name: "Tashiding Monastery", lat: 27.3394, lng: 88.2709, region: "West Sikkim" },
    { id: 5, name: "Ralang Monastery", lat: 27.2929, lng: 88.5325, region: "South Sikkim" },
    { id: 6, name: "Dubdi Monastery", lat: 27.3703, lng: 88.2108, region: "West Sikkim" },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-sky-50 via-indigo-50 to-purple-100">
      <div className="container mx-auto px-4">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4 drop-shadow-sm">
            Interactive Monastery Map
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore Sikkim’s monasteries on an immersive, tourist-friendly map — tap a marker to
            learn more!
          </p>
        </div>

        {/* Map Section */}
        <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-2xl overflow-hidden">
          {/* Controls */}
          <div className="p-6 border-b bg-gradient-to-r from-indigo-50 to-sky-100">
            <div className="flex flex-col md:flex-row gap-4 items-center">
              {/* Search */}
              <div className="relative flex-1 w-full md:max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search monasteries..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg 
                             focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>

              {/* Buttons */}
              <div className="flex gap-2">
                <button className="flex items-center space-x-2 px-4 py-2 bg-red-700 text-white rounded-lg hover:bg-red-800 transition">
                  <Navigation className="w-4 h-4" />
                  <span>My Location</span>
                </button>
                <button className="flex items-center space-x-2 px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition">
                  <Filter className="w-4 h-4" />
                  <span>Filters</span>
                </button>
              </div>
            </div>
          </div>

          {/* Map + Sidebar */}
          <div className="flex flex-col lg:flex-row">
            {/* Map Area */}
            <div className="flex-1 relative">
              <div
                className="h-96 lg:h-[32rem] relative overflow-hidden bg-cover bg-center"
                style={{ backgroundImage: `url(${mapImg})` }}
              >
                {/* Overlay for readability */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-white/10" />

                {/* Monastery Markers */}
                {monasteryMarkers.map((marker) => (
                  <div
                    key={marker.id}
                    className={`absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all duration-300 ${
                      selectedMonastery === marker.id ? "scale-125 z-20" : "hover:scale-110"
                    }`}
                    style={{
                      left: `${25 + marker.id * 12}%`,
                      top: `${20 + marker.id * 10}%`,
                    }}
                    onClick={() => setSelectedMonastery(marker.id)}
                  >
                    {/* Pin with Pulse */}
                    <div
                      className={`relative w-9 h-9 rounded-full flex items-center justify-center shadow-md ${
                        selectedMonastery === marker.id
                          ? "bg-red-700 text-white animate-pulse"
                          : "bg-white text-red-700 hover:bg-red-50"
                      }`}
                    >
                      <MapPin className="w-5 h-5" />
                    </div>

                    {/* Popup */}
                    {selectedMonastery === marker.id && (
                      <div className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 bg-white rounded-xl shadow-xl p-4 min-w-[180px] border border-gray-200">
                        <h4 className="font-semibold text-gray-800 text-sm">
                          {marker.name}
                        </h4>
                        <p className="text-gray-600 text-xs mb-2">{marker.region}</p>
                        <button className="w-full text-xs bg-red-700 text-white px-3 py-1.5 rounded-lg hover:bg-red-800 transition">
                          Visit
                        </button>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:w-80 bg-gray-50 p-6 overflow-y-auto max-h-96 lg:max-h-[32rem] border-t lg:border-t-0 lg:border-l">
              <h3 className="text-lg font-bold text-gray-800 mb-4">Nearby Monasteries</h3>
              <div className="space-y-4">
                {monasteryMarkers.map((monastery) => (
                  <div
                    key={monastery.id}
                    className={`p-4 rounded-lg cursor-pointer transition ${
                      selectedMonastery === monastery.id
                        ? "bg-red-700 text-white shadow-md"
                        : "bg-white hover:bg-red-50"
                    }`}
                    onClick={() => setSelectedMonastery(monastery.id)}
                  >
                    <div className="flex items-center space-x-3">
                      <MapPin className="w-5 h-5 flex-shrink-0" />
                      <div>
                        <h4 className="font-medium">{monastery.name}</h4>
                        <p
                          className={`text-sm ${
                            selectedMonastery === monastery.id
                              ? "text-red-100"
                              : "text-gray-500"
                          }`}
                        >
                          {monastery.region}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveMap;
