/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
	extend: {
  	colors: {
    	ginger: {
      	50: '#FFF8F0',
      	100: '#FCEBD6',
      	200: '#F7E1C4',
      	300: '#F4D1A6', // primary
      	400: '#E8B987',
      	500: '#DFA96F',
      	600: '#C68C52',
      	700: '#A87141',
      	800: '#8C5B35',
      	900: '#5C4033'
    	},
    	leaf: '#A8C686',
    	coral: '#FF6F61'
  	},
  	boxShadow: {
    	soft: '0 6px 20px rgba(92, 64, 51, 0.08)'
  	},
  	fontFamily: {
    	sans: ['Inter', 'system-ui', 'sans-serif']
  	}
	}
  },
  plugins: [require('@tailwindcss/forms')]
}
