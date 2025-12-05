/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        // Light mode colors
        light: {
          bg: '#FAFAFA',
          surface: '#FFFFFF',
          text: '#1A1A1A',
          textSecondary: '#6B6B6B',
          accent: '#4A4A4A',
          border: '#E5E5E5',
        },
        // Dark mode colors
        dark: {
          bg: '#0A0A0A',
          surface: '#151515',
          text: '#F5F5F5',
          textSecondary: '#A0A0A0',
          accent: '#B0B0B0',
          border: '#2A2A2A',
        },
      },
      transitionDuration: {
        DEFAULT: '300ms',
      },
    },
  },
  plugins: [],
}

