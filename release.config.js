module.exports = {
  // HACK: The ConditionCircle plugin hasn't been updated for the breaking changes in semantic-release v16. So it expects the key
  // `branch` to exist despite semantic-release switching to `branches` in v16
  'branch': 'release',
  'branches': 'release',
  'plugins': [
    [
      '@semantic-release/release-notes-generator',
      {
        'parserOpts': {
          'noteKeywords': [
            'BREAKING CHANGE',
            'BREAKING CHANGES',
            'BREAKING',
          ],
        },
        'writerOpts': {
          'commitsSort': [
            'subject',
            'scope',
          ],
        },
      },
    ],
    '@semantic-release/git',
  ],
  'verifyConditions': [
    'condition-circle',
    '@semantic-release/changelog',
    '@semantic-release/npm',
    '@semantic-release/git',
    '@semantic-release/github',
  ],
  'prepare': [
    {
      'path': '@semantic-release/changelog',
      'changelogFile': 'CHANGELOG.md',
    },
    {
      'path': '@semantic-release/git',
      'message': '📚 Add ${nextRelease.version} release notes [skip ci]',
    },
  ],
  'publish': [
    {
      'path': '@semantic-release/npm',
      'npmPublish': true,
    },
    {
      'path': '@semantic-release/github',
      'assets': [
        'CHANGELOG.md',
      ],
      'npmPublish': false,
    },
  ],
};
