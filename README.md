# Terminus TSLint Configuration

A collection of extendable TSLint configurations created for Terminus.


## Installation

1. Install the NPM package:

```
$ yarn add @terminus/tslint-config -D
```

2. Extend this package in your project:

```
// your project's tslint.json:
{
  "extends": [
    "@terminus/tslint-config"
  ]
}
```


## Configurations

Available configurations:

### `ci`

The default ruleset is the strictest and best suited to be run during CI process'. Even stylistic issues are marked as errors because the
only way the issue has made it all the way to CI is because someone did not run the linter during development.

[`ci.js src`](./ci.js)


### `development`

This ruleset extends the `ci` ruleset but softens the rules to turn many stylistic issues into warnings in order to not impede development.

Target the `development` ruleset:

```
// your project's tslint.json:
{
  "extends": [
    "@terminus/tslint-config/development"
  ]
}
```

[`development.js src`](./development.js)


### `testing`

This ruleset extends the `development` ruleset but softens the rules further to allow more freedom in `spec` files.

Target the `testing` ruleset:

```
// your project's tslint.json:
{
  "extends": [
    "@terminus/tslint-config/testing"
  ]
}
```

[`testing.js src`](./testing.js)


## Reasoning

Each rule is accompanied by a comment outlining the reasoning behind the decision to include the rule.

For most rules, see [`ci.js`](./ci.js).
