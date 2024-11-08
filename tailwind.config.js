/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        slide: 'scroll 5s linear infinite', // Existing slide animation
        float: 'float 2s ease-in-out infinite', // Existing float animation
        'float-delayed': 'float 2s ease-in-out 0.5s infinite', // Existing delayed float animation
        'spin-slow': 'spin 3s linear infinite', // Existing slow spin animation
        'slow-scroll': 'slowScroll 20s linear infinite', // New slow scroll animation
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-100%)' },
        },
        slowScroll: { // Updated keyframe for continuous scroll from top
          '0%': { transform: 'translateY(0)' }, // Start at the top
          '100%': { transform: 'translateY(-100%)' }, // Scroll upwards
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};