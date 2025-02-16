/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'
	],
	theme: {
		extend: {
			colors: {
				c_orange: '#FF6F00',   // メインカラー（オレンジ）
				c_yellow: '#FDFB54',   // メインカラー（オレンジ）
			}
		},
	},
	plugins: [],
}
