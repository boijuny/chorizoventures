// VC Taglines for rotating display (minimum 10 as per PRD)
export const VC_TAGLINES = [
  'Disrupting disruption™',
  'Deconstructing boxes since 2024',
  'Hunting decacorns daily',
  'Synergistic blockchain solutions™',
  'Scaling dreams, not businesses',
  'Innovation × Growth = Us',
  'AI-powered everything',
  'Your pitch deck deserves better',
  'Democratizing disruption',
  'Exit or die trying™',
  'We see unicorns everywhere',
  'From stealth to wealth',
  'Automating your FOMO',
  'Moving fast, breaking banks',
];

// Animation timing constants
export const ANIMATION_INTERVALS = {
  TAGLINE_ROTATION: 6000, // 6 seconds for better readability
  TAGLINE_TRANSITION: 800, // 800ms smooth transition
  FLOATING_ELEMENTS: 6000, // 6 seconds float cycle
  GLITCH_FREQUENCY: 100, // 1% chance as per PRD
} as const;

// Timezone data for clocks
export const TIMEZONE_DATA = [
  { city: 'SF', timezone: 'America/Los_Angeles' },
  { city: 'NYC', timezone: 'America/New_York' },
  { city: 'PARIS', timezone: 'Europe/Paris' },
] as const;

// Chat mode configurations
export const CHAT_MODES = {
  normal: {
    label: 'Normal',
    color: 'accent-primary',
    description: 'Standard VC wisdom',
  },
  roast: {
    label: 'Roast',
    color: 'accent-roast',
    description: 'Brutal honesty mode',
  },
  calculator: {
    label: 'Calculator',
    color: 'accent-calculator',
    description: 'Financial analysis',
  },
} as const;

// OpenAI design system constants
export const OPENAI_DESIGN = {
  BUTTON: {
    HEIGHT: '40px', // Standard OpenAI button height
    PADDING: 'px-3', // Standard OpenAI horizontal padding
    BORDER_RADIUS: 'rounded-full', // Pill-shaped buttons
    TEXT_SIZE: 'text-sm',
    GAP: 'gap-1.5',
  },
  INPUT: {
    BORDER_RADIUS: 'rounded-xl', // Large rounded corners for inputs
    PADDING: 'px-4 py-3',
    TEXT_SIZE: 'text-sm',
  },
  MESSAGE_BUBBLE: {
    BORDER_RADIUS: 'rounded-xl', // Rounded message bubbles
    PADDING: 'p-4',
  },
  COLORS: {
    PRIMARY_HOVER: 'hover:bg-primary-4', // OpenAI's 4% opacity hover
    PRIMARY_BORDER: 'border-primary-12', // OpenAI's 12% opacity border
    PRIMARY_TEXT: 'text-primary-60', // OpenAI's 60% opacity text
  },
} as const;

// Performance constants from PRD
export const PERFORMANCE_TARGETS = {
  INITIAL_LOAD: 2000, // 2 seconds
  TIME_TO_INTERACTIVE: 3000, // 3 seconds
  API_RESPONSE: 1000, // 1 second
  LIGHTHOUSE_SCORE: 90,
} as const;

// Rate limiting constants
export const RATE_LIMITS = {
  REQUESTS_PER_MINUTE: 10,
  REQUESTS_PER_HOUR: 100,
} as const;
