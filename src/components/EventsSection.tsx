import React, { useState } from 'react';
import { Calendar, MapPin, Users, Clock, Star, Filter } from 'lucide-react';

const EventsSection: React.FC = () => {
  const [selectedMonth, setSelectedMonth] = useState('all');
  const [selectedType, setSelectedType] = useState('all');

  const events = [
    {
      id: 1,
      title: "Losar Festival",
      monastery: "Rumtek Monastery",
      date: "February 15-17, 2025",
      time: "6:00 AM - 8:00 PM",
      type: "festival",
      participants: 500,
      price: "Free",
      image: "https://www.tusktravel.com/blog/wp-content/uploads/2021/02/Losar-Festival-Ladakh.jpg",
      description: "Celebrate the Tibetan New Year with traditional dances, prayers, and community feasts",
      featured: true,
      availableSpots: 50
    },
    {
      id: 2,
      title: "Butter Lamp Festival",
      monastery: "Pemayangtse Monastery",
      date: "March 8, 2025",
      time: "7:00 PM - 10:00 PM",
      type: "ceremony",
      participants: 200,
      price: "₹100",
      image: "https://www.ecns.cn/hd/2021/11/30/200x133_48c4a5c8d3e74051a6a5ce178acaf979.jpg",
      description: "Light thousands of butter lamps in a mesmerizing evening ceremony",
      featured: false,
      availableSpots: 25
    },
    {
      id: 3,
      title: "Sacred Chaam Dance",
      monastery: "Enchey Monastery",
      date: "January 25, 2025",
      time: "2:00 PM - 6:00 PM",
      type: "performance",
      participants: 150,
      price: "₹200",
      image: "https://wondersoftibet.com/wp-content/uploads/2020/07/Tibetan-Cham-Dance-1024x683.jpg",
      description: "Witness the ancient masked dance performed by monks in colorful costumes",
      featured: true,
      availableSpots: 30
    },
    {
      id: 4,
      title: "Meditation Retreat",
      monastery: "Tashiding Monastery",
      date: "April 5-7, 2025",
      time: "9:00 AM - 5:00 PM",
      type: "workshop",
      participants: 40,
      price: "₹1,500",
      image: "https://images.squarespace-cdn.com/content/v1/56c13cc00442627a08632989/1520175522189-5J8XWZ11LYDU98SGOMEL/chomthongmeditation2.jpg?format=2500w",
      description: "3-day intensive meditation retreat with senior monks",
      featured: false,
      availableSpots: 15
    },
    {
      id: 5,
      title: "Traditional Cooking Class",
      monastery: "Ralang Monastery",
      date: "March 20, 2025",
      time: "11:00 AM - 3:00 PM",
      type: "workshop",
      participants: 25,
      price: "₹800",
      image: "https://images.unsplash.com/photo-1686766149379-f986ce272232?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGNvb2tpbmclMjBjbGFzc3xlbnwwfHwwfHx8MA%3D%3D",
      description: "Learn to prepare traditional monastery cuisine with the community",
      featured: false,
      availableSpots: 8
    },
    {
      id: 6,
      title: "Full Moon Prayer Ceremony",
      monastery: "Dubdi Monastery",
      date: "February 28, 2025",
      time: "6:00 PM - 9:00 PM",
      type: "ceremony",
      participants: 80,
      price: "Free",
      image: "https://cdn.shopify.com/s/files/1/0981/7996/files/WhatsApp-Image-2023-06-01-at-16.56.51-_1__web.jpg?v=1685632395",
      description: "Join monks for special full moon prayers and chanting",
      featured: false,
      availableSpots: 20
    }
  ];

  const eventTypes = [
    { id: 'all', label: 'All Events' },
    { id: 'festival', label: 'Festivals' },
    { id: 'ceremony', label: 'Ceremonies' },
    { id: 'performance', label: 'Performances' },
    { id: 'workshop', label: 'Workshops' }
  ];

  const months = [
    { id: 'all', label: 'All Months' },
    { id: 'january', label: 'January' },
    { id: 'february', label: 'February' },
    { id: 'march', label: 'March' },
    { id: 'april', label: 'April' }
  ];

  const filteredEvents = events.filter(event => {
    const typeMatch = selectedType === 'all' || event.type === selectedType;
    const monthMatch = selectedMonth === 'all' || 
      event.date.toLowerCase().includes(selectedMonth);
    return typeMatch && monthMatch;
  });

  const getEventTypeColor = (type: string) => {
    switch (type) {
      case 'festival': return 'bg-red-100 text-red-800';
      case 'ceremony': return 'bg-blue-100 text-blue-800';
      case 'performance': return 'bg-purple-100 text-purple-800';
      case 'workshop': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <section id="events" className="py-20 bg-gradient-to-br from-red-50 to-orange-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Cultural Events & Festivals
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Immerse yourself in authentic cultural experiences and participate in 
            sacred ceremonies alongside monastic communities
          </p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-xl p-6 mb-8 shadow-lg">
          <div className="flex flex-col lg:flex-row gap-6 items-center">
            <div className="flex items-center space-x-2">
              <Filter className="w-5 h-5 text-gray-600" />
              <span className="font-medium text-gray-800">Filter by:</span>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <div>
                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                >
                  {eventTypes.map(type => (
                    <option key={type.id} value={type.id}>{type.label}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <select
                  value={selectedMonth}
                  onChange={(e) => setSelectedMonth(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                >
                  {months.map(month => (
                    <option key={month.id} value={month.id}>{month.label}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Events */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
            <Star className="w-6 h-6 text-yellow-500 mr-2" />
            Featured Events
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredEvents.filter(event => event.featured).map((event) => (
              <div key={event.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="relative">
                  <img 
                    src={event.image} 
                    alt={event.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Featured
                  </div>
                  <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-sm font-medium ${getEventTypeColor(event.type)}`}>
                    {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                  </div>
                </div>
                
                <div className="p-6">
                  <h4 className="text-xl font-semibold text-gray-800 mb-2">{event.title}</h4>
                  <p className="text-gray-600 mb-4">{event.description}</p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                    <div className="flex items-center space-x-2 text-gray-600">
                      <MapPin className="w-4 h-4" />
                      <span>{event.monastery}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-600">
                      <Calendar className="w-4 h-4" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-600">
                      <Clock className="w-4 h-4" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-600">
                      <Users className="w-4 h-4" />
                      <span>{event.availableSpots} spots left</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="text-lg font-semibold text-red-800">{event.price}</div>
                    <button className="bg-red-800 text-white px-6 py-2 rounded-lg hover:bg-red-900 transition-colors duration-200">
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* All Events Grid */}
        <div>
          <h3 className="text-2xl font-bold text-gray-800 mb-6">All Events</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEvents.map((event) => (
              <div key={event.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="relative">
                  <img 
                    src={event.image} 
                    alt={event.title}
                    className="w-full h-32 object-cover"
                  />
                  <div className={`absolute top-3 right-3 px-2 py-1 rounded-full text-xs font-medium ${getEventTypeColor(event.type)}`}>
                    {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                  </div>
                </div>
                
                <div className="p-4">
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">{event.title}</h4>
                  
                  <div className="space-y-2 mb-4 text-sm">
                    <div className="flex items-center space-x-2 text-gray-600">
                      <MapPin className="w-3 h-3" />
                      <span className="truncate">{event.monastery}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-600">
                      <Calendar className="w-3 h-3" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-600">
                      <Users className="w-3 h-3" />
                      <span>{event.availableSpots} spots left</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="font-semibold text-red-800">{event.price}</div>
                    <button className="bg-red-800 text-white px-4 py-1 rounded text-sm hover:bg-red-900 transition-colors duration-200">
                      Book
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {filteredEvents.length === 0 && (
          <div className="text-center py-16">
            <Calendar className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-600 mb-2">No events found</h3>
            <p className="text-gray-500">Try adjusting your filters to see more events</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default EventsSection;