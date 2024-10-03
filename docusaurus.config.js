// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "RADFish Documentation",
  tagline: "Frontend Development Tooling for NOAA Developers",
  favicon: "img/favicon.ico",
  staticDirectories: ["static"],

  // Set the production url of your site here
  url: "https://NMFS-RADFish.github.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/radfish/",
  trailingSlash: false,
  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "NMFS-RADFish", // Usually your GitHub org/user name.
  projectName: "documentation", // Usually your repo name.

  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },
  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: "/",
          sidebarPath: "./sidebars.js",
        },
        blog: false,
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],
  plugins: [
    [
      "docusaurus-plugin-remote-content",
      {
        // Computed Form Fields
        // Remote content configuration to fetch repo README.md for 
        // https://github.com/NMFS-RADFish/boilerplate/tree/main/examples/computed-form-fields#readme
        name: "computed-form-fields", // used by CLI, must be path safe
        sourceBaseUrl:
          "https://raw.githubusercontent.com/NMFS-RADFish/boilerplate/main/examples/",
        outDir: "docs/developer-documentation/examples-and-templates/examples/", // the base directory to output to.
        documents: ["computed-form-fields/README.md"], // the file to download
        modifyContent(filename, content) {
          return {
            filename: readmeToNamedMd(filename),
            content: `---
description: This example includes an example on how to build a form where the values of certain input fields compute the value of a separate readOnly input field elsewhere in the form.
title: Computed Form Fields
id: computed-form-fields
---

${content}`,
          };
        },
      },
    ],
    [
      "docusaurus-plugin-remote-content",
      {
        // Conditional Form Fields
        // Remote content configuration to fetch repo README.md for 
        // https://github.com/NMFS-RADFish/boilerplate/tree/main/examples/conditional-form-fields#readme
        name: "conditional-form-fields", // used by CLI, must be path safe
        sourceBaseUrl:
          "https://raw.githubusercontent.com/NMFS-RADFish/boilerplate/main/examples/",
        outDir: "docs/developer-documentation/examples-and-templates/examples/", // the base directory to output to.
        documents: ["conditional-form-fields/README.md"], // the file to download
        modifyContent(filename, content) {
          return {
            filename: readmeToNamedMd(filename),
            content: `---
description: This example includes an example on how to build a form where the values of certain input fields control the visibility of other fields within that form.
title: Conditional Form Fields
id: conditional-form-fields
---

${content}`,
          };
        },
      },
    ],
    [
      "docusaurus-plugin-remote-content",
      {
        // Field Validators
        // Remote content configuration to fetch repo README.md for 
        // https://github.com/NMFS-RADFish/boilerplate/tree/main/examples/field-validators#readme
        name: "field-validators", // used by CLI, must be path safe
        sourceBaseUrl:
          "https://raw.githubusercontent.com/NMFS-RADFish/boilerplate/main/examples/",
        outDir: "docs/developer-documentation/examples-and-templates/examples/", // the base directory to output to.
        documents: ["field-validators/README.md"], // the file to download
        modifyContent(filename, content) {
          return {
            filename: readmeToNamedMd(filename),
            content: `---
description: This example demonstrates how to enforce field validation logic on certain fields within your form. 
title: Field Validators
id: field-validators
---

${content}`,
          };
        },
      },
    ],
    [
      "docusaurus-plugin-remote-content",
      {
        // Network Status
        // Remote content configuration to fetch repo README.md for 
        // https://github.com/NMFS-RADFish/boilerplate/tree/main/examples/network-status#readme
        name: "network-status", // used by CLI, must be path safe
        sourceBaseUrl:
          "https://raw.githubusercontent.com/NMFS-RADFish/boilerplate/main/examples/",
        outDir: "docs/developer-documentation/examples-and-templates/examples/", // the base directory to output to.
        documents: ["network-status/README.md"], // the file to download
        modifyContent(filename, content) {
          return {
            filename: readmeToNamedMd(filename),
            content: `---
description: This example shows you how to detect if a user has network connectivity. 
title: Network Status
id: network-status
---

${content}`,
          };
        },
      },
    ],
    [
      "docusaurus-plugin-remote-content",
      {
        // Mock API
        // Remote content configuration to fetch repo README.md for 
        // https://github.com/NMFS-RADFish/boilerplate/tree/main/examples/mock-api#readme
        name: "mock-api", // used by CLI, must be path safe
        sourceBaseUrl:
          "https://raw.githubusercontent.com/NMFS-RADFish/boilerplate/main/examples/",
        outDir: "docs/developer-documentation/examples-and-templates/examples/", // the base directory to output to.
        documents: ["mock-api/README.md"], // the file to download
        modifyContent(filename, content) {
          return {
            filename: readmeToNamedMd(filename),
            content: `---
description: This example includes how to setup and use mock service worker and the native fetch API to build out a mock API on the frontend to consume without needing to rely on a backend system. 
title: Mock API
id: mock-api
---

${content}`,
          };
        },
      },
    ],
    [
      "docusaurus-plugin-remote-content",
      {
        // On Device Storage
        // Remote content configuration to fetch repo README.md for 
        // https://github.com/NMFS-RADFish/boilerplate/tree/main/examples/on-device-storage#readme
        name: "on-device-storage", // used by CLI, must be path safe
        sourceBaseUrl:
          "https://raw.githubusercontent.com/NMFS-RADFish/boilerplate/main/examples/",
        outDir: "docs/developer-documentation/examples-and-templates/examples/", // the base directory to output to.
        documents: ["on-device-storage/README.md"], // the file to download
        modifyContent(filename, content) {
          return {
            filename: readmeToNamedMd(filename),
            content: `---
description: This example includes how to setup and use the on-device storage using IndexedDB and Dexie.js.
title: On Device Storage
id: on-device-storage
---

${content}`,
          };
        },
      },
    ],
    [
      "docusaurus-plugin-remote-content",
      {
        // Multistep Form
        // Remote content configuration to fetch repo README.md for 
        // https://github.com/NMFS-RADFish/boilerplate/tree/main/examples/multistep-form#readme
        name: "multistep-form", // used by CLI, must be path safe
        sourceBaseUrl:
          "https://raw.githubusercontent.com/NMFS-RADFish/boilerplate/main/examples/",
        outDir: "docs/developer-documentation/examples-and-templates/examples/", // the base directory to output to.
        documents: ["multistep-form/README.md"], // the file to download
        modifyContent(filename, content) {
          return {
            filename: readmeToNamedMd(filename),
            content: `---
description: This example includes an example on how to build a form that includes multiple "steps"
title: Multistep Form
id: multistep-form 
---

${content}`,
          };
        },
      },
    ],
    [
      "docusaurus-plugin-remote-content",
      {
        // ServerSync
        // Remote content configuration to fetch repo README.md for 
        // https://github.com/NMFS-RADFish/boilerplate/tree/main/examples/server-sync#readme
        name: "server-sync", // used by CLI, must be path safe
        sourceBaseUrl:
          "https://raw.githubusercontent.com/NMFS-RADFish/boilerplate/main/examples/",
        outDir: "docs/developer-documentation/examples-and-templates/examples/", // the base directory to output to.
        documents: ["server-sync/README.md"], // the file to download
        modifyContent(filename, content) {
          return {
            filename: readmeToNamedMd(filename),
            content: `---
description: The ServerSync component is responsible for synchronizing data between a client application and a remote server.
title: ServerSync
id: server-sync 
---

${content}`,
          };
        },
      },
    ],
    [
      "docusaurus-plugin-remote-content",
      {
        // React Query
        // Remote content configuration to fetch repo README.md for 
        // https://github.com/NMFS-RADFish/boilerplate/tree/main/examples/react-query#readme
        name: "react-query", // used by CLI, must be path safe
        sourceBaseUrl:
          "https://raw.githubusercontent.com/NMFS-RADFish/boilerplate/main/examples/",
        outDir: "docs/developer-documentation/examples-and-templates/examples/", // the base directory to output to.
        documents: ["react-query/README.md"], // the file to download
        modifyContent(filename, content) {
          return {
            filename: readmeToNamedMd(filename),
            content: `---
description: This example shows you how you could use the React Query library to manage state in your application.
title: React Query
id: react-query 
---

${content}`,
          };
        },
      },
    ],
    [
      "docusaurus-plugin-remote-content",
      {
        // Persisted Form
        // Remote content configuration to fetch repo README.md for 
        // https://github.com/NMFS-RADFish/boilerplate/tree/main/examples/persisted-form#readme
        name: "persisted-form", // used by CLI, must be path safe
        sourceBaseUrl:
          "https://raw.githubusercontent.com/NMFS-RADFish/boilerplate/main/examples/",
        outDir: "docs/developer-documentation/examples-and-templates/examples/", // the base directory to output to.
        documents: ["persisted-form/README.md"], // the file to download
        modifyContent(filename, content) {
          return {
            filename: readmeToNamedMd(filename),
            content: `---
description: This example shows you how to configure a persisted form that saves the data locally.
title: Persisted Form
id: persisted-form
---

${content}`,
          };
        },
      },
    ],
    [
      "docusaurus-plugin-remote-content",
      {
        // Simple Table
        // Remote content configuration to fetch repo README.md for 
        // https://github.com/NMFS-RADFish/boilerplate/tree/main/examples/simple-table#readme
        name: "simple-table", // used by CLI, must be path safe
        sourceBaseUrl:
          "https://raw.githubusercontent.com/NMFS-RADFish/boilerplate/main/examples/",
        outDir: "docs/developer-documentation/examples-and-templates/examples/", // the base directory to output to.
        documents: ["simple-table/README.md"], // the file to download
        modifyContent(filename, content) {
          return {
            filename: readmeToNamedMd(filename),
            content: `---
description: This example demonstrates how to use the <Table> component to display tabular data.
title: Simple Table
id: simple-table 
---

${content}`,
          };
        },
      },
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: "img/radfish-logo.webp",
      navbar: {
        title: "RADFish Docs",
        logo: {
          alt: "RADFish Logo",
          src: "img/radfish-logo.webp",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "developerDocumentation",
            position: "left",
            label: "Developer Documentation",
          },
          {
            type: "docSidebar",
            sidebarId: "designSystem",
            position: "left",
            label: "Design System",
          },
          {
            type: "docSidebar",
            sidebarId: "about",
            position: "left",
            label: "About",
          },
          {
            href: "https://github.com/NMFS-RADFish",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [],
        copyright: `Copyright © ${new Date().getFullYear()} RADFish.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;

// This function path stub to a README.md file 
// and returns the .md renamed as the parent folder.
// eg. "network-status/README.md" --> "network-status.md"
function readmeToNamedMd(filename) {
  return filename.split("/")[0].concat(".md");
};
