import { useState, useRef } from 'react';
import ChatContainer from '../components/ChatContainer';
import ChatInput from '../components/ChatInput';
import { searchKnowledge, formatSearchResults } from '../services/api';

const Home = () => {
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const messageIdCounter = useRef(0);

  const handleSendMessage = async (messageText) => {
    // Add user message
    const userMessage = {
      id: ++messageIdCounter.current,
      type: 'user',
      text: messageText,
      timestamp: new Date().toISOString(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setIsLoading(true);

    try {
      // Call the real API
      const apiResponse = await searchKnowledge(messageText, {
        top_k: 5,
        semantic_weight: 0.4,
        bm25_weight: 0.4,
        keyword_weight: 0.2,
      });

      // Format the results
      const formattedResponse = formatSearchResults(apiResponse);

      // Create AI message with results
      const aiMessage = {
        id: ++messageIdCounter.current,
        type: 'ai',
        text: formattedResponse.text,
        timestamp: new Date().toISOString(),
        metadata: {
          query: formattedResponse.query,
          processed_query: formattedResponse.processed_query,
          results: formattedResponse.results,
          topResult: formattedResponse.topResult,
          error: formattedResponse.error,
        },
      };

      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      // Handle unexpected errors
      const errorMessage = {
        id: ++messageIdCounter.current,
        type: 'ai',
        text: "I apologize, but I encountered an unexpected error. Please try again.",
        timestamp: new Date().toISOString(),
        metadata: {
          error: true,
        },
      };
      setMessages((prev) => [...prev, errorMessage]);
      console.error('Error in handleSendMessage:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="h-[calc(100vh-4rem)] flex flex-col bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-100">
      {/* Chat Container */}
      <ChatContainer
        messages={messages}
        isLoading={isLoading}
        onSendMessage={handleSendMessage}
      />

      {/* Chat Input */}
      <ChatInput onSendMessage={handleSendMessage} disabled={isLoading} />
    </div>
  );
};

export default Home;

