/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'Vermillion':'#E34234',
        'LightGreen':'#e9f5db',
      },
      fontFamily:{
        'Poppins':['Poppins'],
        'Sacramento':['Sacramento']
      },
      backgroundImage:{
        'bgBanner':"url('/public/hero_Banner.svg')",
      },
      keyframes: {
        'move': {
          '0%': {
            transform: 'translateX(100vw)',
          },
          '100%': {
            transform: 'translateX(-100vw)',
          },
        },
      },
      animation: {
        'Move': 'move 10s linear infinite',
        'Move-md': 'move 30s linear infinite',
      },
    },
  },
  plugins: [],
}
