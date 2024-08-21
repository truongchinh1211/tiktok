/** @type {import('tailwindcss').Config} */
export default {
  content: [ 
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: '#000',
        light: '#ffed4a',
        danger: '#e3342f',
        // Thêm các màu khác
      },
    },
  },
  plugins: [],
}

