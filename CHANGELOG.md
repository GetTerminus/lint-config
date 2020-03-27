## [2.0.1](https://github.com/GetTerminus/eslint-config-frontend/compare/v2.0.0...v2.0.1) (2020-03-27)


### Bug Fixes

* **Rules:** allow more comments to bypass no-fallthrough ([f19714a](https://github.com/GetTerminus/eslint-config-frontend/commit/f19714ae40f17869df43dc771bbbf8d5c8a790a5))
* correct installation docs ([e7589ae](https://github.com/GetTerminus/eslint-config-frontend/commit/e7589ae7120d1fba6bc62d0097546cb987df770f))


### Reverts

* **Rules:** no longer requiring JSDoc comments ([d5b6e2b](https://github.com/GetTerminus/eslint-config-frontend/commit/d5b6e2b372bbe1e660e98a2018b15b03ad49a40b))

# [2.0.0](https://github.com/GetTerminus/eslint-config-frontend/compare/v1.1.1...v2.0.0) (2020-03-27)

### Features

* **Rules:** combine all rulesets ([23663fb](https://github.com/GetTerminus/eslint-config-frontend/commit/23663fb47c29b3ea3af35f1a817130b5f70786fb))

### BREAKING CHANGES

- Rule changes/removals/additions
- Dependency changes & updates
- Typescript requirement
- Configuration changes

### Migration Notes

#### 1. Upgrade all dependencies:
```
$ yarn add eslint \
  @terminus/eslint-config-frontend \
  @angular-eslint/eslint-plugin \
  @angular-eslint/eslint-plugin-template \
  @angular-eslint/template-parser \
  @typescript-eslint/eslint-plugin \
  @typescript-eslint/parser \
  eslint-import-resolver-typescript \
  eslint-plugin-deprecation \
  eslint-plugin-import \
  eslint-plugin-jsdoc \
  eslint-plugin-prefer-arrow \
  -D
```

#### 2. Upgrade TypeScript and Angular

- TypeScript: `3.8.3`
- Angular: `>=9.0.0`

#### 3. Remove all TSLint related dependencies:
```
yarn remove @terminus/tslint-config-frontend tslint
```

#### 4. Delete all `tslint.json` configuration files:
e.g. `tslint.json`, `tslint.ci.json`, `tslint.spec.json`, etc

#### 5. Remove any `package.json` scripts referring to TSLint
e.g. `"lint:ts": "tslint --config tslint.ci.json ...",`

#### 6. Update any existing ESLint `package.json` scripts
Update all commands to reference the base `.eslintrc.js` file.

> NOTE: As always, these instructions are for an out-of-the-box setup. If your application requires multiple
> configuration files, continue using them as needed.

#### 7.  Delete all `eslintrc` configuration files _except_ your base `.eslintrc.js`:
e.g. `.eslintrc.ci.js`, etc

> NOTE: These instructions are for *required configuration only*. So if, for example, your setup needs a secondary
> configuration for CI, that is still fully supported.

#### 8. In the remaining `.eslintrc.js` file, update the 'extends' option:
```diff
module.exports = {
-  "extends": ["@terminus/eslint-config-frontend/development"],
+  "extends": ["@terminus/eslint-config-frontend"],
  ...
}
```

NOTE: If your primary TSConfig file is **NOT** at the project root or **NOT** named `tsconfig.json` you need to
**overwrite the parser options to point to your config file**.

```
module.exports = {
  extends: ['@terminus/eslint-config-frontend'],
  parserOptions: {
    project: './my/custom/tsconfig.special.json',
  }
};
```

#### 9. Convert all `tslint-disable` comments to ESLint format
Here are the primary offenders:

```
-// tslint:disable-next-line no-any
+// eslint-disable-next-line @typescript-eslint/no-explicit-any

-// tslint:disable: no-unused-variable
No replacement but you can tell TypeScript to ignore the line with `// @ts-ignore`

-// tslint:disable: no-non-null-assertion
No longer enforced

-// tslint:disable: max-line-length
+// eslint:disable: max-len

-// tslint:disable: member-ordering
No longer enforced

-// tslint:disable: template-no-call-expression
No longer enforced
```

For manual replacement you should be able to let your IDE add the correct comment to silence a rule for you.

#### 10. Rule Changes
Below are the breaking rule changes. The parity between TSLint and ESLint is not 1-1 so this list may not be exhaustive.

##### `prefer-on-push-component-change-detection`
Previously this ruleset was enforcing the rule `prefer-on-push-component-change-detection` which was never meant to be
in the base ruleset. This has been removed from the default ruleset.

If this rule is needed, it can enabled by consumers under the new name
`@angular-eslint/prefer-on-push-component-change-detection`.

##### `template-no-negated-async`
This rule is no longer in the ruleset.

#### `no-fallthrough`
The regex has been updated to allow a wider array of comments:

```
// Any of these comments would silence the 'no-fallthrough' error (not an exhaustive list)
break omitted
breaks omitted
fall-through
falls through
Falls through
// caution: omitted intentionally
```

#### `member-ordering`
This rule had several issues and has been removed.

#### `no-unused-variable`
This rule is no longer supported. The TSConfig flag `noUnusedLocals` is the recommended replacement:

```
{
  "compilerOptions": {
    "noUnusedLocals": true,
  }
}
```

#### JSDoc
Several JSDoc format and structure based rules have been added. We currently do not enforce JSDocs everywhere. If your
team does enforce this (such as UXE) you can enable this rule in your own `.eslintrc.js`:

```
'jsdoc/require-jsdoc': 'error',
```

#### `prefer-arrow-functions`
This rule has a known issue when using the `--fix` flag when refactoring functions with types:

```
// When converting this:
function createComponent<T>(component: Type<T>): ComponentFixture<T> {
  return createComponentInner<T>(
    //...etc

// It will incorrectly place the type on the right side of the `=`:
const createComponent<T> = (component: Type<T>): ComponentFixture<T> => createComponentInner<T>(

// Correct format:
const createComponent = <T>(component: Type<T>): ComponentFixture<T> => createComponentInner<T>(
```

We opted to use the automatic fix and then manually adjust any that were incorrectly migrated.


#### 11. Add any newly needed overrides
Rules can be adjusted for specific globs at the consumer level using
[ESLint file overrides](https://eslint.org/docs/user-guide/configuring#disabling-rules-only-for-a-group-of-files):

> NOTE: Several rules are already disabled for `.spec` and `.mock` files.

```javascript
module.exports = {
  "extends": ['@terminus/eslint-config-frontend'],
  "overrides": [
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

Upgrade complete!

## <small>1.1.1 (2020-02-03)</small>

* fix(CIRules): remove file overrides ([fe0f4b8](https://github.com/GetTerminus/eslint-config-frontend/commit/fe0f4b8))
* chore(deps): bump eslint-utils from 1.3.1 to 1.4.2 ([23c3f57](https://github.com/GetTerminus/eslint-config-frontend/commit/23c3f57))
* chore(deps): bump handlebars from 4.1.2 to 4.5.3 ([6cc6b0a](https://github.com/GetTerminus/eslint-config-frontend/commit/6cc6b0a))
* chore(deps): bump mixin-deep from 1.3.1 to 1.3.2 ([977b91d](https://github.com/GetTerminus/eslint-config-frontend/commit/977b91d))
* chore: fix incorrectly named items ([3d09736](https://github.com/GetTerminus/eslint-config-frontend/commit/3d09736))
* chore: update codeowners ([759a0bd](https://github.com/GetTerminus/eslint-config-frontend/commit/759a0bd))
* chore(package): update dependencies ([bbd60cd](https://github.com/GetTerminus/eslint-config-frontend/commit/bbd60cd))
* chore(package): update husky to version 4.0.2 ([57ff232](https://github.com/GetTerminus/eslint-config-frontend/commit/57ff232))
* chore(package): update lockfile yarn.lock ([f1ef2ee](https://github.com/GetTerminus/eslint-config-frontend/commit/f1ef2ee))
* chore(package): update lockfile yarn.lock ([4c83f67](https://github.com/GetTerminus/eslint-config-frontend/commit/4c83f67))
* chore: use correct team reference for codeowners ([be563f3](https://github.com/GetTerminus/eslint-config-frontend/commit/be563f3))
* docs(readme): add Greenkeeper badge ([8b8dfae](https://github.com/GetTerminus/eslint-config-frontend/commit/8b8dfae))

## 1.1.0 (2019-08-02)

* feat: 🎸 enforce object curly spacing ([8a1b712](https://github.com/GetTerminus/eslint-config-frontend/commit/8a1b712)), closes [#25](https://github.com/GetTerminus/eslint-config-frontend/issues/25)

## <small>1.0.7 (2019-07-23)</small>

* fix: 🐛 revert format setting ([132c5a9](https://github.com/GetTerminus/eslint-config-frontend/commit/132c5a9))

## <small>1.0.6 (2019-07-23)</small>

* fix: 🐛 output format set to 'stylish' ([33cb78a](https://github.com/GetTerminus/eslint-config-frontend/commit/33cb78a)), closes [#16](https://github.com/GetTerminus/eslint-config-frontend/issues/16)
* chore(deps): bump lodash from 4.17.11 to 4.17.14 ([1d87563](https://github.com/GetTerminus/eslint-config-frontend/commit/1d87563))

## <small>1.0.5 (2019-06-11)</small>

* fix: 🐛 update peer dependencies ([731eba8](https://github.com/GetTerminus/eslint-config-frontend/commit/731eba8))

## <small>1.0.4 (2019-06-11)</small>

* fix: 🤖 update dependencies ([8a88eb6](https://github.com/GetTerminus/eslint-config-frontend/commit/8a88eb6)), closes [#17](https://github.com/GetTerminus/eslint-config-frontend/issues/17)
* chore(deps): bump fstream from 1.0.11 to 1.0.12 ([3a6a577](https://github.com/GetTerminus/eslint-config-frontend/commit/3a6a577))
* chore(deps): bump handlebars from 4.1.0 to 4.1.2 (#20) ([9ee496f](https://github.com/GetTerminus/eslint-config-frontend/commit/9ee496f)), closes [#20](https://github.com/GetTerminus/eslint-config-frontend/issues/20)
* chore(deps): bump js-yaml from 3.12.2 to 3.13.1 ([402f9a0](https://github.com/GetTerminus/eslint-config-frontend/commit/402f9a0))
* docs: ✏️ update incorrect configuration docs ([ff3b8cd](https://github.com/GetTerminus/eslint-config-frontend/commit/ff3b8cd))
* Create CODEOWNERS file ([82277a3](https://github.com/GetTerminus/eslint-config-frontend/commit/82277a3))

## <small>1.0.3 (2019-05-09)</small>

* fix: update rule settings ([2da52c1](https://github.com/GetTerminus/eslint-config-frontend/commit/2da52c1))
* fix: update rule settings (#7) ([ab684ff](https://github.com/GetTerminus/eslint-config-frontend/commit/ab684ff)), closes [#7](https://github.com/GetTerminus/eslint-config-frontend/issues/7)

## <small>1.0.2 (2019-04-30)</small>

* fix: rule changes after integrating in the UI library ([3c96484](https://github.com/GetTerminus/eslint-config-frontend/commit/3c96484))
* fix: rule changes after integrating in the UI library (#6) ([1ae4aa3](https://github.com/GetTerminus/eslint-config-frontend/commit/1ae4aa3)), closes [#6](https://github.com/GetTerminus/eslint-config-frontend/issues/6)

## <small>1.0.1 (2019-04-17)</small>

* Merge pull request #5 from GetTerminus/adjust-deps ([f25913b](https://github.com/GetTerminus/eslint-config-frontend/commit/f25913b)), closes [#5](https://github.com/GetTerminus/eslint-config-frontend/issues/5)
* Merge pull request #4 from GetTerminus/benjamincharity-patch-1 ([dc31826](https://github.com/GetTerminus/eslint-config-frontend/commit/dc31826)), closes [#4](https://github.com/GetTerminus/eslint-config-frontend/issues/4)
* Replace master with release branches for badges ([de51ad2](https://github.com/GetTerminus/eslint-config-frontend/commit/de51ad2))
* Merge pull request #3 from GetTerminus/add-badges ([a290e4e](https://github.com/GetTerminus/eslint-config-frontend/commit/a290e4e)), closes [#3](https://github.com/GetTerminus/eslint-config-frontend/issues/3)
* Merge pull request #2 from GetTerminus/benjamincharity-patch-1 ([eb95785](https://github.com/GetTerminus/eslint-config-frontend/commit/eb95785)), closes [#2](https://github.com/GetTerminus/eslint-config-frontend/issues/2)
* Remove initial commit references ([bb763cf](https://github.com/GetTerminus/eslint-config-frontend/commit/bb763cf))
* fix: remove codelyzer dep ([1b5aa5d](https://github.com/GetTerminus/eslint-config-frontend/commit/1b5aa5d))
* chore: add badges to readme ([2778f23](https://github.com/GetTerminus/eslint-config-frontend/commit/2778f23))

## 1.0.0 (2019-04-16)

* feat: Rulesets and Docs finalized


[eslint-file-overrides]:
