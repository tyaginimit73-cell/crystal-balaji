/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        forest: { DEFAULT:'#0f2a1d', light:'#163d2b', 800:'#0b1f14' },
        gold: { DEFAULT:'#c9a86a', dark:'#a88a4a', light:'#e8d5b5' },
        charcoal: '#1a1f1c',
        offwhite: '#faf8f5',
        steel: '#6b7780',
        cream: '#f5f1e8'
      },
      fontFamily: {
        display: ['"Instrument Serif"', 'serif'],
        sans: ['Inter','system-ui','sans-serif'],
        mono: ['JetBrains Mono','monospace']
      },
      letterSpacing: { tightest: '-0.05em' }
    }
  },
  plugins: [],
}
