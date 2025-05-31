// Chat related types from PRD specifications
export type ChatMode = 'normal' | 'roast' | 'calculator';

export interface ChatMessage {
  id: string;
  content: string;
  role: 'user' | 'assistant';
  mode: ChatMode;
  timestamp: Date;
}

export interface ChatState {
  messages: ChatMessage[];
  currentMode: ChatMode;
  isLoading: boolean;
  error: string | null;
}

// Component prop types from PRD
export interface TaglineProps {
  taglines?: string[];
  interval?: number;
  className?: string;
  rotationSpeed?: number;
  pauseOnHover?: boolean;
  enableGlitch?: boolean;
}

export interface ButtonProps {
  variant: 'primary' | 'secondary' | 'ghost' | 'chaos';
  liquid?: boolean; // Enables morphing animations
  glitch?: boolean; // Occasional chaos styling
  pulse?: boolean; // Subtle pulsing effect
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}

export interface MessageProps {
  message: ChatMessage;
  animate: 'slide' | 'fade' | 'liquid';
  enableGlitch?: boolean; // Random color pops
}

// Analytics event types from PRD
export interface AnalyticsEvent {
  chat_message_sent: { mode: ChatMode };
  mode_switched: { from: ChatMode; to: ChatMode };
  page_view: { path: string };
  error_occurred: { type: string; message: string };
}

// API types
export interface ChatRequest {
  message: string;
  mode: ChatMode;
  conversation_id: string;
}

export interface ChatResponse {
  response: string;
  mode: ChatMode;
  tokens_used?: number;
  conversation_id: string;
}

// Timezone clock types
export interface TimezoneData {
  timezone: string;
  city: string;
  time: string;
  offset: string;
}

// 3D element types for floating shapes
export interface FloatingShapeProps {
  type?: 'cube' | 'sphere' | 'pyramid';
  size?: 'sm' | 'md' | 'lg';
  color?: string;
  className?: string;
}

export interface MistralConfig {
  apiKey: string;
  model: string;
  temperature: number;
  maxTokens: number;
}

// Error types
export interface ApiError {
  error: string;
  details?: string;
  code?: number;
}
