module.exports = {
  'env': {
    'es6': true,
    'browser': true,
  },

  // Extend existing rulesets
  'extends': [
    'codelyzer',
  ],

  'rules': {
    // Having consistent whitespace in an Angular expression makes the template more readable.
    // #codelyzer #has-fixer
    'angular-whitespace': [
      true,
      'check-interpolation',
      'check-pipe',
    ],

    // Helps to maintain a consistent, readable style in the codebase.
    // #has-fixer
    'array-bracket-newline': [
      'error',
      'consistent',
    ],

    // Helps to maintain a consistent, readable style in the codebase.
    // #has-fixer
    'array-bracket-spacing': [
      'error',
      'never',
    ],

    // Helps to maintain a consistent, readable style in the codebase.
    // #has-fixer
    'array-element-newline': [
      'error',
      'consistent',
    ],

    // Maintain stylistic consistency with other arrow function definitions.
    // #has-fixer
    'arrow-body-style': [
      'error',
      'as-needed',
    ],

    // Arrow functions can omit parentheses when they have exactly one parameter. In all other cases the parameter(s) must be wrapped in
    // parentheses.
    // #has-fixer
    'arrow-parens': [
      'error',
      'as-needed',
    ],

    // Leaving out `return` and `{}` in arrow lambdas results in easier to read code.
    // #has-fixer
    'arrow-return-shorthand': true,

    // Maintain stylistic consistency with other arrow function definitions.
    // #has-fixer
    'arrow-spacing': 'error',

    // Ensure that the two-way data binding syntax is correct.
    // #codelyzer #has-fixer
    'banana-in-box': true,

    // Sticking to a consistent grammar for conditions helps keep code readable and understandable.
    // #tslint
    'binary-expression-operand-order': true,

    // Helps to maintain a consistent, readable style in the codebase.
    // #has-fixer
    'brace-style': 'error',

    // An interface or literal type with just a call signature can be written as a function type.
    // #tslint #has-fixer
    'callable-types': true,

    // Helps to maintain a consistent, readable style in the codebase.
    // #has-fixer
    'camelcase': 'error',

    // JavaScript and general programming convention is to refer to classes in PascalCase.
    // It can be confusing to use camelCase or other conventions for class names.
    // #tslint
    'class-name': true,

    // Helps to maintain a consistent, readable style in the codebase.
    // #has-fixer
    'comma-dangle': [
      'error',
      'always-multiline',
    ],

    // Helps to maintain a consistent, readable style in the codebase.
    // #has-fixer
    'comma-spacing': 'error',

    // Helps to maintain a consistent, readable style in the codebase.
    // #tslint #has-fixer
    'comment-format': [
      true,
      'check-space',
    ],

    // TODO: verify this doesn't throw too many warnings in engage
    // Cyclomatic complexity is a code metric which indicates the level of complexity in a function. High cyclomatic complexity indicates
    // confusing code which may be prone to errors or difficult to modify.
    'complexity': [
      'error',
      10,
    ],

    // Consistent conventions make it easy to quickly identify and reference assets of different types.
    // #codelyzer
    'component-class-suffix': true,

    // a) Keeps the element names consistent with the specification for Custom Elements.
    // b) Consistent conventions make it easy to quickly identify and reference assets of different types.
    // c) Components are easy to identify in the DOM.
    // See https://angular.io/styleguide#style-02-07 https://angular.io/styleguide#style-05-02 https://angular.io/styleguide#style-05-02
    // #codelyzer
    'component-selector': [
      true,
      'element',
      // No prefix is enforced at the base level. This should be set specifically by consumers.
      '',
      'kebab-case',
    ],

    // Helps to maintain a consistent, readable style in the codebase.
    // #has-fixer
    'computed-property-spacing': [
      'error',
      'never',
    ],

    // Certain lifecycle methods can only be used in certain class types.
    // #codelyzer
    'contextual-life-cycle': true,

    // Prevent possible accidental execution due to missing brackets
    // #tslint #has-fixer
    'curly': true,

    // Explicit behavior is easier to maintain.
    'default-case': 'error',

    // We should be alerted whenever using an identifier marked with a JSDoc `@deprecated` flag.
    // #tslint
    'deprecation': true,

    // Consistent conventions make it easy to quickly identify and reference assets of different types.
    // #codelyzer
    'directive-class-suffix': true,

    // a) Consistent conventions make it easy to quickly identify and reference assets of different types.
    // b) It is easier to recognize that a symbol is a directive by looking at the template’s HTML.
    // See https://angular.io/styleguide#style-02-06 https://angular.io/styleguide#style-02-08
    // #codelyzer
    'directive-selector': [
      true,
      'attribute',
      '',
      'camelCase',
    ],

    // Helps to maintain a consistent, readable style in the codebase.
    // #has-fixer
    'dot-location': [
      'error',
      'property',
    ],

    // The dot notation is often preferred because it is easier to read, less verbose, and works better with aggressive JavaScript
    // minimizers. It also keeps typings in place.
    // #has-fixer
    'dot-notation': 'error',

    // Omit the component selector makes debugging difficult.
    // #codelyzer
    'enforce-component-selector': true,

    // It is a standard convention to end files with a newline.
    // #has-fixer
    'eol-last': [
      'error',
      'always',
    ],

    // Strict equality is more explicit.
    // #has-fixer
    'eqeqeq': [
      'error',
      'always',
      {
        // Allow null checks
        'null': 'ignore',
      },
    ],

    // Protect against accidental infinite loops caused by iterating in the wrong direction.
    'for-direction': 'error',

    // Helps to maintain a consistent, readable style in the codebase.
    // #has-fixer
    'func-call-spacing': [
      'error',
      'never',
    ],

    // Helps to maintain a consistent, readable style in the codebase.
    // #has-fixer
    'function-paren-newline': [
      'error',
      'consistent',
    ],

    // A getter with no return serves no purpose.
    'getter-return': 'error',

    // Prevents accidental iteration over properties inherited from an object’s prototype.
    'guard-for-in': 'error',

    // Helps to maintain a consistent, readable style in the codebase.
    // #has-fixer
    'implicit-arrow-linebreak': [
      'error',
      'beside',
    ],

    // For some libraries, importing the library directly can cause unused submodules to be loaded, so you may want to block these imports
    // and require that users directly import only the submodules they need. In other cases, you may simply want to ban an import because
    // using it is undesirable or unsafe.
    // #tslint
    'import-blacklist': [
      true,
      'lodash',
    ],

    // Helps to maintain a consistent, readable style in the codebase.
    // #tslint
    'import-spacing': true,

    // Helps to maintain a consistent, readable style in the codebase.
    // #has-fixer
    'indent': [
      'error',
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
      },
    ],

    // Interfaces are generally preferred over type literals because interfaces can be implemented, extended and merged.
    // #tslint #has-fixer
    'interface-over-type-literal': true,

    // Helps to maintain a consistent, readable style in the codebase.
    // #tslint
    'jsdoc-format': [
      true,
      'check-multiline-start',
    ],

    // Helps to maintain a consistent, readable style in the codebase.
    'key-spacing': [
      'error',
      {
        'align': 'colon',
      },
    ],

    // Helps to maintain a consistent, readable style in the codebase.
    // #has-fixer
    'keyword-spacing': 'error',

    // Labels in JavaScript only can be used in conjunction with break or continue, constructs meant to be used for loop flow control. While
    // you can theoretically use labels on any block statement in JS, it is considered poor code structure to do so.
    // #tslint
    'label-position': true,

    // Enforce consistent line endings independent of operating system, VCS, or editor used across your codebase.
    // #has-fixer
    'linebreak-style': [
      'error',
      'unix',
    ],

    // Helps to maintain a consistent, readable style in the codebase.
    'line-comment-position': [
      'error',
      {
        'position': 'above',
      },
    ],

    // Helps to maintain a consistent, readable style in the codebase.
    'max-len': [
      'error',
      {
        'code': 140,
        'ignoreRegExpLiterals': true,
        'ignoreUrls': true,
      },
    ],

    // Explicit visibility declarations can make code more readable and accessible for those new to TS. Members lacking a visibility
    // declaration may be an indication of an accidental leak of class internals.
    // #tslint #has-fixer
    'member-access': [
      true,
      'check-accessor',
      'check-constructor',
    ],

    // A consistent ordering for class members can make classes easier to read, navigate, and edit.
    // #tslint #has-fixer
    'member-ordering': [
      true,
      {
        'order': 'fields-first',
      },
    ],

    // This rule is aimed at catching debugging code that should be removed and popup UI elements that should be replaced with less
    // obtrusive, custom UIs
    'no-alert': 'error',

    // Both formats of type assertions have the same effect, but only as type assertions work in .tsx files.
    // #tslint #has-fixer
    'no-angle-bracket-type-assertion': true,

    // Using any as a type declaration nullifies the compile-time benefits of the type system.
    // #tslint
    'no-any': true,

    // @Attribute is considered bad practice. Use @Input instead.
    // #codelyzer
    'no-attribute-parameter-decorator': true,

    // Bitwise operators are often typos - for example bool1 & bool2 instead of bool1 && bool2. They also can be an indicator of overly
    // clever code which decreases maintainability.
    'no-bitwise': 'error',

    // Comparing boolean values to boolean literals is unnecessary, as those expressions will result in booleans too.
    // #tslint #has-fixer
    'no-boolean-literal-compare': true,

    // Using arguments.callee makes various performance optimizations impossible.
    // See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments/callee
    'no-caller': 'error',

    // In certain places the arrow function syntax could be confused with a comparison operator.
    'no-confusing-arrow': 'error',

    // In general, console methods aren’t appropriate for production code.
    'no-console': 'error',

    // We cannot modify variables that are declared using const keyword. It will raise a runtime error.
    'no-const-assign': 'error',

    // A constant expression (for example, a literal) as a test condition might be a typo or development trigger for a specific behavior.
    'no-constant-condition': 'error',

    // In general, debugger statements aren’t appropriate for production code.
    'no-debugger': 'error',

    // If more than one parameter has the same name in a function definition, the last occurrence “shadows” the preceding occurrences. A
    // duplicated name might be a typing error.
    'no-dupe-args': 'error',

    // If there are declarations of the same name in class members, the last declaration overwrites other declarations silently. It can
    // cause unexpected behaviors.
    'no-dupe-class-members': 'error',

    // Multiple properties with the same key in object literals can cause unexpected behavior in your application.
    'no-dupe-keys': 'error',

    // If a switch statement has duplicate test expressions in case clauses, it is likely that a programmer copied a case clause but forgot
    // to change the test expression.
    'no-duplicate-case': 'error',

    // Using a single import statement per module will make the code clearer because you can see everything being imported from that module
    // on one line.
    'no-duplicate-imports': 'error',

    // The second call to ‘super()’ will fail at runtime.
    // #tslint
    'no-duplicate-super': true,

    // If an if block contains a return statement, the else block becomes unnecessary.
    // #has-fixer
    'no-else-return': 'error',

    // Empty blocks are often indicators of missing code.
    'no-empty': 'error',

    // An empty interface is equivalent to its supertype (or `{}`).
    // #tslint
    'no-empty-interface': true,

    // In contexts such as an if statement’s test where the result of the expression will already be coerced to a Boolean, casting to a
    // Boolean via double negation (!!) or a Boolean call is unnecessary.
    // #has-fixer
    'no-extra-boolean-cast': 'error',

    // Typing mistakes and misunderstandings about where semicolons are required can lead to semicolons that are unnecessary. While not
    // technically an error, extra semicolons can cause confusion when reading code.
    // #has-fixer
    'no-extra-semi': 'error',

    // eval() is dangerous as it allows arbitrary code execution with full privileges.
    'no-eval': 'error',

    // Fall though in switch statements is often unintentional and a bug.
    'no-fallthrough': [
      'error',
      {
        // A fallthrough is only allowed when a comment is added explicitly calling out the unique behavior.
        'commentPattern': 'break[\\s\\w]*omitted',
      },
    ],

    // Disallows importing modules that are not listed as dependency in the project’s package.json
    // #tslint
    'no-implicit-dependencies': true,

    // Explicit types where they can be easily inferred by the compiler make code more verbose.
    // #tslint #has-fixer
    'no-inferrable-types': true,

    // Two names for the same property (one private, one public) is inherently confusing.
    // #codelyzer
    'no-input-rename': true,

    // An invalid pattern in a regular expression literal is a SyntaxError when the code is parsed, but an invalid string in RegExp
    // constructors throws a SyntaxError only when the code is executed.
    'no-invalid-regexp': 'error',

    // Eliminate unnecessary and potentially confusing blocks at the top level of a script or within other blocks.
    'no-lone-blocks': 'error',

    // If an if statement is the only statement in the else block, it is often clearer to use an else if form.
    // #has-fixer
    'no-lonely-if': 'error',

    // Magic numbers should be avoided as they often lack documentation. Forcing them to be stored in variables gives them implicit
    // documentation.
    'no-magic-numbers': [
      'error',
      {
        // 1 can be useful in situations where it has no explicit value (eg `arr.length - 1`)
        'ignore': [1],
        // Allow targeting array indexes without a variable
        'ignoreArrayIndexes': true,
      },
    ],

    // Interfaces in TypeScript aren’t meant to describe constructors on their implementations.
    // #tslint
    'no-misused-new': true,

    // Enclosing complex expressions by parentheses clarifies the developer’s intention, which makes the code more readable.
    'no-mixed-operators': 'error',

    // Helps to maintain a consistent, readable style in the codebase.
    'no-mixed-spaces-and-tabs': 'error',

    // Helps to maintain a consistent, readable style in the codebase.
    // #has-fixer
    'no-multiple-empty-lines': [
      'error',
      {
        'max': 4,
        'maxEOF': 1,
      },
    ],

    // Negated conditions are more difficult to understand. Code can be made more readable by inverting the condition instead.
    'no-negated-condition': 'error',

    // There is little reason to use String, Number, or Boolean as constructors. In almost all cases, the regular function-call version is
    // more appropriate.
    'no-new-wrappers': 'error',

    // Using non-null assertion cancels the benefits of the strict null checking mode.
    // #tslint
    'no-non-null-assertion': true,

    // Two names for the same property (one private, one public) is inherently confusing.
    // See https://angular.io/styleguide#style-05-13
    // #codelyzer
    'no-output-rename': true,

    // Angular allows for an alternative syntax on-*. If the event itself was prefixed with on this would result in an on-onEvent binding
    // expression.
    // See https://angular.io/guide/styleguide#dont-prefix-output-properties
    // #codelyzer
    'no-output-on-prefix': true,

    // In JavaScript assignment can happen at almost any point. Because of this, an errant equals sign can end up causing assignment when
    // the true intent was to do a comparison. Because of this ambiguity, it’s considered a best practice to not use assignment in return
    // statements.
    'no-return-assign': 'error',

    // Self assignments have no effect, so probably those are an error due to incomplete refactoring.
    'no-self-assign': 'error',

    // When a variable in a local scope and a variable in the containing scope have the same name, shadowing occurs. Shadowing makes it
    // impossible to access the variable in the containing scope and obscures to what value an identifier actually refers.
    'no-shadow': 'error',

    // Missing elements are probably an accidentally duplicated comma.
    'no-sparse-arrays': 'error',

    // If `--noImplicitAny` is turned off, property access via a string literal will be ‘any’ if the property does not exist.
    // #tslint
    'no-string-literal': true,

    // It can be easy to use the wrong quotes when wanting to use template literals, by writing "${variable}", and end up with the literal
    // value "${variable}" instead of a string containing the value of the injected expressions.
    'no-template-curly-in-string': 'error',

    // Throwing a string lacks any stack trace information and other important data properties
    'no-throw-literal': 'error',

    // Keeps version control diffs clean as it prevents accidental whitespace from being committed.
    // #has-fixer
    'no-trailing-spaces': 'error',

    // Locate potential ReferenceErrors resulting from misspellings of variable and parameter names, or accidental implicit globals (for
    // example, from forgetting the var keyword in a for loop initializer).
    'no-undef': 'error',

    // Because undefined can be overwritten or shadowed, reading undefined can give an unexpected value.
    'no-undefined': 'error',

    // A variable that is declared and not initialized to any value automatically gets the value of undefined.
    // #has-fixer
    'no-undef-init': 'error',

    // Since we are using TypeScript to define public vs private items, using a leading underscore can be confusing.
    'no-underscore-dangle': [
      'error',
      {
      // Allow after `this` to enable private properties for getter/setter that cannot be named indentically.
        'allowAfterThis': true,
        'enforceInMethodNames': true,
      },
    ],

    // Warns if a type assertion does not change the type of an expression.
    // #tslint #has-fixer
    'no-unnecessary-type-assertion': true,

    // Disallow ternary operators when simpler alternatives exist.
    // #has-fixer
    'no-unneeded-ternary': 'error',

    // Because the return, throw, break, and continue statements unconditionally exit a block of code, any statements after them cannot be
    // executed. Unreachable statements are usually a mistake.
    'no-unreachable': 'error',

    // If you’re dealing with data of unknown or “any” types, you shouldn’t be accessing members of it. Either add type annotations for
    // properties that may exist or change the data type to the empty object type `{}`.
    // #tslint
    'no-unsafe-any': true,

    // Just as developers might type `-a + b` when they mean `-(a + b)` for the negative of a sum, they might type `!key` in object by
    // mistake when they almost certainly mean `!(key in object)` to test that a key is not in an object.
    'no-unsafe-negation': 'error',

    // Unused CSS is are likely an error due to incomplete refactoring.
    // #codelyzer #has-fixer
    'no-unused-css': true,

    // Detects potential errors where an assignment or function call was intended.
    'no-unused-expressions': 'error',

    // Variables that are declared and not used anywhere in the code are most likely an error due to incomplete refactoring. Such variables
    // take up space in the code and can lead to confusion by readers.
    'no-unused-vars': 'error',

    // It’s unnecessary to use computed properties with literals.
    // #has-fixer
    'no-useless-computed-key': 'error',

    // Useless string concatenation is likely the result of refactoring where a variable was removed from the concatenation.
    'no-useless-concat': 'error',

    // JavaScript implicitly adds a blank constructor when there isn’t one. It’s not necessary to manually add one in.
    'no-useless-constructor': 'error',

    // Declaring variables using var has several edge case behaviors that make var unsuitable for modern code. Variables declared by var
    // have their parent function block as their scope, ignoring other control flow statements. vars have declaration “hoisting” (similar to
    // functions) and can appear to be used before declaration.
    // #has-fixer
    'no-var': 'error',

    // Helps to maintain a consistent, readable style in the codebase.
    // #has-fixer
    'no-whitespace-before-property': 'error',

    // Helps to maintain a consistent, readable style in the codebase.
    // #has-fixer
    'object-curly-newline': [
      'error',
      {
        'minProperties': 2,
      },
    ],

    // Helps to maintain a consistent, readable style in the codebase.
    // #has-fixer
    'object-property-newline': 'error',

    // Enforces use of ES6 object literal shorthand.
    // #has-fixer
    'object-shorthand': [
      'error',
      'always',
    ],

    // Separating declarations one-per-line creates a more readable style.
    // #has-fixer
    'one-var': [
      'error',
      'always',
    ],

    // Helps to maintain a consistent, readable style in the codebase.
    // #has-fixer
    'operator-linebreak': [
      'error',
      'before',
    ],

    // Impure pipes do not perform well because they run on every change detection cycle.
    // #codelyzer
    'pipe-impure': true,

    // If a variable is never reassigned, using the const declaration is better.
    // #has-fixer
    'prefer-const': 'error',

    // Object spread allows for better type checking and inference.
    // #has-fixer
    'prefer-object-spread': 'error',

    // Helps to maintain a consistent, readable style in the codebase.
    // #has-fixer
    'prefer-template': 'error',

    // Helps to maintain a consistent, readable style in the codebase.
    // #has-fixer
    'quotes': [
      'error',
      'single',
      {
        'avoidEscape': true,
        'allowTemplateLiterals': true,
      },
    ],

    // Only property names which require quotes may be quoted (e.g. those with spaces in them).
    // #has-fixer
    'quote-props': [
      'error',
      'as-needed',
    ],

    // Always specify this parameter to eliminate reader confusion and to guarantee predictable behavior. Different implementations produce
    // different results when a radix is not specified, usually defaulting the value to 10.
    'radix': 'error',

    // Adding two variables not of the same type can easily cause unexpected behavior.
    // #tslint
    'restrict-plus-operands': true,

    // Helps to maintain a consistent, readable style in the codebase.
    // #has-fixer
    'rest-spread-spacing': 'error',

    // Prefer return; in void functions and return undefined; in value-returning functions.
    // #tslint
    'return-undefined': true,

    // Helps to maintain a consistent, readable style in the codebase.
    // #has-fixer
    'semi': [
      'error',
      'always',
    ],

    // Helps to maintain a consistent, readable style in the codebase.
    // #has-fixer
    'semi-spacing': 'error',

    // Helps to maintain a consistent, readable style in the codebase.
    // #has-fixer
    'semi-style': 'error',

    // Helps to maintain a consistent, readable style in the codebase.
    // #has-fixer
    'sort-imports': [
      'error',
      {
        'ignoreCase': true,
      },
    ],

    // Helps to maintain a consistent, readable style in the codebase.
    // #has-fixer
    'space-before-blocks': 'error',

    // Helps to maintain a consistent, readable style in the codebase.
    // #has-fixer
    'space-before-function-paren': [
      'error',
      'never',
    ],

    // Comments are easier to read when there is a space between the comment marker and the first character.
    // #has-fixer
    'spaced-comment': [
      'error',
      'always',
    ],

    // Helps to maintain a consistent, readable style in the codebase.
    // #has-fixer
    'space-infix-ops': 'error',

    // Helps to maintain a consistent, readable style in the codebase.
    // #has-fixer
    'space-in-parens': [
      'error',
      'never',
    ],

    // Helps to maintain a consistent, readable style in the codebase.
    // #has-fixer
    'space-unary-ops': 'error',

    // Angular’s async pipes emit null initially, prior to the observable emitting any values, or the promise resolving. This can cause
    // negations, like *ngIf=”!(myConditional | async)” to thrash the layout and cause expensive side-effects like firing off XHR requests
    // for a component which should not be shown.
    // #codelyzer
    'templates-no-negated-async': true,

    // Helps to maintain a consistent, readable style in the codebase.
    // #tslint #has-fixer
    'type-literal-delimiter': true,

    // Any two overloads that could be unified into one by using a union or an optional/rest parameter should be.
    // #tslint
    'unified-signatures': true,

    // The property associated with @HostBinding or the method associated with @HostListener can be modified only in a single place: in the
    // directive’s class. If you use the host metadata property, you must modify both the property declaration inside the controller, and
    // the metadata associated with the directive.
    // #codelyzer
    'use-host-property-decorator': true,

    // a) It is easier and more readable to identify which properties in a class are inputs.
    // b) If you ever need to rename the property name associated with @Input, you can modify it in a single place.
    // See https://angular.io/styleguide#style-05-12
    // #codelyzer
    'use-input-property-decorator': true,

    // Interfaces prescribe typed method signatures. Use those signatures to flag spelling and syntax mistakes.
    // #codelyzer
    'use-life-cycle-interface': true,

    // a) It is easier and more readable to identify which properties in a class are events.
    // b) If you ever need to rename the event name associated with @Output, you can modify it in a single place.
    // See https://angular.io/styleguide#style-05-12
    // #codelyzer
    'use-output-property-decorator': true,

    // Interfaces prescribe typed method signatures. Use those signatures to flag spelling and syntax mistakes.
    // #codelyzer
    'use-pipe-decorator': true,

    // Interfaces prescribe typed method signatures. Use those signatures to flag spelling and syntax mistakes.
    // #codelyzer
    'use-pipe-transform-interface': true,

    // Use a more natural way to describe the comparison.
    // #has-fixer
    'yoda': 'error',
  },
};
