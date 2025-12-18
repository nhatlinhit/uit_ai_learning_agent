import { useState } from 'react';

const Concepts = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const sampleConcepts = [
    {
      id: 1,
      title: 'Machine Learning',
      description: 'A subset of AI that enables systems to learn and improve from experience without being explicitly programmed.',
      category: 'AI Fundamentals',
      icon: '🤖',
      color: 'blue',
    },
    {
      id: 2,
      title: 'Neural Networks',
      description: 'Computing systems inspired by biological neural networks in animal brains, capable of learning complex patterns.',
      category: 'Deep Learning',
      icon: '🧠',
      color: 'purple',
    },
    {
      id: 3,
      title: 'Natural Language Processing',
      description: 'The ability of computers to understand, interpret, and generate human language in a meaningful way.',
      category: 'AI Applications',
      icon: '💬',
      color: 'green',
    },
    {
      id: 4,
      title: 'Computer Vision',
      description: 'Enabling computers to derive meaningful information from digital images, videos, and other visual inputs.',
      category: 'AI Applications',
      icon: '👁️',
      color: 'indigo',
    },
    {
      id: 5,
      title: 'Reinforcement Learning',
      description: 'Training models to make sequences of decisions by rewarding desired behaviors and punishing undesired ones.',
      category: 'AI Fundamentals',
      icon: '🎯',
      color: 'orange',
    },
    {
      id: 6,
      title: 'Deep Learning',
      description: 'A subset of machine learning using neural networks with multiple layers to progressively extract higher-level features.',
      category: 'Deep Learning',
      icon: '🔬',
      color: 'pink',
    },
  ];

  const categories = ['all', ...new Set(sampleConcepts.map(c => c.category))];

  const filteredConcepts = sampleConcepts.filter(concept => {
    const matchesSearch = searchQuery === '' ||
      concept.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      concept.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || concept.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const colorClasses = {
    blue: 'from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700',
    purple: 'from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700',
    green: 'from-green-500 to-green-600 hover:from-green-600 hover:to-green-700',
    indigo: 'from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700',
    orange: 'from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700',
    pink: 'from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700',
  };

  const badgeClasses = {
    blue: 'bg-blue-50 text-blue-700 border-blue-200',
    purple: 'bg-purple-50 text-purple-700 border-purple-200',
    green: 'bg-green-50 text-green-700 border-green-200',
    indigo: 'bg-indigo-50 text-indigo-700 border-indigo-200',
    orange: 'bg-orange-50 text-orange-700 border-orange-200',
    pink: 'bg-pink-50 text-pink-700 border-pink-200',
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-8 sm:mb-12 text-center animate-fadeIn">
          <div className="inline-block mb-4">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-3xl flex items-center justify-center shadow-lg transform hover:scale-110 transition-transform duration-300">
              <span className="text-3xl sm:text-4xl">💡</span>
            </div>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-3 sm:mb-4">
            AI Concept Library
          </h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Explore and learn about key AI concepts and technologies that are shaping the future
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className="mb-8 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200/50 p-4 sm:p-6 animate-fadeIn">
          <div className="flex flex-col sm:flex-row gap-4">
            {/* Search Input */}
            <div className="flex-1 relative group">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-400 group-focus-within:text-blue-500 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Search AI concepts..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 sm:py-3.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white/50 backdrop-blur-sm hover:bg-white"
              />
            </div>

            {/* Category Filter */}
            <div className="flex gap-2 overflow-x-auto pb-2 sm:pb-0">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2.5 rounded-xl font-medium text-sm whitespace-nowrap transition-all duration-200 ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md transform scale-105'
                      : 'bg-white/70 text-gray-700 hover:bg-white hover:shadow-md border border-gray-200'
                  }`}
                >
                  {category === 'all' ? '✨ All' : category}
                </button>
              ))}
            </div>
          </div>

          {/* Results Count */}
          <div className="mt-4 text-sm text-gray-600 flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
            Showing <span className="font-semibold text-gray-800">{filteredConcepts.length}</span> of <span className="font-semibold text-gray-800">{sampleConcepts.length}</span> concepts
          </div>
        </div>

        {/* Concepts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8">
          {filteredConcepts.map((concept, index) => (
            <div
              key={concept.id}
              className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-gray-200 transform hover:-translate-y-1 animate-fadeIn"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {/* Card Header with Gradient */}
              <div className={`bg-gradient-to-r ${colorClasses[concept.color]} p-6 text-white transition-all duration-300`}>
                <div className="flex items-start justify-between mb-3">
                  <div className="text-4xl transform group-hover:scale-110 transition-transform duration-300">
                    {concept.icon}
                  </div>
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${badgeClasses[concept.color]} bg-white/90 backdrop-blur-sm`}>
                    {concept.category}
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-2">
                  {concept.title}
                </h3>
              </div>

              {/* Card Body */}
              <div className="p-6">
                <p className="text-gray-600 leading-relaxed mb-4 text-sm sm:text-base">
                  {concept.description}
                </p>
                <button className={`w-full bg-gradient-to-r ${colorClasses[concept.color]} text-white font-semibold py-3 px-4 rounded-xl transition-all duration-200 flex items-center justify-center gap-2 shadow-md hover:shadow-lg transform hover:scale-105`}>
                  <span>Learn More</span>
                  <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* No Results Message */}
        {filteredConcepts.length === 0 && (
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-12 text-center border border-gray-200/50 animate-fadeIn">
            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-10 h-10 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">No concepts found</h3>
            <p className="text-gray-600">Try adjusting your search or filter criteria</p>
          </div>
        )}

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-3xl shadow-2xl p-8 sm:p-12 text-white text-center animate-fadeIn">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to dive deeper?</h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto text-base sm:text-lg">
            Explore our interactive AI visualization to see how these concepts connect and build upon each other
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 font-semibold px-8 py-4 rounded-xl hover:bg-blue-50 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105">
              View Visualization
            </button>
            <button className="bg-blue-700/50 backdrop-blur-sm text-white font-semibold px-8 py-4 rounded-xl hover:bg-blue-700/70 transition-all duration-200 border-2 border-white/30 hover:border-white/50">
              Start Learning
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Concepts;

