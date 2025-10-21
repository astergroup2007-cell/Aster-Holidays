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
        primary: '#F97316',    // Marigold Orange (for CTAs)
        accent: '#4338CA',     // Deep Indigo (for links, highlights)
        secondary: '#1E293B',  // Charcoal (for text and footers)
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}