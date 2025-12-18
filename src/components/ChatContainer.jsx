import React, { useEffect, useRef } from 'react';
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
      className="flex-1 overflow-y-auto p-6 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="max-w-4xl mx-auto">
        {/* Welcome Message */}
        {messages.length === 0 && !isLoading && (
          <div className="flex flex-col items-center justify-center h-full min-h-[400px] text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mb-6 shadow-lg">
              <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
                <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-3">
              Welcome to UIT Learning AI
            </h2>
            <p className="text-gray-600 mb-8 max-w-md">
              Your intelligent learning companion. Ask me anything about AI, programming, science, or any topic you'd like to explore!
            </p>
            
            {/* Suggested Topics */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full max-w-2xl">
              <div className="bg-white border border-gray-200 rounded-lg p-4 hover:border-blue-500 hover:shadow-md transition-all cursor-pointer">
                <div className="text-2xl mb-2">🤖</div>
                <h3 className="font-semibold text-gray-800 mb-1">Learn AI Concepts</h3>
                <p className="text-sm text-gray-600">Explore machine learning, neural networks, and more</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4 hover:border-blue-500 hover:shadow-md transition-all cursor-pointer">
                <div className="text-2xl mb-2">💻</div>
                <h3 className="font-semibold text-gray-800 mb-1">Programming Help</h3>
                <p className="text-sm text-gray-600">Get assistance with coding and algorithms</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4 hover:border-blue-500 hover:shadow-md transition-all cursor-pointer">
                <div className="text-2xl mb-2">📊</div>
                <h3 className="font-semibold text-gray-800 mb-1">Data Science</h3>
                <p className="text-sm text-gray-600">Understand data analysis and visualization</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4 hover:border-blue-500 hover:shadow-md transition-all cursor-pointer">
                <div className="text-2xl mb-2">🎓</div>
                <h3 className="font-semibold text-gray-800 mb-1">Study Assistance</h3>
                <p className="text-sm text-gray-600">Get help with homework and exam preparation</p>
              </div>
            </div>
          </div>
        )}

        {/* Messages */}
        {messages.map((msg) => (
          <ChatMessage 
            key={msg.id} 
            message={msg.text} 
            type={msg.type}
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

