# Code Style Guide

<aside>
🚧 The configs in this document are not final. The main purpose of this page is to describe which formatters we’re using.

</aside>

# Code Formatting

## Prettier

A default **`.prettierrc`** configuration file for Prettier, typically contains some basic settings that define how the code is formatted. Here's an example of what it might look like:

```json
{
  "semi": true,
  "trailingComma": "none",
  "singleQuote": true,
  "printWidth": 80,
  "tabWidth": 2,
  "useTabs": false
}
```

# ESLint

A default configuration file for a JavaScript linter like ESLint when formatted in JSON typically includes rules for code quality and coding style. For ESLint, a basic **`.eslintrc.json`** file might look like this:

```json
{
  "env": {
    "browser": true,
    "es6": true,
    "node": true
  },
  "extends": "eslint:recommended",
  "globals": {
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly"
  },
  "parserOptions": {
    "ecmaVersion": 2018,
    "sourceType": "module"
  },
  "rules": {
    "indent": ["error", 2],
    "linebreak-style": ["error", "unix"],
    "quotes": ["error", "single"],
    "semi": ["error", "always"]
  }
}
```

In this configuration:

- **`"env"`**: Specifies the environments your code is designed to run in. Common environments are browser, Node.js, or ES6 for ECMAScript 2015 features.
- **`"extends"`**: Indicates which set of rules you are extending. Here, it's **`eslint:recommended`**, which includes a core set of rules recommended by ESLint.
- **`"globals"`**: Declares global variables that are read-only.
- **`"parserOptions"`**: Configures the parser. For example, **`ecmaVersion`** is set to 2018 to allow for modern ES6 features, and **`sourceType`** is set to **`module`** if you are using ES6 modules.
- **`"rules"`**: Defines specific rules for your code. For example, **`indent`** is set to 2 spaces, **`linebreak-style`** to Unix style, **`quotes`** to single, and **`semi`** to always require semicolons.
