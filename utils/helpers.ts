import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

// Utility function to merge Tailwind classes
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Format time for timezone clocks
export function formatTime(timezone: string): string {
  return new Intl.DateTimeFormat('en-US', {
    timeZone: timezone,
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  }).format(new Date());
}

// Generate unique IDs for chat messages
export function generateId(): string {
  return Math.random().toString(36).substring(2) + Date.now().toString(36);
}

// Simulate random glitch effect (1% chance as per PRD)
export function shouldGlitch(chance: number = 5): boolean {
  return Math.random() * 100 < chance;
}

// Delay utility for animations
export function delay(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Format chat mode color classes
export function getModeColorClass(mode: string): string {
  switch (mode) {
    case 'roast':
      return 'border-accent-roast text-accent-roast';
    case 'calculator':
      return 'border-accent-calculator text-accent-calculator';
    case 'normal':
    default:
      return 'border-accent-primary text-accent-primary';
  }
}

// Validate environment variables
export function getEnvVar(name: string): string {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Environment variable ${name} is not set`);
  }
  return value;
}

// Local storage helpers for chat persistence
export function saveToLocalStorage(key: string, data: any): void {
  if (typeof window !== 'undefined') {
    localStorage.setItem(key, JSON.stringify(data));
  }
}

export function getFromLocalStorage<T>(key: string, defaultValue: T): T {
  if (typeof window !== 'undefined') {
    const stored = localStorage.getItem(key);
    if (stored) {
      try {
        return JSON.parse(stored);
      } catch {
        return defaultValue;
      }
    }
  }
  return defaultValue;
}
