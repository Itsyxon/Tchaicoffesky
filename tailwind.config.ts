import type { Config } from 'tailwindcss'

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        ink: '#1E1512',
        paper: '#FFFFFF',
        marble: '#ECEDEA',
        crema: '#E7C79C',
        brass: '#96702A',
        leaf: '#2F5D4C',
        muted: '#6B625C',
        line: '#DFDEDA',
      },
      fontFamily: {
        display: ['var(--font-display)', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        page: '76rem',
        prose: '38rem',
      },
      keyframes: {
        'modal-in': {
          from: { opacity: '0', transform: 'translateY(12px) scale(0.99)' },
          to: { opacity: '1', transform: 'none' },
        },
        'overlay-in': {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
      },
      animation: {
        'modal-in': 'modal-in 0.22s cubic-bezier(0.2, 0.7, 0.2, 1)',
        'overlay-in': 'overlay-in 0.18s ease-out',
      },
    },
  },
  plugins: [],
} satisfies Config
