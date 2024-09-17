import { isModuleExportName } from 'typescript';

/** @type {import('tailwindcss').Config} */
const withMT = require('material-tailwind/react/utils/withMT');

module.exports = withMT({
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		'./public/**/*.html',
	],
	theme: {
		extend: {},
	},
	plugins: [],
})
