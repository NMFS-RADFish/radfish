---
sidebar_position: 7
description: Ensure code quality with Vitest and React Testing Library
---

# Testing

Testing is a critical part of the software development process. Testing ensures the reliability and maintainability of your React application. This section provides an overview of several topics:
- Writing tests using [Vitest](https://vitest.dev/api/)
- Snapshot, unit, and browser testing with frameworks like [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- Debugging techniques for broken or failed tests
- Best practices for effective test writing

Effective testing in React using Vitest and related frameworks builds robust applications.  Remember, the goal of testing is not just to find bugs, but to build confidence in your codebase.

## Running Tests

Run tests with the following command: `npm test`

## Writing Unit Tests

Unit tests focus on testing individual components or functions in isolation.

1. **Basic Unit Test**

   ```jsx
   import {
     fullNameValidators,
     emailValidators,
     phoneNumberValidators,
     cityValidators,
     stateValidators,
     zipcodeValidators,
   } from "../../utilities";

   test("should validate a correct email format", () => {
     expect(emailValidators[0].test("example@test.com")).toBe(true);
   });
   ```

2. **Testing User Interactions**

Use **`user-event`** or **`fireEvent`** from React Testing Library to simulate user actions.

   ```jsx
   import { userEvent } from "@vitest/browser/context";
   import { screen } from "@testing-library/dom";

   test("triggers a double click on an element", async () => {
     const logo = screen.getByRole("img", { name: /logo/ });

     await userEvent.dblClick(logo);
   });
   ```

## Writing Browser Tests

Browser testing involves testing the application in a web browser environment. Tools like [Puppeteer](https://pptr.dev/) can be used alongside Vitest. Please note Puppeteer does not come included by default in the RADFish framework.

1. **Basic Browser Test**

   ```jsx
   const puppeteer = require("puppeteer");

   it("should display the homepage", async () => {
     const browser = await puppeteer.launch();
     const page = await browser.newPage();
     await page.goto("http://localhost:3000");
     await expect(page.title()).resolves.toMatch("Home Page");
     await browser.close();
   });
   ```

## Additional Vitest Configuration

Vitest and React Testing Library are included in the RADFish framework by default. The Vitest test configuration can be modified in the `vite.config.js` file. Refer to the official Vitest docs for the latest configuration options: [https://vitest.dev/config/](https://vitest.dev/config/).

## Debugging Broken or Failed Tests

1. **Review Test Output.** Vitest provides detailed error messages. Analyze them to understand the failure.
2. **Use `console.log`.** Temporarily add **`console.log`** statements within your test to inspect values.
3. **Check for Async Issues.** Ensure promises are resolved and state updates are completed.

## Best Practices

By following these best practices, you can ensure your code works as expected. Testing also ensures your code will be maintainable over time.

- **Descriptive Test Names.** Clearly describe what each test is checking.
- **Small and Focused Tests.** Write tests that cover single functionalities.
- **Avoid Over-Mocking.** Use mocks sparingly to ensure tests remain close to real-world scenarios.
- **Test User Interactions.** Simulate how users interact with your application.
- **Continuous Integration**. Integrate testing into your CI/CD pipeline for regular feedback.

## 508 Compliance
There are special steps to test whether your application meets 508 Compliance guidelines. Section 508 of the Rehabilitation Act mandates that federal agencies' electronic and information technology is accessible to people with disabilities, aligning with the Web Content Accessibility Guidelines (WCAG).

### 1. Set Up Your React Project

  Make sure your React application is operational locally, typically accessed at `http://localhost:3000`.

### 2. Automated Testing with Lighthouse

  1. **Open Google Chrome.** Ensure Google Chrome is installed and open your project by navigating to `http://localhost:3000`.
  2. **Access Chrome DevTools.** Right-click on the page and select "Inspect", or use `Ctrl+Shift+I` (Windows/Linux) or `Cmd+Option+I` (Mac) to open DevTools.
  3. **Run Lighthouse Audit.**
     - Click on the "Lighthouse" tab in the DevTools panel.
     - Check the "Accessibility" box to focus the audit on accessibility compliance.
     - Click "Analyze page load" to start the audit. Review the report that Lighthouse provides, detailing accessibility issues and suggestions for improvements.

### 3. Implement Recommendations

    Address each listed accessibility issue based on Lighthouse’s suggestions. For example, you might add alt text to images, use proper semantic HTML, or correct ARIA labels.

### 4. Rerun the Audit

    After making changes, run Lighthouse again. This will verify improvements and ensure no new issues have arisen.
