const withMT = require('material-tailwind/react/utils/withMT');

module.exports = withMT({
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		'./public/**/*.html',
	],
	theme: {
		extend: {
			colors: {
				primary: '#22577a', // Dark Blue
				secondary: '#38a3a5', // Aqua
				accent: '#57cc99', // Soft Green
				light: '#80ed99', // Light Green
				lighter: '#c7f9cc', // Pale Green
				black: '#000000',
				white: '#ffffff',
			},
			fontFamily: {
				sans: ['Montserrat', 'sans-serif'],
			},
			fontWeight: {
				light: 300,
				regular: 400,
				medium: 500,
				bold: 700,
			},
		},
	},
	plugins: [],
});
