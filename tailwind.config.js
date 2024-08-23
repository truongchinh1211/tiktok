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
      fontFamily: {
        // Cập nhật font mặc định
        TikTokFont: ['TikTokFont', 'Arial',' Tahoma',' PingFangSC', 'sans-serif'], // Ví dụ với font sans
       
      },
      maxHeight: {
        'SearchdropDownMenu': 'calc(min(-156px + 100vh, 734px))',
      },
    },
  },
  plugins: [],
}

