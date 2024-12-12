---
sidebar_position: 7
description: Ensures consistent code quality and style
---

# Prettier and ESLint

[Prettier](https://prettier.io/) is an automatic code formatter. [ESLint](https://eslint.org/) analyzes code to find problems and errors in a process known as _linting_. 

## Why we chose this
Consistency in code quality and style is crucial for collaborative projects like RADFish. Prettier and ESLint automate formatting and linting. This ensures all code adheres to best practices and is accessible to all developers working on NOAA projects.

## Trade-offs 
Enforcing a specific coding style may require initial adjustments for developers. However, the long-term benefits of maintainable and error-free code outweigh this adjustment period. Also, these standards can be enforced automatically via code editor configuration setups. For example, developers can use the the “on-save” linting of VSCode.

## Alternatives
[TSLint](https://palantir.github.io/tslint/) (deprecated in favor of ESLint in 2019) and [Stylelint](https://stylelint.io/) are alternatives to ESLint. They focus on on TypeScript and CSS, respectively. While they offer specialized linting capabilities, the combination of Prettier and ESLint covers a broader range of RADFish's code quality needs. Prettier and ESLint provide JavaScript styling and linting with a unified setup, making them more suitable than using separate tools for different languages.
