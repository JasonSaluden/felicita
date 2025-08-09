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
      colors: {
        ff: {
          bg1: 'var(--ff-bg1)',
          bg2: 'var(--ff-bg2)',
          text: 'var(--ff-text)',
          navy: 'var(--ff-navy)',
          mint: 'var(--ff-mint)',
          accent: 'var(--ff-accent)',
          border: 'var(--ff-border)',
        }
      }
    },
  },
  plugins: [],
}
