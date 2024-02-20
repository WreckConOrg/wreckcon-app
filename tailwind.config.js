/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    screens: {
      'big' : '1480px'
    },
    extend: {
      screens: {
        '3xl' : '1650px',
        '4xl' : '2500px'
      },
      backgroundImage: {
        'tape': "url('./assets/tape.png')",
        'darktape': "url('./assets/dark.png')"
      },
      animation: {
        'diagonal': "diagonalmove 300s linear infinite alternate"
      },
      keyframes: {
        diagonalmove: {
          '0%': {transform: "translate(0, 0)"},
          '100%': {transform: "translate(150px, 150px"}
        }
      },
      fontFamily: {
        coolvetica: ["coolvetica", "sans-serif"],
        inter: ["inter", "sans-serif"],
        interbold: ["inter-bold", "sans-serif"]
      }
     },
    //  colors: {
    //   yellow : {
    //     DEFAULT: '#FFC42D',
    //   },
    //   gray : {
    //     DEFAULT :'#2e2f31',
    //   },
    //   white: colors.white,
    //   black: colors.black,
    //  }
  },
  plugins: [
    require('@headlessui/tailwindcss')({prefix: 'ui'})
  ],
}

