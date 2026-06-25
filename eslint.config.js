import tailwind from 'eslint-plugin-tailwindcss';
import eslintPluginAstro from 'eslint-plugin-astro';

export default [
	tailwind.configs.recommended,
	...eslintPluginAstro.configs.recommended,
	{
		settings: {
			tailwindcss: {
				// v4 default is src/style.css; point it at this project's Tailwind entry.
				cssConfigPath: 'src/styles/main.css',
			},
		},
	},
	{
		ignores: ['dist/', '.astro/', 'node_modules/'],
	},
];
