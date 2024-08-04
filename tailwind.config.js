/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: 
      
      { LimeGreen: 'hsl(163, 72%, 41%)',
        BrightRed: 'hsl(356, 69%, 56%)',
        
        //SOCIAL MEDIA COLORS//

        Facebook: 'hsl(208, 92%, 53%)',
        Twitter: 'hsl(203, 89%, 53%)',
        YouTube: 'hsl(348, 97%, 39%)',
        Toggle: 'hsl(230, 22%, 74%)',
      

        //DARK//
        VeryDarkBlue: 'hsl(230, 17%, 14%)',
        VeryDarkBlue: 'hsl(232, 19%, 15%)',
        DarkDesaturatedBlue: 'hsl(228, 28%, 20%)',
        DesaturatedBlue: 'hsl(228, 34%, 66%)',
        White: 'hsl(0, 0%, 100%)',

        //LIGHT//

        White: 'hsl(0, 0%, 100%)',
        VeryPaleBlue: 'hsl(225, 100%, 98%)',
        LightGrayishBlue : 'hsl(227, 47%, 96%)',
        DarkGrayishBlue: 'hsl(228, 12%, 44%)',
        VeryDarkBlue: 'hsl(230, 17%, 14%)',


       } ,
               //GRADIENT//

      backgroundImage: {


        Instagram: 'linear-gradient(to right, hsl(37, 97%, 70%),  hsl(329, 70%, 58%))',

        ToggleGradient: 'linear-gradient(to right, hsl(210, 78%, 56%),  hsl(146, 68%, 55%))',
      },

      fontFamily: {
        Inter: ['Intern']
      },
    },
  },
  plugins: [],
}

