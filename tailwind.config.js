/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary-green':'#014E56',
        'primary-coral':"#F67E7E",
        'secondary-dark-green':'#002529',
        'secondary-jungle-green':'#004047',
        'secondary-sacramento-green':'#012F34',
        'secondary-police-blue':'#2C6269',
        'secondary-rapture-blue':'#79C8C7'
      },
      fontFamily: {
        livvic: ["Livvic", "sans-serif"],
      },
      backgroundImage: {
        'hero-home': "url('/bg/bg-pattern-home-2.svg')",
      }
    },
  },
  plugins: [],
}