/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				lissi: {
					50: '#EBF5FF',
					100: '#E1EFFE',
					500: '#3B82F6', // Azul Principal
					600: '#2563EB', // Azul Hover
					800: '#1E40AF', // Azul Títulos
					900: '#1E3A8A', // Azul Oscuro
				},
			},
			fontFamily: {
				sans: ['Inter', 'sans-serif'],
			},
		},
	},
	plugins: [],
}