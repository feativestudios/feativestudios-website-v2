/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
       'bitterSweet':'#E11E30',
       'lightWhite':'#F2F2F2',
       'darkLiver':'#C5C5C5'
      },
      boxShadow: {
        custom: "0px 0px 30px 0px rgba(236,37,85,1)"

      },
       dropShadow: {
        '3xl': '0 35px 35px rgba(0, 0, 0, 1.25)',
        '4xl': [
            '0 35px 35px rgba(0, 0, 0, 0.25)',
            '0 45px 65px rgba(0, 0, 0, 0.15)'
        ]
      }
      
    },
  },
  plugins: [],
};
