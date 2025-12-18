import React from 'react';

const Concepts = () => {
  const sampleConcepts = [
    {
      id: 1,
      title: 'Machine Learning',
      description: 'A subset of AI that enables systems to learn and improve from experience.',
      category: 'AI Fundamentals',
    },
    {
      id: 2,
      title: 'Neural Networks',
      description: 'Computing systems inspired by biological neural networks in animal brains.',
      category: 'Deep Learning',
    },
    {
      id: 3,
      title: 'Natural Language Processing',
      description: 'The ability of computers to understand, interpret, and generate human language.',
      category: 'AI Applications',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            AI Concept Information
          </h1>
          <p className="text-gray-600">
            Explore and learn about key AI concepts and technologies
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sampleConcepts.map((concept) => (
            <div
              key={concept.id}
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 p-6"
            >
              <div className="mb-4">
                <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full">
                  {concept.category}
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                {concept.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {concept.description}
              </p>
              <button className="mt-4 text-blue-600 hover:text-blue-800 font-medium text-sm flex items-center">
                Learn more
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          ))}
        </div>

        <div className="mt-8 bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Search Concepts
          </h2>
          <div className="flex gap-4">
            <input
              type="text"
              placeholder="Search for AI concepts..."
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-lg transition duration-300">
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Concepts;

