const ChatMessage = ({ message, type }) => {
  const isUser = type === 'user';

  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-4 sm:mb-5 animate-fadeIn`}>
      <div className={`flex gap-2 sm:gap-3 max-w-[85%] sm:max-w-[80%] ${isUser ? 'flex-row-reverse' : 'flex-row'}`}>
        {/* Avatar */}
        <div className={`flex-shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-2xl flex items-center justify-center shadow-md ${
          isUser
            ? 'bg-gradient-to-br from-blue-600 to-blue-700'
            : 'bg-gradient-to-br from-purple-500 via-pink-500 to-rose-500'
        } text-white transform hover:scale-110 transition-transform duration-300`}>
          {isUser ? (
            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
            </svg>
          ) : (
            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
              <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
            </svg>
          )}
        </div>

        {/* Message Content */}
        <div className={`flex flex-col ${isUser ? 'items-end' : 'items-start'}`}>
          <div className={`rounded-2xl sm:rounded-3xl px-4 py-3 sm:px-5 sm:py-3.5 shadow-md hover:shadow-lg transition-all duration-300 ${
            isUser
              ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white'
              : 'bg-white/90 backdrop-blur-sm text-gray-800 border border-gray-200/50'
          }`}>
            <p className="text-sm sm:text-base leading-relaxed whitespace-pre-wrap break-words">
              {message}
            </p>
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

