import { type Config } from 'tailwindcss';

const config: Config = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        uiBackground: '#E3E7EE',
        uiBlue: '#007AFF',
        uiGray: '707579',
      },

      borderRadius: {
        '20px': '20px',
        '18px': '18px',
      },

      width: {
        uiFullWidth: 'calc(100% - 20px)',
      },

      height: {
        '60px': '60px',
      },
    },
  },
  plugins: [],
};

export default config;
