# React RADFish Components

### Building your first page and form

When building applications with React, there is an existing component library, [react-uswds](https://trussworks.github.io/react-uswds/?path=/story/welcome--welcome) that our project extends for the purposes of building any Radfish application. These components maintain all functionality of `react-uswds` components, but are branded with NOAA themes and styles. These components live in `react-radfish` directory, and allow for development in a modern React environment with NOAA look and feel.

For reference on the full `react-uswds` library, you can reference the deployed storybook:

[https://trussworks.github.io/react-uswds/](https://trussworks.github.io/react-uswds/?path=/story/welcome--welcome)

> 🚨 Note: Whenever possible, you should use components from `react-radfish` rather than importing components directly from `@trussworks/react-uswds`. This ensures that the component you are using have the correctly styles and theme applied.

**Example**

If you wanted to build a `TextInput` component into an existing form, you can use the `@trussworks` [storybook reference](https://trussworks.github.io/react-uswds/?path=/docs/components-text-input--default-text-input) related to component props that are available.

However, this component should be imported from `react-radfish`. Since `react-radfish` extends the `@trussworks` library, you should have all the functionality from the underlying component:

```jsx

import { TextInput, Label } from "../react-radfish";

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

### Setting the layout of the application

#### Layout Component ([Layout.js](src/components/Layout.js))

The **`Layout`** component is a wrapper component used to structure the main layout of a React application. It leverages components from the **`@trussworks/react-uswds`** package, specifically [GridContainer](https://trussworks.github.io/react-uswds/?path=/docs/components-grid--default-container), to provide a grid-based layout. The component also includes a **`HeaderNav`** component for navigation purposes.

**Usage**

To use the **`Layout`** component, wrap it around the main content of your application. The children of the **`Layout`** component are placed inside a **`GridContainer`**, which provides a responsive grid layout.

```jsx
import Layout from "./components/Layout";

const App = () => {
  return (
    <Layout>
      <main>{/* Your main content goes here */}</main>
    </Layout>
  );
};

export default App;
```

#### HeaderNav Component ([HeaderNav.js](src/components/HeaderNav.js))

The **`HeaderNav`** component is a customizable navigation header. It uses the **`Header`**, **`NavMenuButton`**, **`PrimaryNav`**, and **`Search`** components from [`@trussworks/react-uswds`](https://trussworks.github.io/react-uswds/?path=/docs/components-header--basic-header). The component is designed to be responsive and includes a toggle-able navigation menu for smaller screens.

The **`HeaderNav`** component is integrated into the **`Layout`** component. It accepts navigation links as the children elements, which are rendered as part of the primary navigation. Below is an example of how it is used within the `Layout` component.

**Usage**

```jsx
import HeaderNav from "./HeaderNav";

const Layout = () => {
  return (
    <>
      <HeaderNav>
        <a href="/">Home</a>
        <a href="/about">About</a>
        {/* Additional navigation links */}
      </HeaderNav>
      <GridContainer>{children}</GridContainer>;
    </>
  );
};

export default Layout;
```
