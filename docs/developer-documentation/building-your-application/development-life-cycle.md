---
sidebar_position: 1
description: Setting up web projects with RADFish
---

# Project Setup

When creating a web application in the NOAA ecosystem, take time to carefully set up your project. This will make ongoing development easier and reduce maintenance overhead. A proper setup follows best practices around file structure, linting, core frameworks, and build tooling. 

All new NOAA web applications must:

- support full-featured web forms. 
- adhere to compliance regulations.
- follow branding and style guidelines. 
- use standard environments and tools that are familiar to other NOAA developers.

To setup a new NOAA web app project, we recommend following [Getting Started](../getting-started) documentation.

## React Components

The following components are included by default with the RADFish Framework. The components build upon the ‣ component library, which adheres to [USWDS standards](https://designsystem.digital.gov/). For detailed information on the available components and what attributes they accept, please see the official storybook documentation: [https://trussworks.github.io/react-uswds/](https://trussworks.github.io/react-uswds/)

###Why Use React?

- **Responsive Design.** Automatically adjusts for different screen sizes with a collapsible menu.
- **Customizable.** Allows for easy customization of navigation links.
- **Integrated Search.** Includes a search bar for added functionality.
- **Branding.** Supports branding elements like logos in the header.

**Additional Notes**

- The **`@trussworks/react-uswds`** package is a requirement for this component to ensure proper styling and functionality. This package is included by default.
- Custom CSS can be applied for further customization.

##Resources

By integrating the [header](https://trussworks.github.io/react-uswds/?path=/docs/components-header--basic-header) components into your React application, you can create a professional and responsive UI with minimal effort. The **`Layout`** and **`HeaderNav`** components work together to provide a structured and navigable interface, enhancing the overall user experience.

---
