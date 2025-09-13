import React, { useState } from 'react';
import { MapPin, Navigation, Filter, Search } from 'lucide-react';

const InteractiveMap: React.FC = () => {
  const [selectedMonastery, setSelectedMonastery] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  const monasteryMarkers = [
    { id: 1, name: "Rumtek Monastery", lat: 27.3389, lng: 88.5277, region: "East Sikkim" },
    { id: 2, name: "Pemayangtse Monastery", lat: 27.3248, lng: 88.2080, region: "West Sikkim" },
    { id: 3, name: "Enchey Monastery", lat: 27.3389, lng: 88.6138, region: "East Sikkim" },
    { id: 4, name: "Tashiding Monastery", lat: 27.3394, lng: 88.2709, region: "West Sikkim" },
    { id: 5, name: "Ralang Monastery", lat: 27.2929, lng: 88.5325, region: "South Sikkim" },
    { id: 6, name: "Dubdi Monastery", lat: 27.3703, lng: 88.2108, region: "West Sikkim" }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Interactive Monastery Map
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Navigate through Sikkim's sacred landscape and discover monasteries based on your location and interests
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          {/* Map Controls */}
          <div className="p-6 border-b bg-gray-50">
            <div className="flex flex-col md:flex-row gap-4 items-center">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search monasteries..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>
              <div className="flex gap-2">
                <button className="flex items-center space-x-2 px-4 py-2 bg-red-800 text-white rounded-lg hover:bg-red-900 transition-colors duration-200">
                  <Navigation className="w-4 h-4" />
                  <span>My Location</span>
                </button>
                <button className="flex items-center space-x-2 px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors duration-200">
                  <Filter className="w-4 h-4" />
                  <span>Filters</span>
                </button>
              </div>
            </div>
          </div>

          <div className="flex">
            {/* Map Area */}
            <div className="flex-1 relative">
              <div className="h-96 bg-gradient-to-br from-green-200 to-blue-300 relative overflow-hidden">
                {/* Simplified Map Background */}
                <div className="absolute inset-0 bg-green-300 opacity-30">
                  <div className="absolute top-1/4 left-1/3 w-32 h-20 bg-green-600 rounded-full opacity-40"></div>
                  <div className="absolute bottom-1/3 right-1/4 w-24 h-16 bg-green-700 rounded-full opacity-40"></div>
                  <div className="absolute top-1/2 left-1/2 w-20 h-12 bg-green-500 rounded-full opacity-40"></div>
                </div>

                {/* Monastery Markers */}
                {monasteryMarkers.map((marker) => (
                  <div
                    key={marker.id}
                    className={`absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all duration-300 ${
                      selectedMonastery === marker.id ? 'scale-125 z-10' : 'hover:scale-110'
                    }`}
                    style={{
                      left: `${30 + (marker.id * 15)}%`,
                      top: `${20 + (marker.id * 12)}%`
                    }}
                    onClick={() => setSelectedMonastery(marker.id)}
                  >
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center shadow-lg ${
                      selectedMonastery === marker.id 
                        ? 'bg-red-800 text-white' 
                        : 'bg-white text-red-800 hover:bg-red-50'
                    }`}>
                      <MapPin className="w-5 h-5" />
                    </div>
                    {selectedMonastery === marker.id && (
                      <div className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 bg-white rounded-lg shadow-lg p-3 min-w-48">
                        <h4 className="font-semibold text-gray-800 text-sm">{marker.name}</h4>
                        <p className="text-gray-600 text-xs">{marker.region}</p>
                        <button className="mt-2 text-xs bg-red-800 text-white px-3 py-1 rounded">
                          Visit
                        </button>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="w-80 bg-gray-50 p-6 overflow-y-auto max-h-96">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Nearby Monasteries</h3>
              <div className="space-y-4">
                {monasteryMarkers.map((monastery) => (
                  <div
                    key={monastery.id}
                    className={`p-4 rounded-lg cursor-pointer transition-all duration-200 ${
                      selectedMonastery === monastery.id
                        ? 'bg-red-800 text-white'
                        : 'bg-white hover:bg-red-50'
                    }`}
                    onClick={() => setSelectedMonastery(monastery.id)}
                  >
                    <div className="flex items-center space-x-3">
                      <MapPin className="w-5 h-5 flex-shrink-0" />
                      <div>
                        <h4 className="font-medium">{monastery.name}</h4>
                        <p className={`text-sm ${selectedMonastery === monastery.id ? 'text-red-100' : 'text-gray-500'}`}>
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