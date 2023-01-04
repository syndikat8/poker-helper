/** @type {import('tailwindcss').Config} */

const colors = {
  transparent: 'transparent',
  current: 'currentColor',
  'white': '#ffffff',
  'red': {
    '100': '#fee2e2',
    '600': '#dc2626',
  },
  'amber': {
    '100': '#fef3c7',
    '300': '#fcd34d'
  },
  'blue': {
    '300': '#93c5fd',
    '700': '#1d4ed8'
  },
  'indigo': {
    '200': '#c7d2fe',
    '400': '#818cf8',
    '500': '#6366f1',
    '600': '#4f46e5',
    '900': '#312e81'
  },
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
      borderRadius: {
        '0.75': '0.1875rem',
        '1.25': '0.313rem',
      },
      borderWidth: {
        '1': '1px',
      },
      width: {
        '7.5': '1.875rem',
        '6.5': '1.625rem',
      },
      height: {
        '7.5': '1.875rem',
        '6.5': '1.625rem',
      },
      gridTemplateRows: {
        13: 'repeat(13, minmax(0, 1fr))'
      },
      gridTemplateColumns: {
        13: 'repeat(13, minmax(0, 1fr))'
      }
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
