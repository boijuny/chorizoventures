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
export interface ChatApiRequest {
  message: string;
  mode: ChatMode;
  conversation_id?: string;
}

export interface ChatApiResponse {
  response: string;
  conversation_id: string;
  mode: ChatMode;
}

// Timezone clock types
export interface TimezoneData {
  city: string;
  timezone: string;
  time: string;
}

// 3D element types for floating shapes
export interface FloatingShapeProps {
  type: 'cube' | 'sphere' | 'pyramid';
  size: 'small' | 'medium' | 'large';
  position: { x: number; y: number; z: number };
  rotationSpeed?: number;
  glitchChance?: number;
}
