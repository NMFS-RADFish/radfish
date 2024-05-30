---
sidebar_position: 9
---

# Testing

Testing is a critical part of the software development process, ensuring the reliability and maintainability of your React application. This section provides an overview of writing tests using [Jest](https://jestjs.io/), along with additional frameworks like [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) for different types of tests: snapshot, unit, and browser testing. This section also covers debugging techniques for broken or failed tests and best practices for effective test writing.

### **Running Tests**

Run tests with the following command: `npm test`

### **Writing Unit Tests**

Unit tests focus on testing individual components or functions in isolation.

1. **Basic Unit Test**:

   ```jsx
   import React from "react";
   import { render, screen } from "@testing-library/react";
   import MyComponent from "./MyComponent";

   it("renders the correct content", () => {
     render(<MyComponent />);
     expect(screen.getByText("Content")).toBeInTheDocument();
   });
   ```

2. **Testing User Interactions**:

   Utilize **`user-event`** or **`fireEvent`** from React Testing Library to simulate user actions.

   ```jsx
   import userEvent from "@testing-library/user-event";

   // Example: Clicking a button
   userEvent.click(screen.getByRole("button"));
   ```

### **Writing Snapshot Tests**

Snapshot testing captures the rendered output of a component and ensures that it does not change unexpectedly.

1. **Create a Snapshot Test**:

   ```jsx
   import React from "react";
   import renderer from "react-test-renderer";
   import MyComponent from "./MyComponent";

   it("renders correctly", () => {
     const tree = renderer.create(<MyComponent />).toJSON();
     expect(tree).toMatchSnapshot();
   });
   ```

   If the component's output changes, Jest will alert you, and you can decide whether to update the snapshot.

### **Writing Browser Tests**

Browser testing involves testing the application in a web browser environment. Tools like [Puppeteer](https://pptr.dev/) can be used alongside Jest. Please note Puppeteer does not come included by default in the RADFish framework.

1. **Basic Browser Test**:

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

### Additional Jest Configuration

Jest and React Testing Library is included in the RADFish framework by default. Modifying the Jest test configuration can be configured in the `jest.config.js` file. Please see the official Jest docs for the latest configuration options: [https://jestjs.io/docs/configuration](https://jestjs.io/docs/configuration).

### **Debugging Broken or Failed Tests**

1. **Review Test Output**: Jest provides detailed error messages. Analyze them to understand the failure.
2. **Use `console.log`**: Temporarily add **`console.log`** statements within your test to inspect values.
3. **Isolate the Test**: Run only the failing test using **`it.only`** to focus your debugging efforts.
4. **Check for Async Issues**: Ensure promises are resolved and state updates are completed.

### **Best Practices**

1. **Descriptive Test Names**: Clearly describe what each test is checking.
2. **Small and Focused Tests**: Write tests that cover single functionalities.
3. **Avoid Over-Mocking**: Use mocks sparingly to ensure tests remain close to real-world scenarios.
4. **Test User Interactions**: Simulate how users interact with your application.
5. **Continuous Integration**: Integrate testing into your CI/CD pipeline for regular feedback.

Effective testing in React using Jest and related frameworks is key to building robust applications. By following this section and adhering to best practices, you can ensure your React components work as expected and are maintainable over time. Remember, the goal of testing is not just to find bugs, but to build confidence in your codebase.

---
