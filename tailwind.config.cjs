/** @type {import('tailwindcss').Config} */
module.exports = {
   mode: "JIT",
   content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ], 
  theme: {
    screens: {
      md: '768px',
      lg: "1024px",
      xl: "1440px"
    }, 
    extend: {
      colors: {
        primary: "#0F172A",
        secondary: "#7477FF",
        other: "#1E293B"
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        lobster: ['Lobster', 'cursive'],
        poppins: ['Poppins', 'sans-serif'],
        satisfy: ['Satisfy', 'cursive']
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
