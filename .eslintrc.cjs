module.exports = {
	env: {
		browser: true,
		node: true,
		es2021: true,
		jest: true,
	},
	extends: ['standard', 'eslint-config-prettier'],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	rules: {},
};
