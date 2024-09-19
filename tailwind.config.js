/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        a:'#E7CCCC',
        b:'#EDE8DC',
        c:'#538392',
        d:'#C1CFA1',
        lightgreen: '#90ee90', 
      },
    },
  },
  plugins: [],
}