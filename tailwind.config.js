/** @type {import('tailwindcss').Config} */
export default {
  content: [
   "./src/**/*.{js,jsx,ts,tsx}",
    './Components/**/*.{js,ts,jsx,tsx,mdx}',
    './Pages/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
    fontFamily : { 
      'Montserrat':'Montserrat',
      'Poppins' :'Poppins'
    },
    colors : {
      white : '#FFFFFF',
      lightorange : '#FA4A0C',

    },
    fontSize : {
           'xsm':'1rem ',
           'sm' : '1.5rem',
           'md' : '2.25',
           'lg' : '3.5rem'
    }
    
  },
  plugins: [],
}