﻿﻿﻿/** @type {import('tailwindcss').Config} */

export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        background: 'rgb(var(--bg) / <alpha-value>)',
        surface: 'rgb(var(--surface) / <alpha-value>)',
        text: 'rgb(var(--text) / <alpha-value>)',
        muted: 'rgb(var(--muted) / <alpha-value>)',
        brand: {
          100: '#f1e5ff',
          200: '#ddb8ff',
          300: '#c38cff',
          400: '#ad65ff',
          500: '#9d4edd',
        },
        accent: {
          200: '#ffc09d',
          300: '#ffa06f',
          400: '#ff8a4c',
          500: '#f97316',
        },
      },
      fontFamily: {
        body: ['IBM Plex Sans', 'sans-serif'],
        display: ['Chakra Petch', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 30px rgba(157, 78, 221, 0.35)',
      },
    },
  },
  plugins: [],
}
