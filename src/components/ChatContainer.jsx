import { useEffect, useRef } from 'react';
import ChatMessage from './ChatMessage';
import LoadingIndicator from './LoadingIndicator';

const ChatContainer = ({ messages, isLoading }) => {
  const messagesEndRef = useRef(null);
  const containerRef = useRef(null);

  // Auto-scroll to bottom when new messages arrive
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  return (
    <div
      ref={containerRef}
      className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8 bg-gradient-to-b from-gray-50 via-blue-50/30 to-white"
    >
      <div className="max-w-4xl mx-auto">
        {/* Welcome Message */}
        {messages.length === 0 && !isLoading && (
          <div className="flex flex-col items-center justify-center h-full min-h-[400px] text-center animate-fadeIn">
            <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-blue-500 via-indigo-600 to-purple-600 rounded-3xl flex items-center justify-center mb-6 shadow-2xl transform hover:scale-110 transition-transform duration-300">
              <svg className="w-10 h-10 sm:w-12 sm:h-12 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
                <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
              </svg>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent mb-3 sm:mb-4">
              Welcome to UIT Learning AI
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 mb-8 sm:mb-10 max-w-md px-4">
              Your intelligent learning companion. Ask me anything about AI, programming, science, or any topic you'd like to explore!
            </p>

            {/* Suggested Topics */}
            {/* <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 w-full max-w-2xl px-4">
              <div className="group bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-4 sm:p-5 hover:border-blue-400 hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1">
                <div className="text-3xl sm:text-4xl mb-2 sm:mb-3 transform group-hover:scale-110 transition-transform duration-300">🤖</div>
                <h3 className="font-bold text-gray-800 mb-1 sm:mb-2 text-sm sm:text-base">Learn AI Concepts</h3>
                <p className="text-xs sm:text-sm text-gray-600">Explore machine learning, neural networks, and more</p>
              </div>
              <div className="group bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-4 sm:p-5 hover:border-indigo-400 hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1">
                <div className="text-3xl sm:text-4xl mb-2 sm:mb-3 transform group-hover:scale-110 transition-transform duration-300">💻</div>
                <h3 className="font-bold text-gray-800 mb-1 sm:mb-2 text-sm sm:text-base">Programming Help</h3>
                <p className="text-xs sm:text-sm text-gray-600">Get assistance with coding and algorithms</p>
              </div>
              <div className="group bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-4 sm:p-5 hover:border-purple-400 hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1">
                <div className="text-3xl sm:text-4xl mb-2 sm:mb-3 transform group-hover:scale-110 transition-transform duration-300">📊</div>
                <h3 className="font-bold text-gray-800 mb-1 sm:mb-2 text-sm sm:text-base">Data Science</h3>
                <p className="text-xs sm:text-sm text-gray-600">Understand data analysis and visualization</p>
              </div>
              <div className="group bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-4 sm:p-5 hover:border-pink-400 hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1">
                <div className="text-3xl sm:text-4xl mb-2 sm:mb-3 transform group-hover:scale-110 transition-transform duration-300">🎓</div>
                <h3 className="font-bold text-gray-800 mb-1 sm:mb-2 text-sm sm:text-base">Study Assistance</h3>
                <p className="text-xs sm:text-sm text-gray-600">Get help with homework and exam preparation</p>
              </div>
            </div> */}
          </div>
        )}

        {/* Messages */}
        {messages.map((msg) => (
          <ChatMessage
            key={msg.id}
            message={msg.text}
            type={msg.type}
            metadata={msg.metadata}
          />
        ))}

        {/* Loading Indicator */}
        {isLoading && <LoadingIndicator />}

        {/* Scroll anchor */}
        <div ref={messagesEndRef} />
      </div>
    </div>
  );
};

export default ChatContainer;

