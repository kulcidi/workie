module.exports = {
	content: [
		'./pages/*.{js,ts,jsx,tsx,mdx}',
		'./components/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			boxShadow: {
				custom:
					'rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px',
			},
		},
		screens: {
			xs: '480px',
			sm: '576px',
			md: '923px',
			lg: '1070px',
			xl: '1440px',
			'2xl': '1536px',
		},
		container: {
			center: true,
			padding: '1rem',
			screens: {
				xs: '100%',
				sm: '100%',
				md: '100%',
				lg: '100%',
				xl: '1150px',
				'2xl': '1150px',
			},
		},
	},
	// plugins: [],
}
