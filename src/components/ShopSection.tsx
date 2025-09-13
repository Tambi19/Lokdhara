import React, { useState } from 'react';
import { ShoppingCart, Heart, Star, Filter, Search, Tag } from 'lucide-react';

const ShopSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [cartItems, setCartItems] = useState<number[]>([]);
  const [wishlist, setWishlist] = useState<number[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  const products = [
    {
      id: 1,
      name: "Handwoven Prayer Shawl",
      category: "textiles",
      price: 2500,
      originalPrice: 3000,
      monastery: "Pemayangtse Monastery",
      image: "https://media-dynamic.okendo.io/images/b6f2b867-5678-4833-aa73-4ac7c0553ed2/4e19514b-e8da-45ab-b68d-751130cacb6c.jpg?d=540x720",
      rating: 4.8,
      reviews: 24,
      description: "Traditional Tibetan prayer shawl handwoven by monastery artisans",
      inStock: true,
      featured: true
    },
    {
      id: 2,
      name: "Singing Bowl Set",
      category: "spiritual",
      price: 4500,
      originalPrice: 5000,
      monastery: "Rumtek Monastery",
      image: "https://www.mypoojabox.in/cdn/shop/files/DSC01568copy.jpg?v=1709903166",
      rating: 4.9,
      reviews: 42,
      description: "Authentic Tibetan singing bowls with wooden mallet and cushion",
      inStock: true,
      featured: true
    },
    {
      id: 3,
      name: "Traditional Thangka Painting",
      category: "art",
      price: 8500,
      originalPrice: 10000,
      monastery: "Enchey Monastery",
      image: "https://www.theartlifegallery.com/blog/wp-content/uploads/2023/09/Image-01-9.jpg",
      rating: 5.0,
      reviews: 18,
      description: "Hand-painted Buddha thangka on traditional canvas",
      inStock: false,
      featured: true
    },
    {
      id: 4,
      name: "Yak Wool Blanket",
      category: "textiles",
      price: 3500,
      originalPrice: 4200,
      monastery: "Tashiding Monastery",
      image: "https://thumbs.dreamstime.com/b/sale-wool-blankets-thamel-market-kathmandu-nepal-october-61907740.jpg",
      rating: 4.7,
      reviews: 31,
      description: "Soft and warm blanket made from pure yak wool",
      inStock: true,
      featured: false
    },
    {
      id: 5,
      name: "Tibetan Prayer Flags",
      category: "spiritual",
      price: 800,
      originalPrice: 1000,
      monastery: "Ralang Monastery",
      image: "https://5.imimg.com/data5/SELLER/Default/2021/12/SZ/TK/JU/125671784/tibetan-prayer-flag.jpg",
      rating: 4.6,
      reviews: 67,
      description: "Colorful prayer flags with traditional mantras and symbols",
      inStock: true,
      featured: false
    },
    {
      id: 6,
      name: "Hand-carved Wooden Buddha",
      category: "art",
      price: 6500,
      originalPrice: 7500,
      monastery: "Dubdi Monastery",
      image: "https://i.etsystatic.com/10300152/r/il/7c9973/4442914925/il_fullxfull.4442914925_by9s.jpg",
      rating: 4.8,
      reviews: 29,
      description: "Intricately carved Buddha statue from local artisans",
      inStock: true,
      featured: false
    },
    {
      id: 7,
      name: "Monastery Tea Blend",
      category: "food",
      price: 1200,
      originalPrice: 1500,
      monastery: "Rumtek Monastery",
      image: "https://aapkipasandtea.com/cdn/shop/products/Organic-Sikkim-tea-antioxidant-tea.jpg?v=1751097251",
      rating: 4.5,
      reviews: 89,
      description: "Traditional herbal tea blend used in monastery ceremonies",
      inStock: true,
      featured: false
    },
    {
      id: 8,
      name: "Tibetan Incense Set",
      category: "spiritual",
      price: 900,
      originalPrice: 1200,
      monastery: "Pemayangtse Monastery",
      image: "https://www.theincensestick.com/cdn/shop/products/il_fullxfull.2097826182_67qp_fc4cfe01-1eb0-46c4-bac0-11688a845d55.jpg?v=1686764673&width=1946",
      rating: 4.4,
      reviews: 156,
      description: "Sacred incense made from traditional Himalayan herbs",
      inStock: true,
      featured: false
    }
  ];

  const categories = [
    { id: 'all', label: 'All Products', count: products.length },
    { id: 'textiles', label: 'Textiles', count: products.filter(p => p.category === 'textiles').length },
    { id: 'spiritual', label: 'Spiritual Items', count: products.filter(p => p.category === 'spiritual').length },
    { id: 'art', label: 'Art & Crafts', count: products.filter(p => p.category === 'art').length },
    { id: 'food', label: 'Food & Beverages', count: products.filter(p => p.category === 'food').length }
  ];

  const filteredProducts = products.filter(product => 
    (selectedCategory === 'all' || product.category === selectedCategory) &&
    (searchTerm === '' || 
     product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
     product.monastery.toLowerCase().includes(searchTerm.toLowerCase()) ||
     product.description.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  const toggleCart = (productId: number) => {
    setCartItems(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  const toggleWishlist = (productId: number) => {
    setWishlist(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  return (
    <section id="shop" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Monastery Marketplace
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Support local artisans and monastery communities by purchasing authentic 
            handicrafts, spiritual items, and traditional products
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-xl p-6 mb-8 shadow-lg">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Search Bar */}
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search for authentic monastery products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>
            </div>

            {/* Cart Summary */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-gray-600">
                <Heart className="w-5 h-5" />
                <span>{wishlist.length} Saved</span>
              </div>
              <div className="flex items-center space-x-2 text-red-800">
                <ShoppingCart className="w-5 h-5" />
                <span>{cartItems.length} Items</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar - Categories */}
          <div className="lg:w-64">
            <div className="bg-white rounded-xl p-6 shadow-lg sticky top-24">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                <Filter className="w-5 h-5 mr-2" />
                Categories
              </h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-colors duration-200 flex items-center justify-between ${
                      selectedCategory === category.id
                        ? 'bg-red-800 text-white'
                        : 'text-gray-700 hover:bg-red-50 hover:text-red-800'
                    }`}
                  >
                    <span>{category.label}</span>
                    <span className={`text-sm px-2 py-1 rounded-full ${
                      selectedCategory === category.id
                        ? 'bg-red-700 text-white'
                        : 'bg-gray-200 text-gray-600'
                    }`}>
                      {category.count}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Product Grid */}
          <div className="flex-1">
            {/* Featured Products */}
            {selectedCategory === 'all' && (
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                  <Star className="w-6 h-6 text-yellow-500 mr-2" />
                  Featured Products
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                  {products.filter(product => product.featured).map((product) => (
                    <div key={product.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                      <div className="relative">
                        <img 
                          src={product.image} 
                          alt={product.name}
                          className="w-full h-48 object-cover"
                        />
                        <div className="absolute top-3 left-3 bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                          Featured
                        </div>
                        <button
                          onClick={() => toggleWishlist(product.id)}
                          className={`absolute top-3 right-3 p-2 rounded-full transition-colors duration-200 ${
                            wishlist.includes(product.id)
                              ? 'bg-red-500 text-white'
                              : 'bg-white text-gray-600 hover:text-red-500'
                          }`}
                        >
                          <Heart className="w-4 h-4" />
                        </button>
                        {!product.inStock && (
                          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                            <span className="bg-white text-gray-800 px-4 py-2 rounded-full font-semibold">
                              Out of Stock
                            </span>
                          </div>
                        )}
                      </div>
                      
                      <div className="p-4">
                        <h4 className="text-lg font-semibold text-gray-800 mb-2">{product.name}</h4>
                        <p className="text-sm text-gray-600 mb-2">{product.monastery}</p>
                        <p className="text-sm text-gray-600 mb-4 leading-relaxed">{product.description}</p>
                        
                        <div className="flex items-center mb-4">
                          <div className="flex items-center">
                            {[...Array(5)].map((_, i) => (
                              <Star 
                                key={i} 
                                className={`w-4 h-4 ${
                                  i < Math.floor(product.rating) 
                                    ? 'text-yellow-400 fill-current' 
                                    : 'text-gray-300'
                                }`} 
                              />
                            ))}
                          </div>
                          <span className="ml-2 text-sm text-gray-600">({product.reviews})</span>
                        </div>
                        
                        <div className="flex items-center justify-between mb-4">
                          <div>
                            <span className="text-lg font-bold text-gray-800">₹{product.price.toLocaleString()}</span>
                            {product.originalPrice > product.price && (
                              <span className="ml-2 text-sm text-gray-500 line-through">₹{product.originalPrice.toLocaleString()}</span>
                            )}
                          </div>
                          {product.originalPrice > product.price && (
                            <div className="flex items-center bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">
                              <Tag className="w-3 h-3 mr-1" />
                              {Math.round((1 - product.price / product.originalPrice) * 100)}% OFF
                            </div>
                          )}
                        </div>
                        
                        <button
                          onClick={() => toggleCart(product.id)}
                          disabled={!product.inStock}
                          className={`w-full py-2 rounded-lg font-medium transition-colors duration-200 ${
                            product.inStock
                              ? cartItems.includes(product.id)
                                ? 'bg-green-600 text-white hover:bg-green-700'
                                : 'bg-red-800 text-white hover:bg-red-900'
                              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                          }`}
                        >
                          {!product.inStock 
                            ? 'Out of Stock' 
                            : cartItems.includes(product.id) 
                              ? 'Added to Cart' 
                              : 'Add to Cart'
                          }
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* All Products */}
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                {selectedCategory === 'all' ? 'All Products' : categories.find(c => c.id === selectedCategory)?.label}
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredProducts.map((product) => (
                  <div key={product.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                    <div className="relative">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-full h-40 object-cover"
                      />
                      <button
                        onClick={() => toggleWishlist(product.id)}
                        className={`absolute top-2 right-2 p-2 rounded-full transition-colors duration-200 ${
                          wishlist.includes(product.id)
                            ? 'bg-red-500 text-white'
                            : 'bg-white text-gray-600 hover:text-red-500'
                        }`}
                      >
                        <Heart className="w-3 h-3" />
                      </button>
                      {!product.inStock && (
                        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                          <span className="bg-white text-gray-800 px-3 py-1 rounded-full text-sm font-semibold">
                            Out of Stock
                          </span>
                        </div>
                      )}
                    </div>
                    
                    <div className="p-3">
                      <h4 className="font-semibold text-gray-800 mb-1 text-sm">{product.name}</h4>
                      <p className="text-xs text-gray-600 mb-2">{product.monastery}</p>
                      
                      <div className="flex items-center mb-2">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              className={`w-3 h-3 ${
                                i < Math.floor(product.rating) 
                                  ? 'text-yellow-400 fill-current' 
                                  : 'text-gray-300'
                              }`} 
                            />
                          ))}
                        </div>
                        <span className="ml-1 text-xs text-gray-600">({product.reviews})</span>
                      </div>
                      
                      <div className="flex items-center justify-between mb-3">
                        <div>
                          <span className="text-sm font-bold text-gray-800">₹{product.price.toLocaleString()}</span>
                          {product.originalPrice > product.price && (
                            <span className="ml-1 text-xs text-gray-500 line-through">₹{product.originalPrice.toLocaleString()}</span>
                          )}
                        </div>
                      </div>
                      
                      <button
                        onClick={() => toggleCart(product.id)}
                        disabled={!product.inStock}
                        className={`w-full py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                          product.inStock
                            ? cartItems.includes(product.id)
                              ? 'bg-green-600 text-white hover:bg-green-700'
                              : 'bg-red-800 text-white hover:bg-red-900'
                            : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                        }`}
                      >
                        {!product.inStock 
                          ? 'Out of Stock' 
                          : cartItems.includes(product.id) 
                            ? 'Added' 
                            : 'Add to Cart'
                        }
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-16">
                <ShoppingCart className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-600 mb-2">No products found</h3>
                <p className="text-gray-500">Try adjusting your search terms or category filters</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopSection;