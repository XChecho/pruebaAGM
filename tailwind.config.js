module.exports = {
    content: [
      "./public/index.html", "./src/**/*.{html,jsx}",
    ],
    darkMode: 'false', // or 'media' or 'class'
    theme: {
      extend: {
        width :{
          "70":"280px",
          "100": "400px",
        },
        heigth: {
          "100": "400px",
        },
        colors:{
          offback: '#E5E5E5',
          primary :'#D6E7FF',
          second: '#0066ff',
          third: '#fcdcdc',
          fourth: '#b0d0ff',
          fourthLight: '#4d94ff',
        },
        textColor:{
          primary: '#07074D',
          secondary: '#0066ff',
          third: '#f9b6b6',
          fourth: 'rgba(16,18,28,.7)',
        }
      },
    },
    variants: {
      width:["responsive", "hover", "focus"],
      extend: {
      },
    },
    plugins: [
      require('tailwind-scrollbar-hide'),
    ],
}