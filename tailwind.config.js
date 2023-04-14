/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",

  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './ui/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        'professor': ['professor', 'sans-serif'],
        'owners-wide': ['owners-wide', 'sans-serif'],
        'owners-xwide': ['owners-xwide', 'sans-serif'],
        'owners-xxwide': ['owners-xxwide', 'sans-serif'],

      },
    },
  },
  plugins: [],
}
