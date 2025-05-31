'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChatMode, ChatMessage as ChatMessageType } from '@/types';
import { generateId } from '@/utils/helpers';
import ChatMessage from './ChatMessage';
import TypingIndicator from './TypingIndicator';
import { ModeCorner } from './corners';

interface ChatInterfaceProps {
  currentMode: ChatMode;
  onModeChange: (mode: ChatMode) => void;
  className?: string;
}

export default function ChatInterface({
  currentMode,
  onModeChange,
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
      title: 'Ready to disrupt?',
    },
    roast: {
      title: 'Prepare for brutal honesty',
    },
    calculator: {
      title: "Let's crunch some numbers",
    },
  };

  return (
    <div className={`w-full ${className}`}>
      {/* Persistent Mode Selector - Always visible */}
      <div className="flex justify-center mb-8">
        <ModeCorner
          currentMode={currentMode}
          onModeChange={onModeChange}
          className="relative"
        />
      </div>

      {!hasStartedChat ? (
        // Initial state - Just Input (no title)
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="flex flex-col items-center justify-center text-center"
        >
          {/* Large Input Area */}
          <div className="w-full max-w-2xl">
            <div className="relative">
              <motion.textarea
                ref={inputRef}
                value={inputValue}
                onChange={e => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder={placeholderText[currentMode]}
                className="w-full bg-secondary/50 text-foreground px-6 py-5 rounded-xl border border-border focus:border-ring transition-all duration-300 resize-none min-h-[100px] text-lg backdrop-blur-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
                disabled={isLoading}
                whileFocus={{
                  scale: 1.01,
                  transition: { duration: 0.2 },
                }}
              />

              {/* Send Button */}
              <motion.button
                onClick={sendMessage}
                disabled={!inputValue.trim() || isLoading}
                className="absolute bottom-3 right-3 bg-primary text-primary-foreground px-3 py-1.5 rounded-lg text-sm disabled:opacity-50 disabled:cursor-not-allowed hover:bg-primary/90 transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isLoading ? '...' : 'Send'}
              </motion.button>
            </div>

            {/* Mode indicator */}
            <div className="mt-4 text-center">
              <span className="text-xs text-muted-foreground">
                Mode:{' '}
                <span className="capitalize font-medium text-foreground">
                  {currentMode}
                </span>
              </span>
            </div>
          </div>
        </motion.div>
      ) : (
        // Chat started - Messages + Input with consistent styling
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full"
        >
          {/* Chat Messages Area */}
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="h-96 overflow-y-auto mb-6 px-4 space-y-3 bg-secondary/20 rounded-xl border border-border/30 backdrop-blur-sm"
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
              className="mb-4 p-3 bg-destructive/20 border border-destructive/30 rounded-xl text-destructive-foreground text-sm"
            >
              {error}
            </motion.div>
          )}

          {/* Input Area - Consistent with welcome state */}
          <div className="w-full max-w-2xl mx-auto">
            <div className="relative">
              <motion.textarea
                ref={inputRef}
                value={inputValue}
                onChange={e => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder={placeholderText[currentMode]}
                className="w-full bg-secondary/50 text-foreground px-6 py-5 rounded-xl border border-border focus:border-ring transition-all duration-300 resize-none min-h-[100px] text-lg backdrop-blur-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
                disabled={isLoading}
                whileFocus={{
                  scale: 1.01,
                  transition: { duration: 0.2 },
                }}
              />

              {/* Send Button */}
              <motion.button
                onClick={sendMessage}
                disabled={!inputValue.trim() || isLoading}
                className="absolute bottom-3 right-3 bg-primary text-primary-foreground px-3 py-1.5 rounded-lg text-sm disabled:opacity-50 disabled:cursor-not-allowed hover:bg-primary/90 transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isLoading ? (
                  <motion.div
                    className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full"
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
            <div className="text-xs text-muted-foreground mt-4 text-center">
              Press Enter to send, Shift+Enter for new line
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}
