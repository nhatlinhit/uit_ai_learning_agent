/**
 * ErrorMessage Component
 * Displays user-friendly error messages with retry options
 */

const ErrorMessage = ({ error, onRetry }) => {
  return (
    <div className="flex justify-center mb-4 sm:mb-5 animate-fadeIn">
      <div className="max-w-md w-full bg-red-50 border border-red-200 rounded-2xl p-4 shadow-md">
        <div className="flex items-start gap-3">
          {/* Error Icon */}
          <div className="flex-shrink-0 w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
            <svg className="w-6 h-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>

          {/* Error Content */}
          <div className="flex-1">
            <h3 className="text-sm font-semibold text-red-800 mb-1">
              Connection Error
            </h3>
            <p className="text-sm text-red-700 mb-3">
              {error || "Unable to connect to the knowledge base. Please check your internet connection and try again."}
            </p>

            {/* Retry Button */}
            {onRetry && (
              <button
                onClick={onRetry}
                className="text-sm font-medium text-red-600 hover:text-red-800 underline transition-colors"
              >
                Try Again
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorMessage;

