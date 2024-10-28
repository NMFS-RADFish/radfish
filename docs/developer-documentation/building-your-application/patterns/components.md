---
sidebar_position: 5
description: Learn to build and structure your components
---

# Components and Usage

## Building your first page and form

When building applications with React, there is an existing component library, [react-uswds](https://trussworks.github.io/react-uswds/?path=/docs/welcome--docs) that our project extends for the purposes of building any RADFish application. These components maintain all functionality of `react-uswds` components, but are branded with NOAA themes and styles. These components live in `react-radfish` directory, and allow for development in a modern React environment with NOAA look and feel.

For reference on the full `react-uswds` library, you can reference the deployed storybook:

[https://trussworks.github.io/react-uswds/](https://trussworks.github.io/react-uswds/?path=/docs/welcome--docs)

**Example**

If you wanted to build a `TextInput` component into an existing form, you can use the `@trussworks` [storybook reference](https://trussworks.github.io/react-uswds/?path=/docs/components-text-input--docs) related to component props that are available.

```jsx

import { TextInput, Label } from "@trussworks/react-uswds";

<Label htmlFor="fullName">Full Name</Label>
<TextInput
  id="fullName"
  name="fullName"
  type="text"
  placeholder="Full Name"
  value={formData["fullName"] || ""}
  aria-invalid={validationErrors.fullName ? "true" : "false"}
  validationStatus={validationErrors.fullName ? "error" : undefined}
  onChange={handleChange}
  onBlur={(e) => handleBlur(e, fullNameValidators)}
/>
```

### Forms

Controlled forms are a key aspect of any NOAA application, and is used to collect data relevant to that application in the context of the user. This could be intaking data related to trip reports, admin applications, or similar types of scope.

For more specific information regarding how to build a form, you can reference the [State Management](./state-management.md) portion of this documentation.

### Tables

Tables are also a key component type for all NOAA applications. These components are usually meant for visualizing data in a user friendly manner. However, there are cases where having this data also be writable (ie: submittable) to a backend. Utilizing caching strategies with IndexedDB is an effective way to ensure that these types of components remain fully functional when offline.

For more specific information regarding how to build a table, you can reference the [State Management](./state-management.md) portion of this documentation.

## Styling Methodology: BEM

In our **examples** and **templates**, we follow the **BEM (Block Element Modifier)** methodology for organizing CSS classes. BEM helps create a structured and scalable CSS architecture, making it easier to understand where CSS classes belong and how they relate to components. It also promotes consistency and readability, especially in larger codebases.

For more information on BEM and how it works, you can visit the official BEM documentation: [https://getbem.com](https://getbem.com).

### Why We Use BEM:

- **Clarity**: BEM conventions make it clear how styles are applied across different parts of a component.
- **Modularity**: It encourages the separation of styling concerns, making components more modular and reusable.
- **Scalability**: As your project grows, BEM helps maintain organized and manageable CSS.

#### Flexibility for Your Project:

While we use BEM in our **examples** and **templates** to enhance code clarity and consistency, you are not required to adopt BEM in your own project. Feel free to use any CSS methodology or framework that suits your needs, whether it’s **BEM**, **CSS Modules**, **Tailwind**, or any other approach.

Our use of BEM is limited to the examples and templates provided, so it won’t affect how you structure your own styles. You can implement your own styling approach while still benefiting from the components and patterns showcased in our examples.
