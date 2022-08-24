/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				'p-blue': 'hsl(223, 87%, 63%)',
				's-pale-blue': 'hsl(223, 100%, 88%)',
				's-light-red': 'hsl(354, 100%, 66%)',
				'n-gray': 'hsl(0, 0%, 59%)',
				'n-very-dark-blue': 'hsl(209, 33%, 12%)'
			},
			fontFamily: {
				'libre-franklin': ['Libre Franklin', 'sans-serif']
			},
			fontSize: {
				'body-copy': '20px'
			}
		}
	},
	plugins: []
};
