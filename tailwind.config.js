/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
       animation: {
      'float-slow': 'float 6s ease-in-out infinite',
      'fade-in-up': 'fadeInUp 1s ease-out forwards',
      'zoom-in': 'zoomIn 1s ease-out forwards',
    },
    keyframes: {
      float: {
        '0%, 100%': { transform: 'translateY(0px)' },
        '50%': { transform: 'translateY(-15px)' },
      },
      fadeInUp: {
        '0%': { opacity: 0, transform: 'translateY(20px)' },
        '100%': { opacity: 1, transform: 'translateY(0)' },
      },
      zoomIn: {
        '0%': { transform: 'scale(0.8)', opacity: 0 },
        '100%': { transform: 'scale(1)', opacity: 1 },
      },
    },
    },
  },
  plugins: [],
}

