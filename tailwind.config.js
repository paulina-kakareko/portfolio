/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: { colors: {
      'bg': '#020916',
      'accent': {DEFAULT: '#F1B4BB', 500: '#e7848f'},
      'lightGray': "#1F2937",
      'lighterGray': '#9CA3AF'
    },
    fontFamily: {
      'dmsans': ['DM Sans', 'sans-serif']
    },
    maxWidth: {
      'wtf': '82rem'
    },
    boxShadow: {
      'innerlight': 'inset 0 2px 0 0 rgba(255,255,255,0.15)',
      'innerlightmini': 'inset 0 1px 0 0 rgba(255,255,255,0.15)'
    }
  },
  },
  plugins: [],
}

