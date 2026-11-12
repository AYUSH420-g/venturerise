/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#1554B8',
          blueHover: '#104396',
          paleBlue: '#EAF1FC',
          navy: '#14243B',
          body: '#526175',
          offwhite: '#F7F4EC',
          white: '#FFFFFF',
          border: '#E3DFD5',
          borderLight: '#EDE9E0',
        },
        sapphire: {
          50: '#EAF1FC',
          100: '#EAF1FC',
          200: '#D5E4F9',
          300: '#ABC7F4',
          400: '#6496E8',
          500: '#2A6FDC',
          600: '#1554B8', /* Primary blue */
          700: '#104396',
          800: '#0C3374',
          900: '#14243B', /* Dark navy */
          950: '#0A1524'
        },
        offwhite: {
          50: '#FFFFFF',
          100: '#FCFAF6',
          200: '#F7F4EC', /* Primary off-white */
          300: '#EFECE2',
          400: '#E3DFD5',
          500: '#D5D0C4',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif']
      }
    },
  },
  plugins: [],
}
