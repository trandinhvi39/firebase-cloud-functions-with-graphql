module.exports = {
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module"
  },
  extends: "airbnb",
  env: {
    browser: true,
    jest: true
  },
  rules: {
    indent: [
      "error",
      2,
      {
        SwitchCase: 1
      }
    ],
    "linebreak-style": 0,
    quotes: [
      "error",
      "double",
      {
        avoidEscape: true,
        allowTemplateLiterals: true
      }
    ],
    semi: [2, "always"],
    "arrow-parens": ["off"],
    "import/no-extraneous-dependencies": [
      "error",
      {
        devDependencies: true
      }
    ],
    "no-underscore-dangle": [
      0,
      {
        enforceInMethodNames: true
      }
    ],
    "func-names": 0,
    "space-before-function-paren": 0,
    "no-return-await": "off",
    "no-plusplus": "off",
    "no-console": "off",
    "no-nested-ternary": "off",
    "no-await-in-loop": "off",
    "class-methods-use-this": "off",
    "no-restricted-properties": "off",
    "no-useless-escape": "off",
    "react/destructuring-assignment": "off",
    "operator-linebreak": "off",
    "implicit-arrow-linebreak": "off",
    "space-before-function-paren": "off",
    "object-curly-newline": "off",
    "function-paren-newline": "off",
    "import/no-named-default": "off",
    "comma-dangle": "off",
    "import/prefer-default-export": "off"
  }
};
