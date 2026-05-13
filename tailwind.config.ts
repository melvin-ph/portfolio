import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: '#0F172A',
          primary: '#64748B',
          secondary: '#F4F4F4',
          accent: '#22D3EE',
        },
      },
      boxShadow: {
        glow: '0 0 50px rgba(0, 217, 255, 0.15)',
      },
    },
  },
  plugins: [],
};

export default config;
