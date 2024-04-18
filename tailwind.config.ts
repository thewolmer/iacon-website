/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['true'],
  content: ['./pages/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './app/**/*.{ts,tsx}', './src/**/*.{ts,tsx}'],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        border: '#3c3c3d',
        input: '#3c3c3d',
        ring: '#3c3c3d',
        background: '#18191b',
        foreground: '#fafafa',
        primary: {
          DEFAULT: '#c0c8c8',
          foreground: '#404a4a',
        },
        secondary: {
          DEFAULT: '#201d1e',
          foreground: '#a39598',
        },
        destructive: {
          DEFAULT: '#964e0c',
          foreground: '#f8f8f8',
        },
        muted: {
          DEFAULT: '#262626',
          foreground: '#a3a3a3',
        },
        accent: {
          DEFAULT: '#262626',
          foreground: '#fafafa',
        },
        popover: {
          DEFAULT: '#0a0a0b',
          foreground: '#f8f8f8',
        },
        card: {
          DEFAULT: '#242529',
          foreground: '#fafafa',
        },
      },

      fontFamily: {
        josefin: ['var(--font-josefin)'],
        playfair: ['var(--font-playfair)'],
        inter: ['var(--font-inter)'],
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      maxWidth: {
        '8xl': '88rem',
        '9xl': '96rem',
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
