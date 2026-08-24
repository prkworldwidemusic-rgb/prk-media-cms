export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          950: '#07111f',
          900: '#091625',
          800: '#0c1b2c',
          700: '#12243a',
          600: '#1c2d43',
          500: '#20344d',
          400: '#24384f',
          300: '#2a4161',
          200: '#3a5578',
          100: '#5a7a9e',
        },
        blue: {
          primary: '#147df5',
          light: '#2895ff',
          dark: '#1262d5',
        },
        status: {
          success: '#22c77a',
          error: '#ff4d5d',
          warning: '#f5bd42',
          info: '#2895ff',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
