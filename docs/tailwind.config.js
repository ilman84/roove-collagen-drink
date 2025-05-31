/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html', // jika file HTML utama
    './src/**/*.{js,jsx,ts,tsx}', // jika pakai React atau proyek berbasis JS/TS
    './**/*.html', // scan semua file HTML
  ],
  theme: {
    extend: {
      colors: {
        roove: '#82429b',
        roove2: '#282165', // warna ungu brand Roove
        shopee: '#f1582c', // orange khas Shopee
        softpink: '#fce4ec',
        lightpurple: '#f3e8ff',
        softgray: '#f9fafb',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'], // jika ingin pakai font elegan
      },
      backgroundImage: {
        'roove-bg': "url('/mnt/data/Roove2.jpg')", // contoh untuk background image
      },
    },
  },
  plugins: [],
};
