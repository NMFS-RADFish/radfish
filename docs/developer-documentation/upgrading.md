---
sidebar_position: 5
---

# Upgrading

## How to keep your RADFish project up to date

Keeping your project up to date with the latest RADFish versions is essential for stability, security, and accessing the latest features. Below is a step-by-step guide on how to update your RADFish packages and ensure your project remains free of warnings and errors.

### 1. Upgrade packages

    1. **Run command**: In the root of your project run:
        ```bash
        npm update
        ```

        This will update both `@nmfs-radfish/radfish` and `@nmfs-radfish/react-radfish` along with their dependencies to the latest compatible versions.

    2. **Check for Changes:**  After running the update, you should verify that everything is working as expected. It's a good practice to run your test suite to catch any potential issues:
        ```bash
        npm test
        ```

### 2. Handling Warnings During Updates

    While updating your packages, you might encounter warnings(not necessarily RADFish-specific). These warnings often occur when certain packages in your project are outdated or incompatible. To get rid of these warnings:

    1. **Check for outdated packages:** Run the command below to list all outdated packages, including those not related to RADFish.
        ```bash
        npm outdated
        ```

    2. **Update dependencies:** You can selectively update non-react-radfish packages by running:
        ```bash
        npm update <package-name>
        ```

    3. **Resolve peer dependency warnings:** Some warnings may be related to peer dependencies. To resolve these, you might need to install or update the required dependencies manually.
        ```bash
        npm install <peer-dependency-name>
         ```

    4. **Remove deprecated packages:** If the warning is about deprecated packages, it’s a good idea to check if these packages are still necessary and remove them if they’re not.
        ```bash
        npm uninstall <deprecated-package>
        ```

### 3. Overview of Packages managed in `radfish` and `react-radfish`

In your RADFish project, the following packages are managed and should be kept up to date:

#### 1. @nmfs-radfish/radfish:
This package handles the core logic and utilities for RADFish. It manages several dependencies that are essential for the functionality of the RADFish system:

   - **Dependencies:**
        - `dexie`: A minimalistic IndexedDB wrapper for managing databases.
        - `msw`: A library for mocking API requests in development and testing environments.
        - `react`: The core React library required for building user interfaces in RADFish projects.

#### 2. @nmfs-radfish/react-radfish:

   This package provides UI components for React applications using RADFish. It manages several dependencies that enhance the user interface and functionality:

   - **Dependencies:**

        - `@tanstack/react-table`: A headless table library for building powerful data tables in React.
        - `@trussworks/react-uswds`: A component library that implements the U.S. Web Design System (USWDS) for React.

   - **DevDependencies**:
        - `@testing-library/dom`: Utility for testing DOM nodes.
        - `@testing-library/jest-dom`: Custom Jest matchers for asserting on DOM nodes.
        - `@testing-library/react`: Testing utilities for React components.
        - `@vitejs/plugin-react`: A Vite plugin that provides React support.
        - `jsdom`: JavaScript implementation of the DOM for testing.
        - `vite-plugin-css-injected-by-js`: A Vite plugin for injecting CSS in JavaScript.
        - `vitest`: A Vite-native unit testing framework.
