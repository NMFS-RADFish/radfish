---
sidebar_position: 2
---

# Project Setup

When setting up a web application within the NOAA ecosystem, it’s imperative that you setup your project properly in order to make life easier as development progresses. A strong setup includes proper development standards ie: File structure, linting, core frameworks, build tooling, etc.

For NOAA applications, tooling that supports full-featured web forms is a must. There are also branding/style guidelines and compliance regulations that must be adhered too. All of this must be considered when setting up a new project.

Setting up a project properly will improve developer velocity over the course of the project. In addition to this, it will limit maintenance overhead, especially if the project is setup using a standard environment and set of tools that are familiar to other NOAA developers.

To setup a new NOAA web app project, we recommend following the instructions outlined in our [“Getting Started”](https://github.com/NMFS-RADFish/cli) documentation.

## React Components

The following components are included by default with the RADFish Framework. The components build upon the ‣ component library, which adheres to [USWDS standards](https://designsystem.digital.gov/). For detailed information on the available components and what attributes they accept, please see the official storybook documentation: [https://trussworks.github.io/react-uswds/](https://trussworks.github.io/react-uswds/)

### Layout Component

The **`Layout`** component is a wrapper component used to structure the main layout of a React application. It leverages components from the **`@trussworks/react-uswds`** package, specifically **`GridContainer`**, to provide a grid-based layout. The component also includes a **`HeaderNav`** component for navigation purposes.

**Usage**

To use the **`Layout`** component, wrap it around the main content of your application. The children of the **`Layout`** component are placed inside a **`GridContainer`**, which provides a responsive grid layout.

```jsx
import Layout from "./Layout";

const App = () => {
  return (
    <Layout>
      <main>{/* Your main content goes here */}</main>
    </Layout>
  );
};

export default App;
```

**Why Use It**

- **Consistency**: Ensures a consistent layout across different pages of the application.
- **Flexibility**: Easily add or modify content within the layout.
- **Grid System**: Takes advantage of the grid system for responsive design.

**Resources**

- [https://trussworks.github.io/react-uswds/?path=/docs/components-grid--default-container](https://trussworks.github.io/react-uswds/?path=/docs/components-grid--default-container)

### HeaderNav Component

The **`HeaderNav`** component is a customizable navigation header. It uses the **`Header`**, **`NavMenuButton`**, **`PrimaryNav`**, and **`Search`** components from **`@trussworks/react-uswds`**. The component is designed to be responsive and includes a toggle-able navigation menu for smaller screens.

The **`HeaderNav`** component is integrated into the **`Layout`** component. It accepts navigation links as the children elements, which are rendered as part of the primary navigation. Below is an example of how it is used within the `Layout` component.

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

**Why Use It**

- **Responsive Design**: Automatically adjusts for different screen sizes with a collapsible menu.
- **Customizable**: Allows for easy customization of navigation links.
- **Integrated Search**: Includes a search bar for added functionality.
- **Branding**: Supports branding elements like logos in the header.

**Additional Notes**

- The **`@trussworks/react-uswds`** package is a requirement for this component to ensure proper styling and functionality. This package is included by default.
- Custom CSS can be applied for further customization.

**Resources**

- [https://trussworks.github.io/react-uswds/?path=/docs/components-header--basic-header](https://trussworks.github.io/react-uswds/?path=/docs/components-header--basic-header)

By integrating these components into your React application, you can create a professional and responsive UI with minimal effort. The **`Layout`** and **`HeaderNav`** components work together to provide a structured and navigable interface, enhancing the overall user experience.

```jsx
import HeaderNav from "./HeaderNav";

const MyHeader = () => {
  return (
    <HeaderNav>
      <a href="/">Home</a>
      <a href="/about">About</a>
      {/* Additional navigation links */}
    </HeaderNav>
  );
};

export default MyHeader;
```

---
