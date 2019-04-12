module.exports = {
  'extends': './development.js',

  // TODO: likely not needed due to eslint overrides array?

  // Add Jest to the list of environments
  'env': {
    'jest': true,
  },

  'rules': {

    // TODO: for dev only - remove
    'indent': {
      'severity': 'warning',
      'options': [
        'spaces',
        8,
      ],
    },
  },
};
