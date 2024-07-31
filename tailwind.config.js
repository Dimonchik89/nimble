/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      padding: {
        sm: '1rem',
        md: '1rem',
        lg: '2rem',
        xl: '2rem'
      },
      center: true,
      screens: {
        sm: '400px',
        md: '800px',
        lg: '1088px',
        xl: '1344px'
      }
    }
  },
  plugins: []
};
