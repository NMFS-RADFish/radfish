---
sidebar_position: 1
---

# Getting Started

Create RadFish App is an officially supported way to create single-page React applications. It offers a modern build setup with no configuration.

### Prerequisites

Before you start, make sure you have the following installed:

- [x] Node.js (v20.17.0 or later)
- [x] npm (v10.8.2 or later)
- [x] git (v2.0 or later)

# Quick Start

**Option 1:** To scaffold an app, run the commands:

```bash
npx @nmfs-radfish/create-radfish-app my-app
cd my-app
npm start
```
Then open [http://localhost:3000/](http://localhost:3000/) to see your app.

### Output

```bash
my-app
├── babel.config.js
├── index.html
├── mocks
│   ├── browser.js
│   └── handlers.js
├── node_modules/
├── package-lock.json
├── package.json
├── public
│   ├── icons
│   ├── manifest.json
│   ├── mockServiceWorker.js
│   ├── noaafavicon.png
│   └── robots.txt
├── src
│   ├── App.jsx
│   ├── index.css
│   ├── index.jsx
│   ├── pages
│   ├── service-worker.js
│   └── styles
└── vite.config.js
```

**Option 2:** If you would like to scaffold from 1 example, please see [Running an Example](./building-your-application/available-scripts/running-example.md). The list of examples can be found at [Starting from a boilerplate](./building-your-application/templates_examples/#examples)

**Option 3:** You can also clone the [boilerplate repo](https://github.com/NMFS-RADFish/boilerplate) to get all the examples.

Then:

```bash
cd boilerplate/examples/[example you want to run]
npm i
npm start
```

**To show help:**

```bash
npx @nmfs-radfish/create-radfish-app --help
```

## Folder Structure Explanation

### `node_modules/`

This directory contains all the project's dependencies installed via npm. It's automatically generated when you run `npm install`. You should not manually modify this folder, as it's managed by npm.

### `public/`

The `public` folder contains static assets that will be served directly to the browser. These files are not processed by Webpack. Common files in this folder include the main `index.html` file, favicon, and other public resources like images and manifest files.

- **`index.html`**: The main HTML file that serves as the entry point for your React application.
- **`favicon.ico`**: The small icon that appears in the browser tab next to the title of the page.
- **`manifest.json`**: Provides metadata about the web application, useful for Progressive Web Apps (PWAs).

### `src/`

The `src` folder is where all the source code for your React application resides. This is where you will spend most of your development time.

- **`App.js`**: The main component of your React application, typically serving as the entry point for your app's component hierarchy.
- **`components/`**: This folder contains reusable React components that can be used throughout the application.
- **`assets/`**: A directory for storing images, fonts, and other static media assets used in the application.

# Scripts

## `npm start`

Quickly runs the project for development mode. This will automatically update the application, and help enforce coding best practices at development time.

## `npm test`

Runs any configured application test code.

## `npm run build`

Prepares a build

Now that you are up and running, see the [Components & Usage](./building-your-application/patterns/components.md) section to start building out your first pages!
