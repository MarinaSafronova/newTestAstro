/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
        extend: {
            fontFamily: {
                'Conigen': ['Conigen', 'sans-serif'],
            },
            colors: {
                'primary': 'rgb(33, 154, 166)',
                'foreground': 'rgb(53, 52, 79)',
                'muted-foreground': 'rgb(70, 82, 111)',
                'background': 'rgb(16, 28, 46)',
            },
        }
	},
	plugins: [],
}
