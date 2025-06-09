'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChatMode, ChatMessage as ChatMessageType } from '@/types';
import { generateId } from '@/utils/helpers';
import ChatMessage from './ChatMessage';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { cn } from '@/lib/utils';

interface ChatInterfaceProps {
  currentMode: ChatMode;
  onModeChange: (mode: ChatMode) => void;
  className?: string;
}

const MODE_CONFIG = {
  roast: { label: 'roast' },
  stonk: { label: 'stonk' },
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

  const getWelcomeMessageParts = (mode: ChatMode): React.ReactNode[] => {
    const ModeSelectorInWelcome = (
      <Select
        value={mode}
        onValueChange={(newMode: ChatMode) => onModeChange(newMode)}
      >
        <SelectTrigger
          className={cn(
            'inline-flex items-center justify-center p-0 mx-2 h-auto font-semibold border-none bg-transparent shadow-none focus:ring-0 focus:ring-offset-0 transition-all duration-200 hover:brightness-125 outline-none focus:outline-none align-baseline text-4xl md:text-5xl',
            {
              'text-mode-roast': mode === 'roast',
              'text-mode-stonk': mode === 'stonk',
            }
          )}
          aria-label="Select chat mode in welcome message"
        >
          <SelectValue placeholder="Mode" />
        </SelectTrigger>
        <SelectContent className="min-w-[auto]">
          {(Object.keys(MODE_CONFIG) as ChatMode[]).map(m => (
            <SelectItem key={m} value={m} className="text-xs md:text-sm">
              {MODE_CONFIG[m].label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    );

    return ['Built to ', ModeSelectorInWelcome, ' your ideas'];
  };

  const getPlaceholderText = (mode: ChatMode): string => {
    switch (mode) {
      case 'roast':
        return 'Write your idea here and prepare for a brutal reality check...';
      case 'stonk':
        return 'Write your idea here and prepare for a wild ride...';
      default:
        return 'Send a message...';
    }
  };

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

    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setInputValue('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: userMessage.content,
          mode: currentMode,
          history: updatedMessages,
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

  const suggestionButtons = {
    roast: [
      'Tinder but for finding your evil twin',
      'App that turns your voice into Morgan Freeman',
      'Streaming service for watching paint dry',
    ],
    stonk: [
      'Instagram but everything is cake',
      'Uber for pigeons in tiny suits',
      'AI that only speaks in movie quotes',
    ],
  };

  const renderInputArea = () => (
    <div className={`flex flex-col gap-0.5 ${hasStartedChat ? '' : 'mb-6'}`}>
      <div className="flex-grow relative">
        <textarea
          ref={inputRef}
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder={getPlaceholderText(currentMode)}
          className={cn(
            'w-full p-4 pr-12 border rounded-xl resize-none min-h-[100px] text-base focus:outline-none focus:ring-1 transition-all duration-200 bg-secondary',
            {
              'border-mode-roast-12 focus:ring-mode-roast-60 focus:border-mode-roast-60':
                currentMode === 'roast',
              'border-mode-stonk-12 focus:ring-mode-stonk-60 focus:border-mode-stonk-60':
                currentMode === 'stonk',
            }
          )}
          disabled={isLoading}
        />
        <Button
          onClick={sendMessage}
          disabled={!inputValue.trim() || isLoading}
          className={cn(
            'absolute bottom-3 right-3 rounded-full w-8 h-8 p-0 transition-all duration-200',
            {
              'hover:bg-mode-roast-12 hover:text-mode-roast-60':
                currentMode === 'roast',
              'hover:bg-mode-stonk-12 hover:text-mode-stonk-60':
                currentMode === 'stonk',
            },
            inputValue.trim() && {
              'bg-mode-roast-12 text-mode-roast-60': currentMode === 'roast',
              'bg-mode-stonk-12 text-mode-stonk-60': currentMode === 'stonk',
            }
          )}
          variant="ghost"
          size="sm"
        >
          ↑
        </Button>
      </div>
    </div>
  );

  return (
    <div
      className={`w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}
    >
      {!hasStartedChat && (
        <div className="text-center mb-6">
          <h1 className="text-4xl md:text-5xl font-semibold mb-6 flex items-center justify-center">
            {getWelcomeMessageParts(currentMode).map((part, index) => (
              <span key={index}>{part}</span>
            ))}
          </h1>
          {renderInputArea()}
          <div className="flex flex-wrap gap-2 justify-center mt-6">
            {suggestionButtons[currentMode].map(
              (suggestion: string, index: number) => (
                <Button
                  key={index}
                  variant="minimal"
                  size="default"
                  className={cn(
                    'rounded-full border transition-all duration-200',
                    {
                      'border-mode-roast-12 hover:border-mode-roast-60 hover:bg-mode-roast-4 hover:text-mode-roast-60':
                        currentMode === 'roast',
                      'border-mode-stonk-12 hover:border-mode-stonk-60 hover:bg-mode-stonk-4 hover:text-mode-stonk-60':
                        currentMode === 'stonk',
                    }
                  )}
                  onClick={() => {
                    setInputValue(suggestion);
                    inputRef.current?.focus();
                  }}
                >
                  {suggestion}
                </Button>
              )
            )}
          </div>
        </div>
      )}

      {hasStartedChat && (
        <div className="mb-6 space-y-4 max-h-[60vh] overflow-y-auto">
          <AnimatePresence>
            {messages.map(message => (
              <ChatMessage key={message.id} message={message} />
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div
                  className={cn(
                    'bg-muted p-4 rounded-xl border transition-all duration-200',
                    {
                      'border-mode-roast-12': currentMode === 'roast',
                      'border-mode-stonk-12': currentMode === 'stonk',
                    }
                  )}
                >
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

      {hasStartedChat && renderInputArea()}
    </div>
  );
}
