/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      height:{
        '99': '95%'
      },
    backgroundImage:{
      'side-bar':"url('assets/images/bg-sidebar-desktop.svg')"
    }
    },
  },
  plugins: [],
}