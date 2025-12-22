import { useState } from 'react';

const ChatMessage = ({ message, type, metadata }) => {
  const isUser = type === 'user';
  const [showDetails, setShowDetails] = useState(false);

  // Check if this is an AI message with search results
  const hasResults = !isUser && metadata?.results && metadata.results.length > 0;
  const hasError = !isUser && metadata?.error;

  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-4 sm:mb-5 animate-fadeIn`}>
      <div className={`flex gap-2 sm:gap-3 max-w-[85%] sm:max-w-[80%] ${isUser ? 'flex-row-reverse' : 'flex-row'}`}>
        {/* Avatar */}
        <div className={`flex-shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-2xl flex items-center justify-center shadow-md ${
          isUser
            ? 'bg-gradient-to-br from-blue-600 to-blue-700'
            : hasError
              ? 'bg-gradient-to-br from-red-500 to-rose-500'
              : 'bg-gradient-to-br from-purple-500 via-pink-500 to-rose-500'
        } text-white transform hover:scale-110 transition-transform duration-300`}>
          {isUser ? (
            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
            </svg>
          ) : hasError ? (
            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
          ) : (
            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
              <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
            </svg>
          )}
        </div>

        {/* Message Content */}
        <div className={`flex flex-col ${isUser ? 'items-end' : 'items-start'} flex-1`}>
          <div className={`rounded-2xl sm:rounded-3xl px-4 py-3 sm:px-5 sm:py-3.5 shadow-md hover:shadow-lg transition-all duration-300 w-full ${
            isUser
              ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white'
              : hasError
                ? 'bg-red-50 border border-red-200 text-red-800'
                : 'bg-white/90 backdrop-blur-sm text-gray-800 border border-gray-200/50'
          }`}>
            <p className="text-sm sm:text-base leading-relaxed whitespace-pre-wrap break-words">
              {message}
            </p>

            {/* Search Results Metadata */}
            {hasResults && metadata.topResult && (
              <div className="mt-4 pt-4 border-t border-gray-200">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-semibold text-indigo-600 uppercase tracking-wide">
                    📊 Source Information
                  </span>
                  <button
                    onClick={() => setShowDetails(!showDetails)}
                    className="text-xs text-blue-600 hover:text-blue-800 font-medium transition-colors"
                  >
                    {showDetails ? '▼ Hide' : '▶ Show'} Details
                  </button>
                </div>

                {/* Top Result Summary */}
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-3 mb-2">
                  <div className="flex items-start gap-2">
                    <span className="text-lg">🎯</span>
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-gray-800">{metadata.topResult.topic}</p>
                      <div className="flex gap-2 mt-1 flex-wrap">
                        <span className="text-xs bg-white px-2 py-0.5 rounded-full text-gray-600">
                          Chapter {metadata.topResult.chapter}
                        </span>
                        <span className="text-xs bg-white px-2 py-0.5 rounded-full text-gray-600">
                          {metadata.topResult.knowledge_type}
                        </span>
                        <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-medium">
                          Score: {(metadata.topResult.score * 100).toFixed(1)}%
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Detailed Results */}
                {showDetails && (
                  <div className="mt-3 space-y-2 animate-fadeIn">
                    <p className="text-xs font-semibold text-gray-600 mb-2">All Results ({metadata.results.length}):</p>
                    {metadata.results.map((result, index) => (
                      <div key={index} className="bg-gray-50 rounded-lg p-2.5 border border-gray-200">
                        <div className="flex items-start gap-2">
                          <span className="text-xs font-bold text-indigo-600 mt-0.5">#{result.rank}</span>
                          <div className="flex-1">
                            <p className="text-xs font-semibold text-gray-800">{result.topic}</p>
                            <p className="text-xs text-gray-600 mt-1 line-clamp-2">{result.raw_text}</p>
                            <div className="flex gap-2 mt-1.5 flex-wrap">
                              <span className="text-xs bg-white px-1.5 py-0.5 rounded text-gray-500">
                                Ch. {result.chapter}
                              </span>
                              <span className="text-xs bg-white px-1.5 py-0.5 rounded text-gray-500">
                                {result.knowledge_type}
                              </span>
                              <span className="text-xs bg-blue-100 text-blue-700 px-1.5 py-0.5 rounded">
                                {(result.score * 100).toFixed(1)}%
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
          <span className="text-xs text-gray-500 mt-1.5 px-2 font-medium">
            {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;

