module.exports = {
	root: true,
	extends: [
		'eslint:recommended',
		'plugin:svelte/recommended',
		'plugin:tailwindcss/recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:prettier/recommended'
	],
	parser: '@typescript-eslint/parser',
	plugins: ['@typescript-eslint', 'prettier', 'tailwindcss'],
	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 2020
	},
	env: {
		browser: true,
		es2017: true,
		node: true
	},
	overrides: [
		{
			files: ['*.svelte'],
			parser: 'svelte-eslint-parser',
			parserOptions: {
				parser: '@typescript-eslint/parser'
			}
		}
	]
};
