/* global process */
const path = require('path');
const globals = require("globals");
const pluginJs = require("@eslint/js");
const pluginReactConfig = require("eslint-plugin-react/configs/recommended.js");
const { fixupConfigRules } = require("@eslint/compat");

module.exports = [
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  { files: ["**/*.jsx"], languageOptions: { parserOptions: { ecmaFeatures: { jsx: true } } } },
  ...fixupConfigRules(pluginReactConfig),
  { 
    ignores: [(file) => 
      path.relative(process.cwd(), file).startsWith('node_modules') || 
      path.relative(process.cwd(), file).startsWith('dist')
    ] 
  },
  { "rules": { "react/prop-types": "off"}},
];