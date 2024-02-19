/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: '16px',

  },
    extend: {
      colors : {
        oren : '#f59e0b',
        hitam : '#020617',
  },
  screen : {
    '2xl' :'1320px',
  },
 
    keyframes: {
      typing: {
        "0%": {
          width: "0%",
          visibility: "hidden"
        },
        "100%": {
          width: "100%"
        }
      },
      blink: {
        "50%": {
          borderColor: "transparent"
        },
        "100%": {
          borderColor: "black"
        }
      }
    },
    animation: {
      typing: "typing 2.5s steps(50) infinite alternate, blink .10s infinite"
    }
  },
},
  plugins: [],
};

