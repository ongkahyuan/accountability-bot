module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
    'eslint:recommended',
    'plugin:import/recommended',
  ],
  parserOptions: {
    ecmaVersion: 12,
  },
  rules: {
    // 'no-restricted-syntax': ['error', 'ForInStatement', 'LabeledStatement', 'WithStatement'],
    'no-console': ['warn', { allow: ['time', 'timeEnd', 'log', 'error'] }],
  },
};
