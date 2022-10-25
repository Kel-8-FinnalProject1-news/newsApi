/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx, css}"],
  theme: {
    screens:{
      "nol" : "0px",
      "mobile" : "360px",
      "miniTablet": "412px",
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1440px'
    },
    extend: {
      colors:{
        "primaryButton" : "#F15C60",
        "inputColorPrimary": "#EDEDED",
        "wrapper-Input": "#DCDCDC",
        'body' : "#E5E5E5",
        'text-abu-abu' : "#7D7D7D"
      },
      fontFamily:{
        "primary" : 'Poppins',
      }
    },
  },
  plugins: [],
}