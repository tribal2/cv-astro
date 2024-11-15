import type { Config } from 'tailwindcss'

export default {
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		'../**/cv-astro/src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'
	],
  theme: {
    extend: {},
  },
  plugins: [],
} satisfies Config
