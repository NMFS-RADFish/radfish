---
sidebar_position: 7
---

# Prettier/ESLint

- **Why we chose this:** Consistency in code quality and style is crucial for collaborative projects like RADFish. Prettier and ESLint automate formatting and linting, ensuring code adheres to best practices and is accessible to all developers working on NOAA projects.
- **Trade-offs:** Enforcing a specific coding style may require initial adjustments for developers. However, the long-term benefits of maintainable and error-free code outweigh these adjustments. Also, these standards can be enforced automatically via code editor configuration setups eg. the “on-save” linting of VSCode.

TSLint (now deprecated in favor of ESLint) and Stylelint are alternatives focused on TypeScript and CSS, respectively. While they offer specialized linting capabilities, the combination of Prettier and ESLint covers a broader range of RADFish's code quality needs across JavaScript and styling with a unified setup, making them more suitable than using separate tools for different languages.

---
