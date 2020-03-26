<h1>Terminus ESLint Frontend Configuration</h1>

[![NPM version][npm-version-image]][npm-url]
[![Github release][gh-release-badge]][gh-releases]
[![CircleCI][circle-badge]][circle-link]
[![DavidDM][david-badge]][david-link]
[![DavidDM Dev][david-dev-badge]][david-link]
<br>
[![semantic-release][semantic-release-badge]][semantic-release]
[![Renovate][renovate-badge]][renovate-link]
[![ZenHub][zenhub-image]][zenhub-url]
[![MIT License][license-image]][license-url]


A collection of JavaScript & TypeScript lint rules for Terminus frontend codebases.


<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**

- [Installation](#installation)
- [Ruleset overview](#ruleset-overview)
- [Set up](#set-up)
  - [1. Create a config file and extend the Terminus ruleset](#1-create-a-config-file-and-extend-the-terminus-ruleset)
  - [2. Override rule definitions as needed](#2-override-rule-definitions-as-needed)
- [Rule decisions](#rule-decisions)
- [File overrides](#file-overrides)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->


## Installation


1. Install the package & required dependencies:

```
$ yarn add eslint \
  @terminus/eslint-config-frontend \
  @angular-eslint/eslint-plugin \
  @angular-eslint/eslint-plugin-template \
  @angular-eslint/template-parser \
  @typescript-eslint/eslint-plugin \
  @typescript-eslint/parser -D
```


## Ruleset overview

Using ESLint's [file override ability][eslint-file-overrides] our config now lives in a single file.

- Base rules are applied to all linted files.
- TypeScript & Angular specific rules are applied to `.ts` files.
- HTML rules are applied to `*.component.html` files (currently no HTML rules active).


## Set up


### 1. Create a config file and extend the Terminus ruleset

Create a ESLint config file at the root level named `.eslintrc.js` and extend the base ruleset:

```javascript
module.exports = {
  extends: ['@terminus/eslint-config-frontend'],
};
```

NOTE: If your primary TSConfig file is at the project root and named `tsconfig.json` *you need to overwrite the parser
options to point to your config file*.

```javascript
module.exports = {
  extends: ['@terminus/eslint-config-frontend'],
  parserOptions: {
    project: './my/custom/tsconfig.special.json',
  }
};
```

> NOTE: Linting during the CI process is the most strict and will fail if _any_ issues are found. The only way a linting
> issue makes it to CI is because someone didn't lint before committing.

### 2. Override rule definitions as needed

// TODO: Do they need to overwrite entire rule or only prefix??
```javascript
module.exports = {
  extends: ['@terminus/eslint-config-frontend'],
  rules: {
    '@angular-eslint/prefer-on-push-component-change-detection': 'error',
  },
};
```

#### 3. Add a linting command to `package.json`

Example scripts:

```json
{
  "name": "My Project",
  "scripts": {
    "app:lint:ts": "npx eslint \"projects/my-app/**/*.{js,ts}\" --config .eslintrc.js",
    "app:lint:ts:fix": "yarn run app:lint:ts --fix"
  }
}
```

## Rule decisions

Each rule is accompanied by a comment outlining the reasoning behind the decision to include the rule.

See [`rules.js`](rules.js).

## File overrides

Rules can be adjusted for specific globs at the consumer level using [ESLint file overrides][eslint-file-overrides]:

> NOTE: Several rules are already disabled for `.spec` and `.mock` files.

```javascript
module.exports = {
  "extends": ['@terminus/eslint-config-frontend/development'],
  "overrides": [
    // Disable certain rules for spec and mock files:
    {
      "files": [
        "*.spec.ts",
        "*.mock.ts",
      ],
      "rules": {
        "no-magic-numbers": "off",
      },
    },
  ],
};
```



<!--
  LINKS
-->

[circle-badge]:           https://circleci.com/gh/GetTerminus/eslint-config-frontend/tree/release.svg?style=shield
[circle-link]:            https://circleci.com/gh/GetTerminus/eslint-config-frontend/tree/release
[npm-version-image]:      http://img.shields.io/npm/v/@terminus/eslint-config-frontend.svg
[npm-url]:                https://npmjs.org/package/@terminus/eslint-config-frontend
[gh-release-badge]:       https://img.shields.io/github/release/GetTerminus/eslint-config-frontend.svg
[gh-releases]:            https://github.com/GetTerminus/eslint-config-frontend/releases/
[semantic-release-badge]: https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg
[semantic-release]:       https://github.com/semantic-release/semantic-release
[license-image]:          http://img.shields.io/badge/license-MIT-blue.svg
[license-url]:            https://github.com/GetTerminus/eslint-config-frontend/blob/release/LICENSE
[eslint-file-overrides]:  https://eslint.org/docs/user-guide/configuring#disabling-rules-only-for-a-group-of-files
[zenhub-image]:           https://dxssrr2j0sq4w.cloudfront.net/3.2.0/img/external/zenhub-badge.png
[zenhub-url]:             https://github.com/GetTerminus/eslint-config-frontend#zenhub
[renovate-badge]:         https://img.shields.io/badge/renovate-enabled-brightgreen.svg
[renovate-link]:          https://renovatebot.com
[david-dev-badge]:        https://david-dm.org/GetTerminus/eslint-config-frontend/dev-status.svg
[david-badge]:            https://david-dm.org/GetTerminus/eslint-config-frontend.svg
[david-link]:             https://david-dm.org/GetTerminus/eslint-config-frontend?view=list
