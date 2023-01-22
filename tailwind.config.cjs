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
      lg: "1024px"
    }, 
    extend: {
      colors: {
        primary: "#0F172A",
        secondary: "#7477FF",
        other: "#1E293B"
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        pacifico: ['Pacifico', 'cursive'],
        poppins: ['Poppins', 'sans-serif']
      },
      fontWeight: {
        n: "400",
        m: "500",
        vb: "700"
      },
      padding: {
        section_padding: "100px"
      }
    },
  },
  plugins: [],
}
