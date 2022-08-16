/** @type {import('tailwindcss').Config} */ 
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}",],
    theme: {
      extend: {
        backgroundImage:{
            'pentagon':"url('./images/bg-pentagon.svg')",
            'rule':"url('./images/image-rules-bonus.svg')",

        }
      },
    },
    plugins: [],
  }

