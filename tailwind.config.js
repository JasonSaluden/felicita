/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        base : ['LabilGrotesk-Medium', 'sans-serif'],
        baseRegular : ['LabilGrotesk-Regular', 'sans-serif'],
        baskerville : ['Baskerville', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
