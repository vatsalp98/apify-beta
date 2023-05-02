/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      fontFamily: {
        sans: ['Exo', 'sans-serif'],
      },
      colors: {
        'primary': '#3f51b5',
        'dark': '#18191A',
        'light': "#FFFAFA",
        'darkText': "#e4e6eb",
      },
      screens: {
        "2xl": { max: "1535px"},
        xl : {max: "1279px"},
        lg: { max: "1023px"},
        md: {max: "767px"},
        sm: {max: "639px"},
        xs: {max: "479px"},
      }
    },
  },
  plugins: [],
}
