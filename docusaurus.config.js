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
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: "warn",
    },
  },

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
      require.resolve("@cmfcmf/docusaurus-search-local"),
      {
        indexBlog: false,
        // Options here
      },
    ],
    [
      "docusaurus-plugin-remote-content",
      {
        // options here
        name: "computed-form-fields-image-content", // used by CLI, must be path safe
        sourceBaseUrl:
          "https://raw.githubusercontent.com/NMFS-RADFish/boilerplate/main/examples/computed-form-fields/src/assets/", // the base url for the markdown (gets prepended to all of the documents when fetching)
        outDir:
          "docs/developer-documentation/examples-and-templates/examples/src/assets", // the base directory to output to.
        documents: ["computed-form-fields.png"], // the file names to download
        requestConfig: { responseType: "arraybuffer" },
      },
    ],
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
        modifyContent(
          /** @type {string} */ filename,
          /** @type {string} */ content
        ) {
          return {
            filename: readmeToNamedMd(filename),
            content: `---
description: Automatically calculates a read-only field in forms
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
        // options here
        name: "conditional-form-fields-image-content", // used by CLI, must be path safe
        sourceBaseUrl:
          "https://raw.githubusercontent.com/NMFS-RADFish/boilerplate/main/examples/conditional-form-fields/src/assets/", // the base url for the markdown (gets prepended to all of the documents when fetching)
        outDir:
          "docs/developer-documentation/examples-and-templates/examples/src/assets", // the base directory to output to.
        documents: ["conditional-form-fields.png"], // the file names to download
        requestConfig: { responseType: "arraybuffer" },
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
        modifyContent(
          /** @type {string} */ filename,
          /** @type {string} */ content
        ) {
          return {
            filename: readmeToNamedMd(filename),
            content: `---
description: Dynamically show/hide fields based on other inputs
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
        // options here
        name: "field-validators-image-content", // used by CLI, must be path safe
        sourceBaseUrl:
          "https://raw.githubusercontent.com/NMFS-RADFish/boilerplate/main/examples/field-validators/src/assets/", // the base url for the markdown (gets prepended to all of the documents when fetching)
        outDir:
          "docs/developer-documentation/examples-and-templates/examples/src/assets", // the base directory to output to.
        documents: ["field-validators.png"], // the file names to download
        requestConfig: { responseType: "arraybuffer" },
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
        modifyContent(
          /** @type {string} */ filename,
          /** @type {string} */ content
        ) {
          return {
            filename: readmeToNamedMd(filename),
            content: `---
description: Enforce validation logic, like disallowing numbers
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
        // options here
        name: "network-status-image-content", // used by CLI, must be path safe
        sourceBaseUrl:
          "https://raw.githubusercontent.com/NMFS-RADFish/boilerplate/main/examples/network-status/src/assets/", // the base url for the markdown (gets prepended to all of the documents when fetching)
        outDir:
          "docs/developer-documentation/examples-and-templates/examples/src/assets", // the base directory to output to.
        documents: ["network-status.png"], // the file names to download
        requestConfig: { responseType: "arraybuffer" },
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
        modifyContent(
          /** @type {string} */ filename,
          /** @type {string} */ content
        ) {
          return {
            filename: readmeToNamedMd(filename),
            content: `---
description: Detect network connectivity and display offline alerts
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
        // options here
        name: "mock-api-image-content", // used by CLI, must be path safe
        sourceBaseUrl:
          "https://raw.githubusercontent.com/NMFS-RADFish/boilerplate/main/examples/mock-api/src/assets/", // the base url for the markdown (gets prepended to all of the documents when fetching)
        outDir:
          "docs/developer-documentation/examples-and-templates/examples/src/assets", // the base directory to output to.
        documents: ["mock-api.png"], // the file names to download
        requestConfig: { responseType: "arraybuffer" },
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
        modifyContent(
          /** @type {string} */ filename,
          /** @type {string} */ content
        ) {
          return {
            filename: readmeToNamedMd(filename),
            content: `---
description: Mock API for frontend development with MSW and fetch
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
        // options here
        name: "on-device-storage-image-content", // used by CLI, must be path safe
        sourceBaseUrl:
          "https://raw.githubusercontent.com/NMFS-RADFish/boilerplate/main/examples/on-device-storage/src/assets/", // the base url for the markdown (gets prepended to all of the documents when fetching)
        outDir:
          "docs/developer-documentation/examples-and-templates/examples/src/assets", // the base directory to output to.
        documents: ["on-device-storage.png"], // the file names to download
        requestConfig: { responseType: "arraybuffer" },
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
        modifyContent(
          /** @type {string} */ filename,
          /** @type {string} */ content
        ) {
          return {
            filename: readmeToNamedMd(filename),
            content: `---
description: Use IndexedDB/Dexie.js for offline or local storage
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
        // options here
        name: "multistep-form-image-content", // used by CLI, must be path safe
        sourceBaseUrl:
          "https://raw.githubusercontent.com/NMFS-RADFish/boilerplate/main/examples/multistep-form/src/assets/", // the base url for the markdown (gets prepended to all of the documents when fetching)
        outDir:
          "docs/developer-documentation/examples-and-templates/examples/src/assets", // the base directory to output to.
        documents: ["multistep.png"], // the file names to download
        requestConfig: { responseType: "arraybuffer" },
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
        modifyContent(
          /** @type {string} */ filename,
          /** @type {string} */ content
        ) {
          return {
            filename: readmeToNamedMd(filename),
            content: `---
description: Multi-step form saving progress and inputs locally
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
        // options here
        name: "server-sync-image-content", // used by CLI, must be path safe
        sourceBaseUrl:
          "https://raw.githubusercontent.com/NMFS-RADFish/boilerplate/main/examples/server-sync/src/assets/", // the base url for the markdown (gets prepended to all of the documents when fetching)
        outDir:
          "docs/developer-documentation/examples-and-templates/examples/src/assets", // the base directory to output to.
        documents: ["server-sync.png"], // the file names to download
        requestConfig: { responseType: "arraybuffer" },
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
        modifyContent(
          /** @type {string} */ filename,
          /** @type {string} */ content
        ) {
          return {
            filename: readmeToNamedMd(filename),
            content: `---
description: Sync client-server data with offline storage support
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
        // options here
        name: "react-query-image-content", // used by CLI, must be path safe
        sourceBaseUrl:
          "https://raw.githubusercontent.com/NMFS-RADFish/boilerplate/main/examples/react-query/src/assets/", // the base url for the markdown (gets prepended to all of the documents when fetching)
        outDir:
          "docs/developer-documentation/examples-and-templates/examples/src/assets", // the base directory to output to.
        documents: ["react-query.png"], // the file names to download
        requestConfig: { responseType: "arraybuffer" },
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
        modifyContent(
          /** @type {string} */ filename,
          /** @type {string} */ content
        ) {
          return {
            filename: readmeToNamedMd(filename),
            content: `---
description: Manage app state with React Query's simplified API
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
        // options here
        name: "persisted-form-image-content", // used by CLI, must be path safe
        sourceBaseUrl:
          "https://raw.githubusercontent.com/NMFS-RADFish/boilerplate/main/examples/persisted-form/src/assets/", // the base url for the markdown (gets prepended to all of the documents when fetching)
        outDir:
          "docs/developer-documentation/examples-and-templates/examples/src/assets", // the base directory to output to.
        documents: ["persisted-form.png"], // the file names to download
        requestConfig: { responseType: "arraybuffer" },
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
        modifyContent(
          /** @type {string} */ filename,
          /** @type {string} */ content
        ) {
          return {
            filename: readmeToNamedMd(filename),
            content: `---
description: Save and persist form data locally with FormWrapper
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
        // options here
        name: "simple-table-image-content", // used by CLI, must be path safe
        sourceBaseUrl:
          "https://raw.githubusercontent.com/NMFS-RADFish/boilerplate/main/examples/simple-table/src/assets/", // the base url for the markdown (gets prepended to all of the documents when fetching)
        outDir:
          "docs/developer-documentation/examples-and-templates/examples/src/assets", // the base directory to output to.
        documents: ["simple-table.png"], // the file names to download
        requestConfig: { responseType: "arraybuffer" },
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
        modifyContent(
          /** @type {string} */ filename,
          /** @type {string} */ content
        ) {
          return {
            filename: readmeToNamedMd(filename),
            content: `---
description: Display tabular data using the <Table> component
title: Simple Table
id: simple-table 
---

${content}`,
          };
        },
      },
    ],
    [
      "docusaurus-plugin-remote-content",
      {
        // options here
        name: "form-structure-image-content", // used by CLI, must be path safe
        sourceBaseUrl:
          "https://raw.githubusercontent.com/NMFS-RADFish/boilerplate/main/examples/form-structure/src/assets/", // the base url for the markdown (gets prepended to all of the documents when fetching)
        outDir:
          "docs/developer-documentation/examples-and-templates/examples/src/assets", // the base directory to output to.
        documents: ["form-structure.png"], // the file names to download
        requestConfig: { responseType: "arraybuffer" },
      },
    ],
    [
      "docusaurus-plugin-remote-content",
      {
        // Structured Form
        // Remote content configuration to fetch repo README.md for
        // https://github.com/NMFS-RADFish/boilerplate/tree/main/examples/form-structure#readme
        name: "form-structure", // used by CLI, must be path safe
        sourceBaseUrl:
          "https://raw.githubusercontent.com/NMFS-RADFish/boilerplate/main/examples/",
        outDir: "docs/developer-documentation/examples-and-templates/examples/", // the base directory to output to.
        documents: ["form-structure/README.md"], // the file to download
        modifyContent(
          /** @type {string} */ filename,
          /** @type {string} */ content
        ) {
          return {
            filename: readmeToNamedMd(filename),
            content: `---
description: Build complex forms using Trussworks core components
title: Form Structure
id: form-structure
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
            sidebarId: "tutorial",
            position: "left",
            label: "Tutorial",
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
        magicComments: [
          {
            className: "code-block-diff-add-line",
            line: "diff-add",
            block: {
              start: "diff-add-start",
              end: "diff-add-end",
            },
          },
          {
            className: "code-block-diff-remove-line",
            line: "diff-remove",
            block: {
              start: "diff-remove-start",
              end: "diff-remove-end",
            },
          },
        ],
      },
    }),
};

export default config;

// This function path stub to a README.md file
// and returns the .md renamed as the parent folder.
// eg. "network-status/README.md" --> "network-status.md"
function readmeToNamedMd(/** @type {string} */ filename) {
  return filename.split("/")[0].concat(".md");
}
