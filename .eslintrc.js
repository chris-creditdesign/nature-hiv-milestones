module.exports = {
	"env": {
		"es6": true,
		"browser": true
	},
	"extends": "airbnb",
	"rules": {
		"semi": "off",
		"no-tabs": "off",
		"no-console": "warn",
		"indent": ["error", "tab"],
		"react/jsx-indent": ["error", "tab"],
		"react/jsx-indent-props": ["error", "tab"],
		"comma-dangle": "off"
	},
	"parser": "babel-eslint",
	"parserOptions": {
		"allowImportExportEverywhere": true
	}
};