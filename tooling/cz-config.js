'use strict';

module.exports = {

  'types': [
    {
      'value': 'feat',
      'name': 'feat: A new feature',
    },
    {
      'value': 'fix',
      'name': 'fix: A bug fix',
    },
    {
      'value': 'docs',
      'name': 'docs: Documentation only changes',
    },
    {
      'value': 'style',
      'name': 'style: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)',
    },
    {
      'value': 'refactor',
      'name': 'refactor: A code change that neither fixes a bug nor adds a feature',
    },
    {
      'value': 'chore',
      'name': 'chore: Changes to the build process or auxiliary tools and libraries such as documentation generation',
    },
    {
      'value': 'revert',
      'name': 'revert: Revert to a commit',
    },
    {
      'value': 'WIP',
      'name': 'WIP: Work in progress',
    },
  ],

  'scopes': [
    {
      'name': 'Rules',
    },
    {
      'name': 'SpecRules',
    },
    {
      'name': 'Build',
    },
  ],

  'allowCustomScopes': true,
  'allowBreakingChanges': [
    'feat',
    'fix',
    'refactor',
    'revert',
    'chore',
  ],

};
