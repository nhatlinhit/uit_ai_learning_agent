import { useState, useRef } from 'react';
import ChatContainer from '../components/ChatContainer';
import ChatInput from '../components/ChatInput';

const Home = () => {
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const messageIdCounter = useRef(0);

  const handleSendMessage = (messageText) => {
    // Add user message
    const userMessage = {
      id: ++messageIdCounter.current,
      type: 'user',
      text: messageText,
      timestamp: new Date().toISOString(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setIsLoading(true);

    // Simulate AI response with delay
    setTimeout(() => {
      const aiMessage = {
        id: ++messageIdCounter.current,
        type: 'ai',
        text: generateAIResponse(messageText),
        timestamp: new Date().toISOString(),
      };
      setMessages((prev) => [...prev, aiMessage]);
      setIsLoading(false);
    }, 1500);
  };

  // Placeholder AI response generator
  const generateAIResponse = (userMessage) => {
    const responses = [
      `That's an interesting question about "${userMessage}". Let me help you understand this better. This is a placeholder response that will be replaced with actual AI integration in the next steps.`,
      `Great question! Regarding "${userMessage}", I can provide you with detailed information. AI integration will make these responses more intelligent and contextual.`,
      `I understand you're asking about "${userMessage}". This is a simulated response. In the next phase, we'll integrate real AI capabilities to provide accurate and helpful answers.`,
      `Thank you for asking about "${userMessage}". This demonstrates the chat interface functionality. Real AI responses will be much more comprehensive and tailored to your specific needs.`,
    ];
    return responses[Math.floor(Math.random() * responses.length)];
  };

  return (
    <div className="h-[calc(100vh-4rem)] flex flex-col bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Chat Container */}
      <ChatContainer messages={messages} isLoading={isLoading} />

      {/* Chat Input */}
      <ChatInput onSendMessage={handleSendMessage} disabled={isLoading} />
    </div>
  );
};

export default Home;

