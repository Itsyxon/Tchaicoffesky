import type { Config } from 'tailwindcss'

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        main: '#36291d',
        shadow: '#00000042',
      },
      fontFamily: {
        title: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config
