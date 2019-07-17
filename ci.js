const SEVERITY = 'error';

module.exports = {
  // Enable specific environments/globals
  'env': {
    'es6': true,
    'browser': true,
    'node': true,
  },

  // Define the cli output format
  'format': 'stylish',

  // Define a TS enabled parser
  // NOTE: Even though we aren't enforcing any TypeScript rules here, this is still needed so that ESLint can understand `.ts` files
  'parser': '@typescript-eslint/parser',

  'parserOptions': {
    'ecmaVersion': 6,
    'sourceType': 'module',
    'ecmaFeatures': {
      'modules': true,
    },
  },

  // NOTE: ESLint considers imported interfaces 'unused' so we let cannot use it's unused variable check.
  // NOTE: Rules are tagged if it is fixable: `#hasFixer`
  'rules': {

    // Helps to maintain a consistent, readable style in the codebase.
    // #hasFixer
    'array-bracket-newline': [
      SEVERITY,
      'consistent',
    ],

    // Helps to maintain a consistent, readable style in the codebase.
    // #hasFixer
    'array-bracket-spacing': [
      SEVERITY,
      'never',
    ],

    // Helps to maintain a consistent, readable style in the codebase.
    // #hasFixer
    'array-element-newline': [
      SEVERITY,
      'consistent',
    ],

    // Maintain stylistic consistency with other arrow function definitions.
    // #hasFixer
    'arrow-body-style': [
      SEVERITY,
      'as-needed',
    ],

    // Arrow functions can omit parentheses when they have exactly one parameter. In all other cases the parameter(s) must be wrapped in
    // parentheses.
    // #hasFixer
    'arrow-parens': [
      SEVERITY,
      'as-needed',
    ],

    // Maintain stylistic consistency with other arrow function definitions.
    // #hasFixer
    'arrow-spacing': SEVERITY,

    // Helps to maintain a consistent, readable style in the codebase.
    // #hasFixer
    'brace-style': SEVERITY,

    // Helps to maintain a consistent, readable style in the codebase.
    // #hasFixer
    'camelcase': SEVERITY,

    // Helps to maintain a consistent, readable style in the codebase.
    // #hasFixer
    'comma-dangle': [
      SEVERITY,
      'always-multiline',
    ],

    // Helps to maintain a consistent, readable style in the codebase.
    // #hasFixer
    'comma-spacing': SEVERITY,

    // TODO: verify this doesn't throw too many warnings in engage
    // Cyclomatic complexity is a code metric which indicates the level of complexity in a function. High cyclomatic complexity indicates
    // confusing code which may be prone to errors or difficult to modify.
    'complexity': [
      SEVERITY,
      20,
    ],

    // Helps to maintain a consistent, readable style in the codebase.
    // #hasFixer
    'computed-property-spacing': [
      SEVERITY,
      'never',
    ],

    // Explicit behavior is easier to maintain.
    'default-case': [
      SEVERITY,
      {
        'commentPattern': '^skip\\sdefault',
      },
    ],

    // Helps to maintain a consistent, readable style in the codebase.
    // #hasFixer
    'dot-location': [
      SEVERITY,
      'property',
    ],

    // The dot notation is often preferred because it is easier to read, less verbose, and works better with aggressive JavaScript
    // minimizers.
    // For TypeScript if `--noImplicitAny` is turned off, property access via a string literal will be ‘any’ if the property does not exist.
    // #hasFixer
    'dot-notation': SEVERITY,

    // It is a standard convention to end files with a newline.
    // #hasFixer
    'eol-last': [
      SEVERITY,
      'always',
    ],

    // Strict equality is more explicit.
    // #hasFixer
    'eqeqeq': [
      SEVERITY,
      'always',
      {
        // Allow null checks
        'null': 'ignore',
      },
    ],

    // Protect against accidental infinite loops caused by iterating in the wrong direction.
    'for-direction': SEVERITY,

    // Helps to maintain a consistent, readable style in the codebase.
    // #hasFixer
    'func-call-spacing': [
      SEVERITY,
      'never',
    ],

    // Helps to maintain a consistent, readable style in the codebase.
    // #hasFixer
    'function-paren-newline': [
      SEVERITY,
      'consistent',
    ],

    // A getter with no return serves no purpose.
    'getter-return': SEVERITY,

    // Prevents accidental iteration over properties inherited from an object’s prototype.
    'guard-for-in': SEVERITY,

    // Helps to maintain a consistent, readable style in the codebase.
    // #hasFixer
    'implicit-arrow-linebreak': [
      SEVERITY,
      'beside',
    ],

    // Helps to maintain a consistent, readable style in the codebase.
    // #hasFixer
    'indent': [
      SEVERITY,
      2,
      {
        'ArrayExpression': 1,
        'CallExpression': {
          'arguments': 1,
        },
        'FunctionDeclaration': {
          'body': 1,
          'parameters': 1,
        },
        'ImportDeclaration': 1,
        'MemberExpression': 1,
        'ObjectExpression': 1,
        'SwitchCase': 1,
        'flatTernaryExpressions': true,
      },
    ],

    // Helps to maintain a consistent, readable style in the codebase.
    'key-spacing': [
      SEVERITY,
    ],

    // Helps to maintain a consistent, readable style in the codebase.
    // #hasFixer
    'keyword-spacing': SEVERITY,

    // Enforce consistent line endings independent of operating system, VCS, or editor used across your codebase.
    // #hasFixer
    'linebreak-style': [
      SEVERITY,
      'unix',
    ],

    // Helps to maintain a consistent, readable style in the codebase.
    'line-comment-position': [
      SEVERITY,
      {
        'position': 'above',
      },
    ],

    // Helps to maintain a consistent, readable style in the codebase.
    'max-len': [
      SEVERITY,
      {
        'code': 140,
        'ignoreRegExpLiterals': true,
        'ignoreUrls': true,
      },
    ],

    // This rule is aimed at catching debugging code that should be removed and popup UI elements that should be replaced with less
    // obtrusive, custom UIs
    'no-alert': SEVERITY,

    // Bitwise operators are often typos - for example bool1 & bool2 instead of bool1 && bool2. They also can be an indicator of overly
    // clever code which decreases maintainability.
    'no-bitwise': SEVERITY,

    // Using arguments.callee makes various performance optimizations impossible.
    // See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments/callee
    'no-caller': SEVERITY,

    // In certain places the arrow function syntax could be confused with a comparison operator.
    'no-confusing-arrow': [
      SEVERITY,
      {
        'allowParens': true,
      },
    ],

    // In general, console methods aren’t appropriate for production code.
    'no-console': SEVERITY,

    // We cannot modify variables that are declared using const keyword. It will raise a runtime error.
    'no-const-assign': SEVERITY,

    // A constant expression (for example, a literal) as a test condition might be a typo or development trigger for a specific behavior.
    'no-constant-condition': SEVERITY,

    // In general, debugger statements aren’t appropriate for production code.
    'no-debugger': SEVERITY,

    // If more than one parameter has the same name in a function definition, the last occurrence “shadows” the preceding occurrences. A
    // duplicated name might be a typing error.
    'no-dupe-args': SEVERITY,

    // If there are declarations of the same name in class members, the last declaration overwrites other declarations silently. It can
    // cause unexpected behaviors.
    'no-dupe-class-members': SEVERITY,

    // Multiple properties with the same key in object literals can cause unexpected behavior in your application.
    'no-dupe-keys': SEVERITY,

    // If a switch statement has duplicate test expressions in case clauses, it is likely that a programmer copied a case clause but forgot
    // to change the test expression.
    'no-duplicate-case': SEVERITY,

    // Using a single import statement per module will make the code clearer because you can see everything being imported from that module
    // on one line.
    'no-duplicate-imports': SEVERITY,

    // If an if block contains a return statement, the else block becomes unnecessary.
    // #hasFixer
    'no-else-return': SEVERITY,

    // Empty blocks are often indicators of missing code.
    'no-empty': SEVERITY,

    // In contexts such as an if statement’s test where the result of the expression will already be coerced to a Boolean, casting to a
    // Boolean via double negation (!!) or a Boolean call is unnecessary.
    // #hasFixer
    'no-extra-boolean-cast': SEVERITY,

    // Typing mistakes and misunderstandings about where semicolons are required can lead to semicolons that are unnecessary. While not
    // technically an error, extra semicolons can cause confusion when reading code.
    // #hasFixer
    'no-extra-semi': SEVERITY,

    // eval() is dangerous as it allows arbitrary code execution with full privileges.
    'no-eval': SEVERITY,

    // Fall though in switch statements is often unintentional and a bug.
    'no-fallthrough': [
      SEVERITY,
      {
        // A fallthrough is only allowed when a comment is added explicitly calling out the unique behavior.
        'commentPattern': 'break[\\s\\w]*omitted',
      },
    ],

    // An invalid pattern in a regular expression literal is a SyntaxError when the code is parsed, but an invalid string in RegExp
    // constructors throws a SyntaxError only when the code is executed.
    'no-invalid-regexp': SEVERITY,

    // While examples such as window are obvious, there are often hundreds of built-in global objects provided by JavaScript environments.
    // It can be hard to know if you’re assigning to a global variable or not.
    'no-global-assign': SEVERITY,

    // Eliminate unnecessary and potentially confusing blocks at the top level of a script or within other blocks.
    'no-lone-blocks': SEVERITY,

    // If an if statement is the only statement in the else block, it is often clearer to use an else if form.
    // #hasFixer
    'no-lonely-if': SEVERITY,

    // Magic numbers should be avoided as they often lack documentation. Forcing them to be stored in variables gives them implicit
    // documentation.
    'no-magic-numbers': [
      SEVERITY,
      {
        // `0` is useful for checking existence (eg `index < 0`)
        // `1` is useful in situations where it has no explicit value (eg `arr.length - 1`)
        'ignore': [
          -1,
          0,
          1,
        ],
        // Allow targeting array indexes without a variable
        'ignoreArrayIndexes': true,
      },
    ],

    // Enclosing complex expressions by parentheses clarifies the developer’s intention, which makes the code more readable.
    'no-mixed-operators': SEVERITY,

    // Helps to maintain a consistent, readable style in the codebase.
    'no-mixed-spaces-and-tabs': SEVERITY,

    // Helps to maintain a consistent, readable style in the codebase.
    // #hasFixer
    'no-multiple-empty-lines': [
      SEVERITY,
      {
        'max': 4,
        'maxEOF': 1,
      },
    ],

    // Negated conditions are more difficult to understand. Code can be made more readable by inverting the condition instead.
    'no-negated-condition': SEVERITY,

    // There is little reason to use String, Number, or Boolean as constructors. In almost all cases, the regular function-call version is
    // more appropriate.
    'no-new-wrappers': SEVERITY,

    // In JavaScript assignment can happen at almost any point. Because of this, an errant equals sign can end up causing assignment when
    // the true intent was to do a comparison. Because of this ambiguity, it’s considered a best practice to not use assignment in return
    // statements.
    'no-return-assign': SEVERITY,

    // Self assignments have no effect, so probably those are an error due to incomplete refactoring.
    'no-self-assign': SEVERITY,

    // When a variable in a local scope and a variable in the containing scope have the same name, shadowing occurs. Shadowing makes it
    // impossible to access the variable in the containing scope and obscures to what value an identifier actually refers.
    'no-shadow': SEVERITY,

    // ES5 §15.1.1 Value Properties of the Global Object (NaN, Infinity, undefined) as well as strict mode restricted identifiers eval and
    // arguments are considered to be restricted names in JavaScript. Defining them to mean something else can have unintended consequences
    // and confuse others reading the code.
    'no-shadow-restricted-names': SEVERITY,

    // Missing elements are probably an accidentally duplicated comma.
    'no-sparse-arrays': SEVERITY,

    // It can be easy to use the wrong quotes when wanting to use template literals, by writing "${variable}", and end up with the literal
    // value "${variable}" instead of a string containing the value of the injected expressions.
    'no-template-curly-in-string': SEVERITY,

    // Throwing a string lacks any stack trace information and other important data properties
    'no-throw-literal': SEVERITY,

    // Keeps version control diffs clean as it prevents accidental whitespace from being committed.
    // #hasFixer
    'no-trailing-spaces': SEVERITY,

    // Locate potential ReferenceErrors resulting from misspellings of variable and parameter names, or accidental implicit globals (for
    // example, from forgetting the var keyword in a for loop initializer).
    'no-undef': SEVERITY,

    // A variable that is declared and not initialized to any value automatically gets the value of undefined.
    // #hasFixer
    'no-undef-init': SEVERITY,

    // Since we are using TypeScript to define public vs private items, using a leading underscore can be confusing.
    'no-underscore-dangle': [
      SEVERITY,
      {
      // Allow after `this` to support private properties for getter/setter that cannot be named indentically.
        'allowAfterThis': true,
        'enforceInMethodNames': true,
      },
    ],

    // Disallow ternary operators when simpler alternatives exist.
    // #hasFixer
    'no-unneeded-ternary': SEVERITY,

    // Because the return, throw, break, and continue statements unconditionally exit a block of code, any statements after them cannot be
    // executed. Unreachable statements are usually a mistake.
    'no-unreachable': SEVERITY,

    // Just as developers might type `-a + b` when they mean `-(a + b)` for the negative of a sum, they might type `!key` in object by
    // mistake when they almost certainly mean `!(key in object)` to test that a key is not in an object.
    'no-unsafe-negation': SEVERITY,

    // Detects potential errors where an assignment or function call was intended.
    'no-unused-expressions': [
      SEVERITY,
      {
        'allowTernary': true,
        'allowShortCircuit': true,
      },
    ],

    // It’s unnecessary to use computed properties with literals.
    // #hasFixer
    'no-useless-computed-key': SEVERITY,

    // Useless string concatenation is likely the result of refactoring where a variable was removed from the concatenation.
    'no-useless-concat': SEVERITY,

    // Declaring variables using var has several edge case behaviors that make var unsuitable for modern code. Variables declared by var
    // have their parent function block as their scope, ignoring other control flow statements. vars have declaration “hoisting” (similar to
    // functions) and can appear to be used before declaration.
    // #hasFixer
    'no-var': SEVERITY,

    // Helps to maintain a consistent, readable style in the codebase.
    // #hasFixer
    'no-whitespace-before-property': SEVERITY,

    // Helps to maintain a consistent, readable style in the codebase.
    // #hasFixer
    'object-curly-newline': [
      SEVERITY,
      {
        'ExportDeclaration': {
          'minProperties': 2,
          'multiline': true,
        },
        'ImportDeclaration': {
          'minProperties': 2,
          'multiline': true,
        },
        'ObjectExpression': {
          'minProperties': 2,
          'multiline': true,
        },
      },
    ],

    // Helps to maintain a consistent, readable style in the codebase.
    // #hasFixer
    'object-property-newline': SEVERITY,

    // Enforces use of ES6 object literal shorthand.
    // #hasFixer
    'object-shorthand': [
      SEVERITY,
      'always',
    ],

    // Separating declarations one-per-line creates a more readable style.
    // #hasFixer
    'one-var': [
      SEVERITY,
      'never',
    ],

    // Helps to maintain a consistent, readable style in the codebase.
    // #hasFixer
    'operator-linebreak': [
      'error',
      'before',
      {
        'overrides': {
          '=': 'ignore',
        },
      },
    ],

    // If a variable is never reassigned, using the const declaration is better.
    // #hasFixer
    'prefer-const': SEVERITY,

    // Object spread allows for better type checking and inference.
    // #hasFixer
    'prefer-object-spread': SEVERITY,

    // Helps to maintain a consistent, readable style in the codebase.
    // #hasFixer
    'prefer-template': SEVERITY,

    // Helps to maintain a consistent, readable style in the codebase.
    // #hasFixer
    'quotes': [
      SEVERITY,
      'single',
      {
        'avoidEscape': true,
        'allowTemplateLiterals': true,
      },
    ],

    // Only property names which require quotes may be quoted (e.g. those with spaces in them).
    // #hasFixer
    'quote-props': [
      SEVERITY,
      'consistent-as-needed',
    ],

    // Always specify this parameter to eliminate reader confusion and to guarantee predictable behavior. Different implementations produce
    // different results when a radix is not specified, usually defaulting the value to 10.
    'radix': SEVERITY,

    // Helps to maintain a consistent, readable style in the codebase.
    // #hasFixer
    'rest-spread-spacing': SEVERITY,

    // Helps to maintain a consistent, readable style in the codebase.
    // #hasFixer
    'semi-spacing': SEVERITY,

    // Helps to maintain a consistent, readable style in the codebase.
    // #hasFixer
    'space-before-blocks': SEVERITY,

    // Helps to maintain a consistent, readable style in the codebase.
    // #hasFixer
    'space-before-function-paren': [
      SEVERITY,
      'never',
    ],

    // Comments are easier to read when there is a space between the comment marker and the first character.
    // #hasFixer
    'spaced-comment': [
      SEVERITY,
      'always',
    ],

    // Helps to maintain a consistent, readable style in the codebase.
    // #hasFixer
    'space-infix-ops': SEVERITY,

    // Helps to maintain a consistent, readable style in the codebase.
    // #hasFixer
    'space-in-parens': [
      SEVERITY,
      'never',
    ],

    // Helps to maintain a consistent, readable style in the codebase.
    // #hasFixer
    'space-unary-ops': SEVERITY,

    // Use a more natural way to describe the comparison.
    // #hasFixer
    'yoda': SEVERITY,
  },


  /*
   * Override rules for specific file patterns
   */
  'overrides': [
    // Spec files:
    {
      'files': [
        '**/*.spec.ts',
        '**/*.mock.ts',
      ],
      'env': {
        'jest': true,
      },
      'rules': {
        'dot-notation': 'off',
        'guard-for-in': 'off',
        'line-comment-position': 'off',
        'no-console': 'off',
        'no-magic-numbers': 'off',
        'no-underscore-dangle': 'off',
      },
    },
    // Test helper files:
    {
      'files': [
        '**/testing/**/*.ts',
      ],
      'env': {
        'jest': true,
      },
      'rules': {
        'no-magic-numbers': 'off',
        'no-underscore-dangle': 'off',
      },
    },
  ],
};
