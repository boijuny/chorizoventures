'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChatMode, ChatMessage as ChatMessageType } from '@/types';
import { generateId } from '@/utils/helpers';
import ChatMessage from './ChatMessage';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface ChatInterfaceProps {
  currentMode: ChatMode;
  onModeChange: (mode: ChatMode) => void;
  className?: string;
}

const MODE_CONFIG = {
  normal: { label: 'Normal' },
  roast: { label: 'Roast' },
  calculator: { label: 'Calculator' },
} as const;

export default function ChatInterface({
  currentMode,
  onModeChange,
  className = '',
}: ChatInterfaceProps) {
  const [messages, setMessages] = useState<ChatMessageType[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [hasStartedChat, setHasStartedChat] = useState(false);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const sendMessage = async () => {
    if (!inputValue.trim() || isLoading) return;

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

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: userMessage.content,
          mode: currentMode,
          conversation_id: `chat-${Date.now()}`,
        }),
      });

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
      console.error('Chat error:', err);
    } finally {
      setIsLoading(false);
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

  return (
    <div className={`w-full max-w-3xl mx-auto ${className}`}>
      {/* Mode Selector */}
      <div className="flex justify-center mb-8">
        <Tabs
          value={currentMode}
          onValueChange={value => onModeChange(value as ChatMode)}
        >
          <TabsList>
            {(Object.keys(MODE_CONFIG) as ChatMode[]).map(mode => (
              <TabsTrigger key={mode} value={mode}>
                {MODE_CONFIG[mode].label}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      </div>

      {/* Messages */}
      {hasStartedChat && (
        <div className="mb-6 space-y-4 max-h-96 overflow-y-auto">
          <AnimatePresence>
            {messages.map(message => (
              <ChatMessage key={message.id} message={message} />
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-muted p-3 rounded-sm">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-current rounded-full animate-bounce" />
                    <div
                      className="w-2 h-2 bg-current rounded-full animate-bounce"
                      style={{ animationDelay: '0.1s' }}
                    />
                    <div
                      className="w-2 h-2 bg-current rounded-full animate-bounce"
                      style={{ animationDelay: '0.2s' }}
                    />
                  </div>
                </div>
              </div>
            )}
          </AnimatePresence>
        </div>
      )}

      {/* Input Area */}
      <div className="relative">
        <textarea
          ref={inputRef}
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder={placeholderText[currentMode]}
          className="w-full p-4 border rounded-sm resize-none min-h-[100px] text-base focus:outline-none focus:ring-1 focus:ring-ring"
          disabled={isLoading}
        />
        <Button
          onClick={sendMessage}
          disabled={!inputValue.trim() || isLoading}
          className="absolute bottom-3 right-3"
          size="sm"
        >
          Send
        </Button>
      </div>

      {/* Mode indicator */}
      <div className="mt-2 text-center">
        <span className="text-xs text-muted-foreground">
          Mode: <span className="capitalize">{currentMode}</span>
        </span>
      </div>
    </div>
  );
}
