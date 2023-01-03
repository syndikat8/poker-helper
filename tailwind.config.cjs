/** @type {import('tailwindcss').Config} */

const colors = {
  transparent: 'transparent',
  current: 'currentColor',
  'white': '#ffffff',
  'black': {
    '400': '#1a1a1a',
    DEFAULT: '#000000'
  },
}

module.exports = {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{vue, js}'
  ],
  theme: {
    colors: colors,
    textColor: colors,
    fill: colors,
    borderColor: colors,
    fontFamily: {
      sans: ['Fira Sans'],
    },
    extend: {
      fontSize: {
        '2.5': '0.625rem',
        '3': '0.75rem',
        '3.25': '0.813rem',
        '3.5': '0.875rem',
        '4.5': '1.125rem',
        '6.5': '1.625rem',
        '11.5': '2.875rem',
      },
    },
  },
  variants: {
    extend: {
      borderColor: ['hover', 'focus', 'dark', 'group-focus', 'focus-within'],
      fill: ['hover', 'dark', 'group-hover'],
      stroke: ['hover', 'dark'],
      transitionDelay: ['hover'],
      backdropOpacity: ['hover', 'group-hover'],
      opacity: ['hover', 'group-hover'],
      visibility: ['group-hover'],
      colors: ['group-hover', 'indeterminate', 'group-active'],
      height: ['responsive', 'hover', 'focus'],
    },
  },
  plugins: [],
}
