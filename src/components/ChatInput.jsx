import { useState } from 'react';

const ChatInput = ({ onSendMessage, disabled = false }) => {
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim() && !disabled) {
      onSendMessage(message);
      setMessage('');
    }
  };

  const handleKeyDown = (e) => {
    // Submit on Enter (without Shift)
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <div className="border-t border-gray-200/50 bg-white/95 backdrop-blur-md p-4 sm:p-5 shadow-lg">
      <form onSubmit={handleSubmit} className="max-w-4xl mx-auto">
        <div className="flex gap-2 sm:gap-3 items-end">
          {/* Text Input */}
          <div className="flex-1 relative">
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask me anything about AI, learning, or any topic..."
              disabled={disabled}
              rows="1"
              className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none disabled:bg-gray-100 disabled:cursor-not-allowed transition-all duration-300 shadow-sm hover:shadow-md focus:shadow-lg bg-white/90 backdrop-blur-sm"
              style={{
                minHeight: '52px',
                maxHeight: '200px',
              }}
              onInput={(e) => {
                e.target.style.height = 'auto';
                e.target.style.height = Math.min(e.target.scrollHeight, 200) + 'px';
              }}
            />

            {/* Character count */}
            {message.length > 0 && (
              <div className="absolute bottom-3 right-3 text-xs font-medium text-gray-400 bg-white/80 backdrop-blur-sm px-2 py-0.5 rounded-full">
                {message.length}
              </div>
            )}
          </div>

          {/* Send Button */}
          <button
            type="submit"
            disabled={!message.trim() || disabled}
            className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold px-5 sm:px-6 py-3.5 rounded-2xl transition-all duration-300 flex items-center gap-2 disabled:from-gray-300 disabled:to-gray-300 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transform hover:scale-105 disabled:transform-none disabled:hover:scale-100"
          >
            <span className="hidden sm:inline">Send</span>
            <svg
              className="w-5 h-5 transform group-hover:translate-x-0.5 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
              />
            </svg>
          </button>
        </div>

        {/* Helper Text */}
        <div className="mt-3 text-xs text-gray-500 text-center flex items-center justify-center gap-2 flex-wrap">
          <span className="flex items-center gap-1">
            Press <kbd className="px-2 py-1 bg-gradient-to-br from-gray-100 to-gray-200 border border-gray-300 rounded-lg shadow-sm font-semibold text-gray-700">Enter</kbd> to send
          </span>
          <span className="hidden sm:inline">•</span>
          <span className="flex items-center gap-1">
            <kbd className="px-2 py-1 bg-gradient-to-br from-gray-100 to-gray-200 border border-gray-300 rounded-lg shadow-sm font-semibold text-gray-700">Shift + Enter</kbd> for new line
          </span>
        </div>
      </form>
    </div>
  );
};

export default ChatInput;

