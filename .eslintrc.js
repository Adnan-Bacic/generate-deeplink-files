module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'airbnb-base',
    'airbnb-typescript/base',
  ],
  overrides: [
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    project: './tsconfig.eslint.json',
  },
  plugins: [
  ],
  ignorePatterns: [
    // ignore build folder
    'build/',
  ],
  rules: {
    // syntax rules
    'import/prefer-default-export': [0, 'always'],

    // allow require syntax
    '@typescript-eslint/no-var-requires': [0, 'always'],
  },
};
