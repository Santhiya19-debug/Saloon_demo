/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: '#D9531E',
          'orange-dark': '#B84214',
          'orange-light': '#E86734',
          ivory: '#FAF7F2',
          beige: '#F3EDE6',
          black: '#161514',
          charcoal: '#242220',
          peach: '#F9ECE4',
          gold: '#C5A059'
        }
      },
      fontFamily: {
        display: ['"Bebas Neue"', 'Oswald', 'sans-serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
        editorial: ['"Cinzel"', 'serif']
      },
      boxShadow: {
        'glow-orange': '0 0 25px rgba(217, 83, 30, 0.45)',
        'glow-orange-lg': '0 0 40px rgba(217, 83, 30, 0.65)',
        'scrolled-nav': '0 10px 30px -10px rgba(22, 21, 20, 0.08)'
      },
      animation: {
        'marquee': 'marquee 25s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      }
    },
  },
  plugins: [],
}
