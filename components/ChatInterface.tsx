'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChatMode, ChatMessage as ChatMessageType } from '@/types';
import { generateId } from '@/utils/helpers';
import ChatMessage from './ChatMessage';
import TypingIndicator from './TypingIndicator';

interface ChatInterfaceProps {
  currentMode: ChatMode;
  className?: string;
}

export default function ChatInterface({
  currentMode,
  className = '',
}: ChatInterfaceProps) {
  const [messages, setMessages] = useState<ChatMessageType[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [hasStartedChat, setHasStartedChat] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  // Auto-scroll to bottom when new messages are added
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  // Focus input on mount and mode change
  useEffect(() => {
    inputRef.current?.focus();
  }, [currentMode]);

  const sendMessage = async () => {
    if (!inputValue.trim() || isLoading) return;

    // Set hasStartedChat to true on first message
    if (!hasStartedChat) {
      setHasStartedChat(true);
    }

    const userMessage: ChatMessageType = {
      id: generateId(),
      content: inputValue.trim(),
      role: 'user',
      mode: currentMode,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);
    setError(null);

    try {
      // API call to chat endpoint
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: userMessage.content,
          mode: currentMode,
          conversation_id: `chat-${Date.now()}`,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }

      const data = await response.json();

      const assistantMessage: ChatMessageType = {
        id: generateId(),
        content: data.response,
        role: 'assistant',
        mode: currentMode,
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, assistantMessage]);
    } catch (err) {
      setError(getErrorMessage(err));

      // Add a humorous error message based on mode
      const errorMessage: ChatMessageType = {
        id: generateId(),
        content: getHumorousErrorMessage(currentMode),
        role: 'assistant',
        mode: currentMode,
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const getErrorMessage = (err: any): string => {
    if (err instanceof Error) return err.message;
    return 'Something went wrong. Our AI is probably disrupting itself.';
  };

  const getHumorousErrorMessage = (mode: ChatMode): string => {
    switch (mode) {
      case 'roast':
        return "I'd roast your idea, but our servers are already on fire. Try again when we've disrupted our infrastructure issues.";
      case 'calculator':
        return 'Error 404: Profitability not found. Our calculation engine is currently calculating how to calculate calculations.';
      default:
        return 'Our AI is experiencing a paradigm shift. Please stand by while we pivot our neural networks to a more synergistic approach.';
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const placeholderText = {
    normal: 'What startup idea needs our expert guidance?',
    roast: 'Drop your startup idea here for some brutal honesty...',
    calculator: "Tell us your business model and we'll run the numbers...",
  };

  const welcomeContent = {
    normal: {
      icon: '💡',
      title: 'Ready to disrupt?',
      subtitle: 'Let our AI guide your startup journey with satirical wisdom',
    },
    roast: {
      icon: '🔥',
      title: 'Prepare for brutal honesty',
      subtitle: 'Get your startup idea roasted by our merciless AI critic',
    },
    calculator: {
      icon: '📊',
      title: "Let's crunch some numbers",
      subtitle: 'Analyze your business model with our data-driven AI',
    },
  };

  if (!hasStartedChat) {
    // Initial state - Large centered interface (OpenAI style)
    return (
      <div className={`max-w-4xl mx-auto ${className}`}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="flex flex-col items-center justify-center min-h-[60vh] text-center"
        >
          {/* Welcome Content */}
          <div className="mb-12">
            <motion.div
              className="text-6xl mb-4"
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              {welcomeContent[currentMode].icon}
            </motion.div>
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-500 to-green-400 bg-clip-text text-transparent">
              {welcomeContent[currentMode].title}
            </h2>
            <p className="text-gray-400 text-lg max-w-md mx-auto">
              {welcomeContent[currentMode].subtitle}
            </p>
          </div>

          {/* Large Input Area */}
          <div className="w-full max-w-2xl">
            <div className="relative">
              <motion.textarea
                ref={inputRef}
                value={inputValue}
                onChange={e => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder={placeholderText[currentMode]}
                className="w-full bg-gray-800/50 text-white px-6 py-4 rounded-2xl border border-gray-600/50 focus:border-blue-500/50 transition-all duration-300 resize-none min-h-[120px] text-lg backdrop-blur-sm shadow-xl"
                disabled={isLoading}
                whileFocus={{
                  scale: 1.02,
                  boxShadow: '0 0 0 1px rgba(59, 130, 246, 0.5)',
                  transition: { duration: 0.2 },
                }}
              />

              <motion.button
                onClick={sendMessage}
                disabled={!inputValue.trim() || isLoading}
                className={`
                  absolute bottom-4 right-4 px-8 py-3 rounded-xl font-medium transition-all duration-300
                  ${
                    currentMode === 'roast'
                      ? 'bg-red-500 hover:bg-red-600'
                      : currentMode === 'calculator'
                        ? 'bg-green-500 hover:bg-green-600'
                        : 'bg-blue-500 hover:bg-blue-600'
                  }
                  text-white disabled:opacity-50 disabled:cursor-not-allowed
                  shadow-lg hover:shadow-xl
                `}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {isLoading ? (
                  <motion.div
                    className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                  />
                ) : (
                  'Start Chat'
                )}
              </motion.button>
            </div>

            {/* Input hint */}
            <div className="text-xs text-gray-500 mt-3 text-center">
              Press Enter to send, Shift+Enter for new line
            </div>
          </div>
        </motion.div>
      </div>
    );
  }

  // Chat started - Show full interface
  return (
    <motion.div
      className={`max-w-4xl mx-auto ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Chat Messages Area */}
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: 'auto', opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="h-96 overflow-y-auto mb-4 px-4 space-y-2 bg-gray-900/20 rounded-lg border border-gray-700/50 backdrop-blur-sm"
      >
        <AnimatePresence>
          {messages.map(message => (
            <ChatMessage
              key={message.id}
              message={message}
              animate="slide"
              enableGlitch={true}
            />
          ))}
          {isLoading && <TypingIndicator mode={currentMode} />}
        </AnimatePresence>
        <div ref={messagesEndRef} />
      </motion.div>

      {/* Error Display */}
      {error && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-4 p-3 bg-red-900/20 border border-red-500/30 rounded-lg text-red-200 text-sm"
        >
          {error}
        </motion.div>
      )}

      {/* Input Area */}
      <div className="relative">
        <div className="flex gap-3">
          <motion.textarea
            ref={inputRef}
            value={inputValue}
            onChange={e => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder={placeholderText[currentMode]}
            className="flex-1 bg-gray-800 text-white px-4 py-3 rounded-lg border border-gray-600 focus:border-blue-500 transition-colors resize-none min-h-[60px] max-h-[120px]"
            disabled={isLoading}
            whileFocus={{
              scale: 1.02,
              transition: { duration: 0.2 },
            }}
          />

          <motion.button
            onClick={sendMessage}
            disabled={!inputValue.trim() || isLoading}
            className={`
              px-6 py-3 rounded-lg font-medium transition-all duration-300
              ${
                currentMode === 'roast'
                  ? 'bg-red-500 hover:bg-red-600 focus:ring-red-500'
                  : currentMode === 'calculator'
                    ? 'bg-green-500 hover:bg-green-600 focus:ring-green-500'
                    : 'bg-blue-500 hover:bg-blue-600 focus:ring-blue-500'
              }
              text-white disabled:opacity-50 disabled:cursor-not-allowed
              focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900
            `}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {isLoading ? (
              <motion.div
                className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                animate={{ rotate: 360 }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              />
            ) : (
              'Send'
            )}
          </motion.button>
        </div>

        {/* Input hint */}
        <div className="text-xs text-gray-500 mt-2">
          Press Enter to send, Shift+Enter for new line
        </div>
      </div>
    </motion.div>
  );
}
