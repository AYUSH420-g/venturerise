/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sapphire: {
          50: '#F0F6FB',
          100: '#E1EEF8',
          200: '#C2DCF1',
          300: '#95C2E6',
          400: '#4A98D3',
          500: '#1A79C2',
          600: '#005A9C', /* Target requested color */
          700: '#004A82',
          800: '#003D6B',
          900: '#002F54',
          950: '#001A30'
        },
        offwhite: {
          50: '#FFFFFF',
          100: '#FBFBFC',
          200: '#F8F9FA',
          300: '#F1F3F5',
          400: '#E9ECEF',
          500: '#DEE2E6',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif']
      }
    },
  },
  plugins: [],
}
