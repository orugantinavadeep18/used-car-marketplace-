/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}" ],
  theme: {
    extend: {
         animation: {
             'slide-down': 'slide-down 0.3s ease-out',
             },
           keyframes: {
            'slide-down': {
            '0%': { transform: 'translateY(-10%)', opacity: '0' },
            '100%': { transform: 'translateY(0)', opacity: '1' },
             },
              },
        colors:{
            primary: "#FF7A00",
            secondray: "#2E2E2E",
        }
        
    },
  },
  plugins: [],
}

