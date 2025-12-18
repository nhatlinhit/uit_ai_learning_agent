const LoadingIndicator = () => {
  return (
    <div className="flex justify-start mb-4 sm:mb-5 animate-fadeIn">
      <div className="flex gap-2 sm:gap-3 max-w-[85%] sm:max-w-[80%]">
        {/* AI Avatar */}
        <div className="flex-shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-2xl bg-gradient-to-br from-purple-500 via-pink-500 to-rose-500 text-white flex items-center justify-center shadow-md animate-pulse">
          <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
            <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
          </svg>
        </div>

        {/* Typing Indicator */}
        <div className="bg-white/90 backdrop-blur-sm border border-gray-200/50 rounded-2xl sm:rounded-3xl px-5 sm:px-6 py-4 shadow-md">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full animate-bounce shadow-sm" style={{ animationDelay: '0ms' }}></div>
            <div className="w-2.5 h-2.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full animate-bounce shadow-sm" style={{ animationDelay: '150ms' }}></div>
            <div className="w-2.5 h-2.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-bounce shadow-sm" style={{ animationDelay: '300ms' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingIndicator;

