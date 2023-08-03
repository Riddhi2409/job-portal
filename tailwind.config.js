/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'cloud': "url('https://d383au3bye3rv1.cloudfront.net/static/images/optimized/sky.jpg')",
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
      animation : {
        'marquee' : 'marquee 10s linear infinite',
        'marquee2': 'marquee2 10s linear infinite',
      },
      boxShadow: {
        '3xl': ' 5.6px 11.2px 11.2px hsl(0deg 0% 0% / 0.33)'
      }
    
    },
  },
  plugins: [],
}

