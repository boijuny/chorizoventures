'use client';

import { motion } from 'framer-motion';
import { ChatMessage as ChatMessageType } from '@/types';
import { cn } from '@/lib/utils';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';

interface ChatMessageProps {
  message: ChatMessageType;
}

export default function ChatMessage({ message }: ChatMessageProps) {
  const isUser = message.role === 'user';

  return (
    <motion.div
      className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className={`max-w-[80%] ${isUser ? 'ml-12' : 'mr-12'}`}>
        <div
          className={cn(
            'p-4 rounded-xl text-sm',
            isUser
              ? {
                  'border': true,
                  'ml-auto': true,
                  'bg-mode-normal-12 text-mode-normal border-mode-normal-12': message.mode === 'normal',
                  'bg-mode-roast-12 text-mode-roast border-mode-roast-12': message.mode === 'roast',
                  'bg-mode-stonks-12 text-mode-stonks border-mode-stonks-12': message.mode === 'stonks',
                }
              : 'bg-transparent text-foreground'
          )}
        >
          <div className="prose dark:prose-invert prose-sm max-w-none">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeRaw]}
              components={{
                a: (props) => <a {...props} target="_blank" rel="noopener noreferrer" />
              }}
            >
              {message.content}
            </ReactMarkdown>
          </div>
        </div>
        <div className="text-xs text-muted-foreground mt-2 px-2">
          {new Date(message.timestamp).toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit',
          })}
        </div>
      </div>
    </motion.div>
  );
}
