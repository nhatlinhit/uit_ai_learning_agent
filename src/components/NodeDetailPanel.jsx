import { useState } from 'react';

const NodeDetailPanel = ({ node, onClose }) => {
  const [isExpanded, setIsExpanded] = useState(true);

  if (!node) {
    return (
      <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-6 sm:p-8 h-full flex items-center justify-center border border-gray-200/50 animate-fadeIn">
        <div className="text-center text-gray-500">
          <div className="w-20 h-20 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center mx-auto mb-4 shadow-inner">
            <svg
              className="h-10 w-10 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <p className="text-lg font-semibold text-gray-700 mb-2">No Node Selected</p>
          <p className="text-sm text-gray-500">Click on a node in the graph to view details</p>
        </div>
      </div>
    );
  }

  // Support both data structures (details and metadata)
  const nodeDetails = node.details || node.metadata || {};
  const nodeName = node.name || node.label || 'Unknown';

  return (
    <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl h-full overflow-y-auto border border-gray-200/50 animate-fadeIn">
      {/* Header */}
      <div className="sticky top-0 bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-600 text-white p-5 sm:p-6 rounded-t-2xl shadow-lg z-10">
        <div className="flex justify-between items-start">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-3">
              <div
                className="w-5 h-5 rounded-full border-2 border-white shadow-lg transform hover:scale-110 transition-transform duration-300"
                style={{ backgroundColor: node.color || '#3B82F6' }}
              />
              <span className="text-xs sm:text-sm font-semibold bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full border border-white/30">
                {node.category || 'Concept'}
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-2 sm:mb-3">{nodeName}</h2>
            <p className="text-blue-50 text-xs sm:text-sm leading-relaxed">{node.description || 'No description available'}</p>
          </div>
          {onClose && (
            <button
              onClick={onClose}
              className="ml-3 sm:ml-4 text-white hover:bg-white/20 rounded-xl p-2 transition-all duration-200 hover:scale-110"
              aria-label="Close panel"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-4 sm:p-6 space-y-5 sm:space-y-6">
        {/* Definition */}
        {nodeDetails.definition && (
          <div className="animate-fadeIn">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="w-full text-left mb-3 flex items-center justify-between group"
            >
              <h3 className="text-base sm:text-lg font-semibold text-gray-800 flex items-center gap-2">
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg p-1.5 shadow-md group-hover:shadow-lg transition-shadow duration-300">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span>Definition</span>
              </h3>
              <svg className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {isExpanded && (
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed bg-gradient-to-br from-blue-50 to-indigo-50 p-4 rounded-xl border border-blue-200/50 shadow-sm">
                {nodeDetails.definition}
              </p>
            )}
          </div>
        )}

        {/* Applications */}
        {nodeDetails.applications && nodeDetails.applications.length > 0 && (
          <div className="animate-fadeIn">
            <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
              <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-lg p-1.5 shadow-md">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <span>Key Applications</span>
            </h3>
            <ul className="space-y-2">
              {nodeDetails.applications.map((app, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 bg-gradient-to-br from-green-50 to-emerald-50 p-3 sm:p-4 rounded-xl border border-green-200/50 hover:border-green-300 hover:shadow-md transition-all duration-300 transform hover:-translate-y-0.5"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <span className="text-green-600 font-bold text-base mt-0.5">✓</span>
                  <span className="text-sm sm:text-base text-gray-700 flex-1">{app}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Complexity Level & Year Introduced - Side by Side */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 animate-fadeIn">
          {nodeDetails.complexity && (
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-4 sm:p-5 rounded-xl border border-indigo-200/50 shadow-sm hover:shadow-md transition-all duration-300">
              <h3 className="text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                <div className="bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-lg p-1 shadow-md">
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <span>Complexity</span>
              </h3>
              <p className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                {nodeDetails.complexity}
              </p>
            </div>
          )}

          {nodeDetails.yearIntroduced && (
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-4 sm:p-5 rounded-xl border border-purple-200/50 shadow-sm hover:shadow-md transition-all duration-300">
              <h3 className="text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg p-1 shadow-md">
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <span>Year Introduced</span>
              </h3>
              <p className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                {nodeDetails.yearIntroduced}
              </p>
            </div>
          )}
        </div>

        {/* Related Fields */}
        {nodeDetails.relatedFields && nodeDetails.relatedFields.length > 0 && (
          <div className="animate-fadeIn">
            <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
              <div className="bg-gradient-to-br from-teal-500 to-teal-600 rounded-lg p-1.5 shadow-md">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
              </div>
              <span>Related Fields</span>
            </h3>
            <div className="flex flex-wrap gap-2">
              {nodeDetails.relatedFields.map((field, index) => (
                <span
                  key={index}
                  className="inline-block bg-gradient-to-r from-teal-50 to-cyan-50 text-teal-700 text-xs sm:text-sm font-medium px-3 py-1.5 rounded-full border border-teal-200/50 shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {field}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Node Properties */}
        <div className="animate-fadeIn">
          <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
            <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg p-1.5 shadow-md">
              <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
              </svg>
            </div>
            <span>Node Properties</span>
          </h3>
          <div className="grid grid-cols-2 gap-2 sm:gap-3">
            <div className="bg-gradient-to-br from-orange-50 to-amber-50 p-3 sm:p-4 rounded-xl border border-orange-200/50 shadow-sm hover:shadow-md transition-all duration-300">
              <p className="text-xs text-orange-600 font-semibold mb-1">ID</p>
              <p className="text-xs sm:text-sm font-mono text-gray-800 break-all">{node.id}</p>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-amber-50 p-3 sm:p-4 rounded-xl border border-orange-200/50 shadow-sm hover:shadow-md transition-all duration-300">
              <p className="text-xs text-orange-600 font-semibold mb-1">Size</p>
              <p className="text-xs sm:text-sm font-mono text-gray-800">{node.size || 20}</p>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-amber-50 p-3 sm:p-4 rounded-xl border border-orange-200/50 shadow-sm hover:shadow-md transition-all duration-300">
              <p className="text-xs text-orange-600 font-semibold mb-1">Category</p>
              <p className="text-xs sm:text-sm font-mono text-gray-800">{node.category || 'N/A'}</p>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-amber-50 p-3 sm:p-4 rounded-xl border border-orange-200/50 shadow-sm hover:shadow-md transition-all duration-300">
              <p className="text-xs text-orange-600 font-semibold mb-1">Color</p>
              <div className="flex items-center gap-2">
                <div
                  className="w-4 h-4 rounded-md border border-gray-300 shadow-sm"
                  style={{ backgroundColor: node.color || '#3B82F6' }}
                />
                <p className="text-xs sm:text-sm font-mono text-gray-800">{node.color || '#3B82F6'}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NodeDetailPanel;

