/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0A1F4B', // Dark blue for sidebar and header
        secondary: '#F4F4F4', // Light background for main content
        accent: '#1A73E8', // Accent color for buttons or links
        textPrimary: '#232323', // Primary text color
        textSecondary: '#7A7D84', // Secondary text color
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Use Inter as the default font
      },
      screens: {
        'xs': '475px', // Custom screen size for small devices
      },
    },
  },
  plugins: [],
}
