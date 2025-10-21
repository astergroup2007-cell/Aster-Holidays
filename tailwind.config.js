/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./{components,pages,context}/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#FFFBF5', // Warm Sand
        primary: '#FF6B35',    // sunset orange
        secondary: '#004E64',  // ocean blue
        accent: '#FFD369',     // warm yellow
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(-3deg)' },
          '50%': { transform: 'translateY(-25px) rotate(3deg)' },
        },
         floatReverse: {
          '0%, 100%': { transform: 'translateY(-15px) rotate(4deg)' },
          '50%': { transform: 'translateY(0px) rotate(-4deg)' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'float': 'float 8s ease-in-out infinite',
        'float-reverse': 'floatReverse 10s ease-in-out infinite',
        'slide-down': 'slideDown 0.5s ease-out forwards',
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
