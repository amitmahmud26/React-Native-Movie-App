/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: '#030014',
        secondary: '#151312',
        accent: '#AB8BFF',
        light: {
          100: '#1E1E1E',
          200: '#1C1C1C',
          300: '#1A1A1A',
        },
        dark: {
          100: '221f3d',
          200: '0f0d23',
        }
      }
    },
  },
  plugins: [],
};
