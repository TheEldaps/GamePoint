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
        'swiss': ["Swiss721 Blk BT"], // Define custom font
      }
    }
  },
  plugins: [],
};

