/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'brand-primary': '#8B4513', // dark brown
        'brand-secondary': '#F4F1ED', // warm gray
        'brand-cta': '#B8860B', // gold
        'brand-canvas': '#FEFCF9', // off-white
      },
    },
  },
  plugins: [],
};
