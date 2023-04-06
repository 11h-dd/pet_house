/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        "Animal-patten":"url('../../assets/images/Animal3.webp')",
        "dog-patten":"url('../../assets/images/dog1.jpg')"
      }
    },

  },
  plugins: [],
}