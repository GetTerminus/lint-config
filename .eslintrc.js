module.exports = {
  'parserOptions': {
    'ecmaVersion': 2017,
  },
  'env': {
    'es6': true,
  },
  'rules': {
    'array-bracket-newline': [
      'error',
      'always',
    ],
    'array-element-newline': [
      'error',
      'always',
    ],
    'comma-dangle': [
      'error',
      'always-multiline',
    ],
    'indent': [
      'error',
      2,
    ],
    'object-curly-newline': [
      'error',
      {
        'consistent': true,
        'minProperties': 2,
        'multiline': true,
      },
    ],
    'quotes': [
      'error',
      'single',
    ],
    'semi': [
      'error',
      'always',
    ],
    'quote-props': [
      'error',
      'always',
    ],
  },
};
