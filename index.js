//
//  The MIT License
//
//  Copyright (C) 2017-Present Shota Matsuda
//
//  Permission is hereby granted, free of charge, to any person obtaining a
//  copy of this software and associated documentation files (the "Software"),
//  to deal in the Software without restriction, including without limitation
//  the rights to use, copy, modify, merge, publish, distribute, sublicense,
//  and/or sell copies of the Software, and to permit persons to whom the
//  Software is furnished to do so, subject to the following conditions:
//
//  The above copyright notice and this permission notice shall be included in
//  all copies or substantial portions of the Software.
//
//  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
//  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
//  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
//  THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
//  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
//  FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
//  DEALINGS IN THE SOFTWARE.
//

/* eslint-disable quote-props */

module.exports = {
  'parserOptions': {
    'ecmaVersion': 2017,
    'sourceType': 'module',
    'ecmaFeatures': {
      'generators': false,
      'objectLiteralDuplicateProperties': false,
    },
  },

  'extends': 'airbnb',

  'rules': {
    // Prefer line length limit over this
    'arrow-body-style': 0,

    // Won't cause any problem
    'arrow-parens': ['error', 'as-needed', {
      'requireForBlockBody': false,
    }],

    // Insane
    'class-methods-use-this': 0,

    // Insane
    'no-bitwise': 0,

    // Allow for catch statements
    'no-empty': ['error', {
      'allowEmptyCatch': true,
    }],

    // Limit to 80 except import/export expressions
    'max-len': ['error', {
      'code': 80,
      'ignorePattern': '^\\s*(import|export)',
    }],

    // Allow for names ending with "Class"
    'new-cap': ['error', {
      'newIsCap': true,
      'newIsCapExceptions': [],
      'newIsCapExceptionPattern': 'Class$',
      'capIsNew': false,
    }],

    // We know the math
    'no-mixed-operators': ['error', {
      'groups': [
        ['&', '|', '^', '~', '<<', '>>', '>>>'],
        ['==', '!=', '===', '!==', '>', '>=', '<', '<='],
        ['&&', '||'],
        ['in', 'instanceof'],
      ],
      'allowSamePrecedence': false,
    }],

    // Not sure and we need to format codes carefully
    'no-nested-ternary': 0,

    // Insane
    'no-plusplus': 0,

    // Insane
    'no-shadow': 0,

    // Insane for arguments
    'no-unused-vars': ['error', {
      'vars': 'all',
      'args': 'none',
    }],

    // Prefer simpler syntax
    'semi': ['error', 'never'],
  },
}
