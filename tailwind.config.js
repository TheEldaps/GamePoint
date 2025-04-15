// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}', // Adjust to include all your files
  ],
  theme: {
    extend: {
      fontFamily: {
        swis: ['SWZ721KI', 'system-ui', 'Arial', 'sans-serif'], // Define custom font
      }
    }
  },
  plugins: [],
};

