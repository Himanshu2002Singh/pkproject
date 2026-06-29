import defaultTheme from 'tailwindcss/defaultTheme'

export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
        serif: ['EB Garamond', 'Georgia', 'serif'],
      },
      colors: {
        dark: '#0f2318',
        'dark-green': '#162b1f',
        gold: '#c9a84c',
        light: '#e8e4d8',
        muted: '#8a9e92',
      },
    },
  },
  plugins: [],
}
