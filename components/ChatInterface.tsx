'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChatMode, ChatMessage as ChatMessageType } from '@/types';
import { generateId } from '@/utils/helpers';
import ChatMessage from './ChatMessage';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { cn } from '@/lib/utils';

interface ChatInterfaceProps {
  currentMode: ChatMode;
  onModeChange: (mode: ChatMode) => void;
  className?: string;
}

const MODE_CONFIG = {
  roast: { label: 'Roast' },
  stonks: { label: 'Stonks' },
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

  const getWelcomeMessage = (mode: ChatMode): React.ReactNode => {
    const commonClasses = "font-bold cursor-pointer transition-all duration-200 hover:brightness-125";
    const roastSpan = (
      <span
        className={`${commonClasses} text-mode-roast`}
        onClick={() => onModeChange('roast')}
      >
        roast
      </span>
    );
    const stonksSpan = (
      <span
        className={`${commonClasses} text-mode-stonks`}
        onClick={() => onModeChange('stonks')}
      >
        stonks
      </span>
    );

    switch (mode) {
      case 'roast':
        return <>Built to {roastSpan} your idea</>;
      case 'stonks':
        return <>Built to {stonksSpan} your idea</>;
      default:
        return "Ready for some spicy advice?";
    }
  };

  const getPlaceholderText = (mode: ChatMode): string => {
    switch (mode) {
      case 'roast':
        return 'Prepare for a brutal reality check...';
      case 'stonks':
        return 'Even dumb ideas can be worth billions...';
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

  const suggestionButtons = {
    roast: [
      'Blockchain-powered socks that mine crypto while you walk',
      'Dating app that matches people based on their browser history',
      'AI therapist for plants with imposter syndrome'
    ],
    stonks: [
      'NFTs of your future regrets (pre-mint discount)',
      'Uber for introverts - drivers promise not to talk',
      'Web5 protocol for transmitting dreams to the cloud (raising $80M seed)'
    ],
  };

  const renderInputArea = () => (
    <div className={`flex flex-col gap-0.5 ${hasStartedChat ? '' : 'mb-6'}`}>
      <div className="self-start">
        <Select value={currentMode} onValueChange={(value: ChatMode) => onModeChange(value)}>
          <SelectTrigger
            className={cn(
              "h-auto p-1 rounded-md",
              "bg-transparent border-none",
              "text-xs font-medium",
              {
                'text-mode-roast-60 hover:text-mode-roast': currentMode === 'roast',
                'text-mode-stonks-60 hover:text-mode-stonks': currentMode === 'stonks',
              },
              "focus:ring-1 focus:ring-ring ring-offset-background focus:outline-none data-[state=open]:bg-accent/5"
            )}
            aria-label="Select chat mode"
          >
            <SelectValue placeholder="Mode" />
          </SelectTrigger>
          <SelectContent>
            {(Object.keys(MODE_CONFIG) as ChatMode[]).map((mode) => (
              <SelectItem key={mode} value={mode} className="text-xs">
                {MODE_CONFIG[mode].label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

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
              'border-mode-stonks-12 focus:ring-mode-stonks-60 focus:border-mode-stonks-60':
                currentMode === 'stonks',
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
              'hover:bg-mode-stonks-12 hover:text-mode-stonks-60':
                currentMode === 'stonks',
            },
            inputValue.trim() && {
              'bg-mode-roast-12 text-mode-roast-60': currentMode === 'roast',
              'bg-mode-stonks-12 text-mode-stonks-60': currentMode === 'stonks',
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
    <div className={`w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
      {!hasStartedChat && (
        <div className="text-center mb-6">
          <h1 className="text-4xl font-semibold mb-6">{getWelcomeMessage(currentMode)}</h1>
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
                      'border-mode-stonks-12 hover:border-mode-stonks-60 hover:bg-mode-stonks-4 hover:text-mode-stonks-60':
                        currentMode === 'stonks',
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
                      'border-mode-stonks-12': currentMode === 'stonks',
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
