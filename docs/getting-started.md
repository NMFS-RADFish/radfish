---
sidebar_position: 1
---

# Getting Started

Create RadFish App is an officially supported way to create single-page React applications. It offers a modern build setup with no configuration.

# Quick Start

**Option 1:** To scaffold an app, run the commands:

```bash
npx @nmfs-radfish/create-radfish-app my-app
cd my-app
npm start
```

Then open [http://localhost:3000/](http://localhost:3000/) to see your app.

**Option 2:** If you would like to scaffold from 1 example, please see [Running an Example](./building-your-application/available-scripts/running-example.md)

**Option 3:** You can also clone the boilerplate repo to get all the examples. Then run `npm i` followed by `npm start` from the example directory you want to run.

**To show help:**

```bash
npx @nmfs-radfish/create-radfish-app my-app --help
```

# Creating an PWA

### Prerequisites

Before you start, make sure you have the following installed:

- [ ] Node.js (v18.0.0 or later)
- [ ] npm (v8.6.0 or later)
- [ ] git (v2.0 or later)

### npx

```json
npx @nmfs-radfish/create-radfish-app my-pwa
```

## Output

```bash
my-app
├── .eslintrc
├── .prettierrc
├── README.md
├── node_modules/
├── package-lock.json
├── package.json
├── public
│   ├── favicon.ico
│   ├── index.html
│   ├── manifest.json
│   ├── noaafavicon.png
│   └── robots.txt
└── src
    ├── App.css
    ├── App.js
    ├── assets
    ├── components
    ├── index.css
    ├── index.js
    ├── logo.svg
    ├── reportWebVitals.js
    ├── service-worker.js
    ├── serviceWorkerRegistration.js
    └── setupTests.js
```

# Scripts

## `npm start`

Quickly runs the project for development mode. This will automatically update the application, and help enforce coding best practices at development time.

## `npm test`

Runs any configured application test code.

## `npm run build`

Prepares a build

Now that you are up and running, see the [Components & Usage](./building-your-application/patterns/components.md) section to start building out your first pages!
