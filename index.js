// The MIT License
// Copyright (C) 2017-Present Shota Matsuda

module.exports = {
  extends: 'airbnb',

  rules: {
    // Prefer line length limit over this rule
    'arrow-body-style': 0,

    // Won't cause any problem
    'arrow-parens': ['error', 'as-needed', {
      requireForBlockBody: false,
    }],

    // Insane
    'class-methods-use-this': 0,

    // Insane
    'no-bitwise': 0,

    // Allow for catch statements
    'no-empty': ['error', {
      allowEmptyCatch: true,
    }],

    // Limit to 80 except import/export expressions
    'max-len': ['error', 80, 2, {
      ignoreUrls: true,
      ignoreComments: false,
      ignoreRegExpLiterals: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
    }],

    // Allow for names ending with "Class"
    'new-cap': ['error', {
      newIsCap: true,
      newIsCapExceptions: [],
      newIsCapExceptionPattern: 'Class$',
      capIsNew: false,
      capIsNewExceptions: ['Immutable.Map', 'Immutable.Set', 'Immutable.List'],
    }],

    // We know the math
    'no-mixed-operators': ['error', {
      groups: [
        ['%', '**'],
        ['%', '+'],
        ['%', '-'],
        ['%', '*'],
        ['%', '/'],
        ['**', '+'],
        ['**', '-'],
        ['**', '*'],
        ['**', '/'],
        ['&', '|', '^', '~', '<<', '>>', '>>>'],
        ['==', '!=', '===', '!==', '>', '>=', '<', '<='],
        ['&&', '||'],
        ['in', 'instanceof'],
      ],
      allowSamePrecedence: false,
    }],

    // Not sure and we need to format codes carefully
    'no-nested-ternary': 0,

    // Insane
    'no-plusplus': 0,

    // Insane
    'no-shadow': 0,

    // Insane for arguments
    'no-unused-vars': ['error', {
      vars: 'all',
      args: 'none',
      ignoreRestSiblings: true,
    }],

    // Prefer simpler syntax
    semi: ['error', 'never'],

    // We disallowed semicolons
    'semi-style': ['error', 'first'],
  },
}
