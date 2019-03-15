module.exports = {
  'extends': './development.js',
  'env': {
    'jest': true,
  },
  'rules': {
    // TODO: for dev only - remove
    'component-selector': [
      true,
      'element',
      'bar',
      'kebab-case',
    ],

    // This allows easy access to private properties in tests
    'no-string-literal': false,
  },
};
