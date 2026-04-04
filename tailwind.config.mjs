// tailwind.config.mjs
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"DM Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['"Cormorant Garamond"', 'ui-serif', 'Georgia', 'serif'],
      },
      colors: {
        cream:      '#F7F4EF',
        sand:       '#EDE8DF',
        sage:       '#6B8F6E',
        'sage-deep': '#4A6B50',
        'sage-light': '#B8CDBA',
        earth:      '#8B7355',
        ink:        '#2C2A25',
        'ink-muted': '#7A7568',
        border:     '#DDD8CF',
      },
    },
  },
  plugins: [],
};
