module.exports = {
	purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {},
		boxShadow: {
			solid: '8px 8px #000',
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
