// VC Taglines for rotating display (minimum 10 as per PRD)
export const VC_TAGLINES = [
  'Disrupting disruption since never',
  "We're not just thinking outside the box, we're deconstructing the box",
  "Unicorns are so last decade, we're hunting decacorns",
  'Making the world a better place through synergistic blockchain solutions',
  "We don't just scale businesses, we scale dreams",
  'Where innovation meets exponential growth trajectory',
  'Transforming paradigms with AI-powered vertical integrations',
  'Building the future, one pitch deck at a time',
  'Democratizing access to disruptive market inefficiencies',
  'Your next billion-dollar exit starts here',
  "We see what others can't: the next big thing",
  'From stealth mode to unicorn status in 18 months',
  'Making money while we sleep through automated disruption',
  "We don't invest in companies, we invest in movements",
];

// Animation timing constants
export const ANIMATION_INTERVALS = {
  TAGLINE_ROTATION: 4000, // 4 seconds as per PRD
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
