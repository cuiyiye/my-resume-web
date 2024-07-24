module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      // Custom colors, fonts, etc.
      colors: {
        primary: '#1DA1F2',
        secondary: '#14171A',
      },
      fontFamily: {
        sans: ['Graphik', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#1DA1F2',
          secondary: '#14171A',
          accent: '#E0245E',
          neutral: '#657786',
          'base-100': '#FFFFFF',
          info: '#1DA1F2',
          success: '#17BF63',
          warning: '#FFAD1F',
          error: '#E0245E',
        },
      },
    ],
  },
};
