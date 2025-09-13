import React, { useState } from 'react';
import { Search, Filter, BookOpen, Image, Volume2, Download, HandPlatter as Translate } from 'lucide-react';

const ArchiveSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const archiveItems = [
    {
      id: 1,
      type: 'manuscript',
      title: "Kangyur - Buddha's Teachings",
      monastery: "Rumtek Monastery",
      date: "18th Century",
      language: "Tibetan",
      description: "Ancient Buddhist scriptures preserved in traditional Tibetan script",
      image: "https://www.elginhotels.com/wp-content/uploads/2020/03/rumtek-monastery-01.jpg.webp",
      hasAI: true
    },
    {
      id: 2,
      type: 'mural',
      title: "Wheel of Life Mural",
      monastery: "Pemayangtse Monastery",
      date: "1705 AD",
      language: "Visual",
      description: "Detailed depiction of Buddhist cosmology and rebirth cycle",
      image: "https://media1.thrillophilia.com/filestore/y7ytigsougrjgkhjobnfw12y3vdv_attre1.jpeg?w=400&dpr=2",
      hasAI: true
    },
    {
      id: 3,
      type: 'audio',
      title: "Morning Prayer Chants",
      monastery: "Enchey Monastery",
      date: "Contemporary",
      language: "Tibetan",
      description: "Traditional morning prayer recordings by resident monks",
      image: "https://d3gw4aml0lneeh.cloudfront.net/assets/locations/xDCL9DI0QElM.jpg",
      hasAI: false
    },
    {
      id: 4,
      type: 'manuscript',
      title: "Monastery Construction History",
      monastery: "Tashiding Monastery",
      date: "19th Century",
      language: "Nepali",
      description: "Historical records of monastery construction and renovation",
      image: "https://tripxl.com/blog/wp-content/uploads/2024/08/Tashiding-Monastery-OG-Photo.jpg",
      hasAI: true
    },
    {
      id: 5,
      type: 'oral',
      title: "Legend of Hidden Treasures",
      monastery: "Dubdi Monastery",
      date: "Oral Tradition",
      language: "Lepcha",
      description: "Ancient stories passed down through generations of monks",
      image: "https://upload.wikimedia.org/wikipedia/commons/0/08/Dubdi_Monastery_2.jpg",
      hasAI: true
    },
    {
      id: 6,
      type: 'mural',
      title: "Buddhist Deities Mandala",
      monastery: "Ralang Monastery",
      date: "17th Century",
      language: "Visual",
      description: "Intricate mandala featuring various Buddhist deities",
      image: "https://cdn.tripuntold.com/media/photos/location/2018/11/30/90830ab2-8705-4335-ba56-1f3aa8d5a53c.jpg",
      hasAI: false
    }
  ];

  const categories = [
    { id: 'all', label: 'All Items', icon: <BookOpen className="w-4 h-4" /> },
    { id: 'manuscript', label: 'Manuscripts', icon: <BookOpen className="w-4 h-4" /> },
    { id: 'mural', label: 'Murals', icon: <Image className="w-4 h-4" /> },
    { id: 'audio', label: 'Audio', icon: <Volume2 className="w-4 h-4" /> },
    { id: 'oral', label: 'Oral Histories', icon: <Volume2 className="w-4 h-4" /> }
  ];

  const filteredItems = archiveItems.filter(item => 
    (activeCategory === 'all' || item.type === activeCategory) &&
    (searchQuery === '' || 
     item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
     item.monastery.toLowerCase().includes(searchQuery.toLowerCase()) ||
     item.description.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'manuscript': return <BookOpen className="w-5 h-5" />;
      case 'mural': return <Image className="w-5 h-5" />;
      case 'audio': return <Volume2 className="w-5 h-5" />;
      case 'oral': return <Volume2 className="w-5 h-5" />;
      default: return <BookOpen className="w-5 h-5" />;
    }
  };

  return (
    <section id="archive" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Digital Heritage Archive
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore centuries of preserved manuscripts, murals, and oral histories with 
            AI-powered search and translation capabilities
          </p>
        </div>

        {/* Search and Filter Controls */}
        <div className="bg-gray-50 rounded-xl p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Search Bar */}
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search archives with AI-powered semantic search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors duration-200 ${
                    activeCategory === category.id
                      ? 'bg-red-800 text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {category.icon}
                  <span>{category.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Archive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div key={item.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-2">
                  {getTypeIcon(item.type)}
                  <span className="text-white text-sm capitalize">{item.type}</span>
                </div>
                {item.hasAI && (
                  <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    AI Enhanced
                  </div>
                )}
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {item.title}
                </h3>
                <div className="text-sm text-gray-600 mb-3">
                  <p>{item.monastery} • {item.date}</p>
                  <p>Language: {item.language}</p>
                </div>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {item.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex space-x-2">
                    {item.hasAI && (
                      <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-200" title="AI Translation">
                        <Translate className="w-4 h-4" />
                      </button>
                    )}
                    <button className="p-2 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors duration-200" title="Download">
                      <Download className="w-4 h-4" />
                    </button>
                  </div>
                  <button className="bg-red-800 text-white px-4 py-2 rounded-lg hover:bg-red-900 transition-colors duration-200 text-sm font-medium">
                    Explore
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-16">
            <div className="text-gray-400 mb-4">
              <Search className="w-16 h-16 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-gray-600 mb-2">No items found</h3>
            <p className="text-gray-500">Try adjusting your search terms or filters</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ArchiveSection;