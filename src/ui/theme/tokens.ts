export const colors = {
  bg: '#0a0a0f',
  bgLight: '#12121a',
  bgCard: 'rgba(18, 18, 26, 0.85)',
  text: '#e0e0e0',
  textDim: '#888899',
  neonGreen: '#00ff41',
  neonCyan: '#00f0ff',
  neonMagenta: '#ff00aa',
  neonYellow: '#ffe600',
  neonRed: '#ff3333',
  xpGreen: '#00ff41',
  xpBg: '#1a1a2e',
  codeBg: 'rgba(0, 240, 255, 0.05)',
  codeBorder: '#00f0ff',
} as const;

export const fonts = {
  pixel: "'Press Start 2P', monospace",
  mono: "'Fira Code', 'Consolas', monospace",
  body: "'Inter', 'Segoe UI', sans-serif",
} as const;

export const spacing = {
  xs: '0.25rem',
  sm: '0.5rem',
  md: '1rem',
  lg: '2rem',
  xl: '4rem',
  xxl: '8rem',
} as const;

export const breakpoints = {
  tablet: '768px',
  desktop: '1024px',
  projector: '1280px',
  wide: '1440px',
} as const;

export const TOTAL_LEVELS = 8;
