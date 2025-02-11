---
sidebar_position: 1
---

# Application Container

The Application container manages global application concerns such as:

- **Service Worker** setup (online/offline capabilities)
- **Custom Storage** with IndexedDB (Dexie-based) or LocalStorage
- **Network Status** changes and corresponding toast notifications
- **Application Lifecycle** through an `on("ready")` event

## Features

1. **Service Worker for Offline Caching**

   The Application container supports service worker integration, enabling offline capabilities by caching static assets and handling API requests when the network is unavailable.

2. **Pluggable Storage**

   Pass in IndexedDB or LocalStorage storage methods.

3. **Offline/Online Detection**

   Automatically detects network changes and displays toast notifications:

   - Offline: Shows a warning toast with "Application is offline".
   - Online: Shows an informational toast with "Application is online".

4. **Lifecycle Hooks**

   You can listen for the `on("ready")` to run initialization code (e.g., seeding a database, hooking into Dexie events, etc.).

## Usage

### Setting up Application instance

1. Use a service worker to enable offline caching or other PWA features.
2. Provide a custom storage engine (e.g. IndexedDB or LocalStorage).
3. Hook into the `on("ready")` lifecycle to run setup logic once the application is fully initialized.

```jsx
// index.js

import React from "react";
import ReactDOM from "react-dom/client";
import { Application } from "@nmfs-radfish/radfish";
import App from "./App";
import store from "./db/store.js"; // Your custom IndexedDBMethod or LocalStorageMethod config

// 1. Create a root element for React
const root = ReactDOM.createRoot(document.getElementById("root"));

// 2. Instantiate the Application container
//    Pass in options like a service worker URL or mock handlers
const app = new Application({
  serviceWorker: {
    url:
      import.meta.env.MODE === "development"
        ? "/mockServiceWorker.js"
        : "/service-worker.js",
  },
  mocks: {
    handlers: import("../mocks/browser.js"), // Optional mock server in dev
  },
  storage: store, // This is your IndexedDBMethod or LocalStorageMethod instance
});

// 3. Use the "ready" event to run custom setup code
app.on("ready", async () => {
  const { db } = app?.storage;

  // Add setup code here (like DB seeding, Dexie debug handling, etc.)

  // 4. Finally, render your React app, passing "app"
  root.render(
    <React.StrictMode>
      <App application={app} />
    </React.StrictMode>,
  );
});
```

### The Custom Storage

In this setup, `storage` is an `IndexedDBMethod` from `@nmfs-radfish/radfish`. This example is in `store.js`:

```jsx
// store.js

import { IndexedDBMethod } from "@nmfs-radfish/radfish";

// 1. Provide your DB name and version from environment variables
const name = import.meta.env.VITE_INDEXED_DB_NAME;
const version = import.meta.env.VITE_INDEXED_DB_VERSION;

// 2. Define the object stores (Dexie tables)
const stores = {
  species: "id, name",
  cruises: "id, cruiseName, startDate",
  stations: "id, cruiseId, stationName",
};

// 3. Export a new IndexedDBMethod instance
export default new IndexedDBMethod(name, version, stores);
```

Or, alternatively, set up `LocalStorageMethod`:

```jsx
// store.js

import { LocalStorageMethod } from "@nmfs-radfish/radfish";

// 1. Provide a storage key
const name = import.meta.env.VITE_LOCAL_STORAGE_KEY;

// 2. Export a new LocalStorageMethod instance
export default new LocalStorageMethod(name);
```

When you pass `storage: store` into the Application constructor, it knows how to read/write data from the Dexie-based IndexedDB or LocalStorage.

For more information about configuiring offline storage, see: [State Management - Offline Storage](/building-your-application/patterns/state-management#offline-storage).

### Using `<Application>` in Your React App

When you render your React app, you can wrap everything in the `<Application>` component.

By passing the `application` prop to `<Application>`, you’re effectively telling the container:

> “Here’s my initialized Application instance. Use it to set up offline support, register service workers, coordinate data storage, and etc..”

```jsx
// App.jsx

import React from "react";
import { Application } from "@nmfs-radfish/react-radfish";

function App({ application }) {
  return (
    <Application application={application}>
      {/* ...the rest of your app... */}
    </Application>
  );
}

export default App;
```

## Distinguishing `Application` from `@nmfs-radfish/radfish` vs. `@nmfs-radfish/react-radfish`

### `@nmfs-radfish/radfish` (Core)

- Provides the underlying **non-UI logic**, such as the `Application` class for managing:
  - **Offline support**
  - **Service workers**
  - **Storage (IndexedDB, LocalStorage)**
  - **Lifecycle event `on("ready")`**

### `@nmfs-radfish/react-radfish` (React Integration)

- Offers **React components and hooks** that make it easy to integrate `Application` into a React app.
- Provides:
  - `<Application>` component for wrapping your app with offline support.
  - Hooks like `useOfflineStatus` for checking network connectivity.
  - `useOfflineStorage` for managing offline storage state within React components.
- This package is **React-specific** and simplifies working with `Application` in a React project.

---

### In Other Words:

- **`@nmfs-radfish/radfish`** = the **engine** (all the logic).
- **`@nmfs-radfish/react-radfish`** = the **React car** that sits on top of the engine, making it easy to drive your offline-ready web app in React.
