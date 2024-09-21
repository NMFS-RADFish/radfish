---
sidebar_position: 3
description: Setting up web projects with RADFish
---

# Project Setup

When setting up a web application within the NOAA ecosystem, it’s imperative that you setup your project properly in order to make life easier as development progresses. A strong setup includes proper development standards ie: File structure, linting, core frameworks, build tooling, etc.

For NOAA applications, tooling that supports full-featured web forms is a must. There are also branding/style guidelines and compliance regulations that must be adhered too. All of this must be considered when setting up a new project.

Setting up a project properly will improve developer velocity over the course of the project. In addition to this, it will limit maintenance overhead, especially if the project is setup using a standard environment and set of tools that are familiar to other NOAA developers.

To setup a new NOAA web app project, we recommend following the instructions outlined in our [Getting Started](../getting-started) documentation.

## React Components

The following components are included by default with the RADFish Framework. The components build upon the ‣ component library, which adheres to [USWDS standards](https://designsystem.digital.gov/). For detailed information on the available components and what attributes they accept, please see the official storybook documentation: [https://trussworks.github.io/react-uswds/](https://trussworks.github.io/react-uswds/)

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

---
