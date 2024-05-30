---
sidebar_position: 4
---

# Offline Usage

<aside>
🚨 **Application must remain functional offline**

</aside>

A key consideration for any NOAA application, is for it to be able to be fully functional offline without a network connection. Fishermen are often on ships far away from network connection, and need to reliably store data to be uploaded to NOAA services when the app comes back online. For this reason, building with “offline first” considerations is of vital importance to NOAA web application development.

Progressive Web Applications (or PWAs) offer a robust solution for offline use at sea, by combining the benefits of a familiar app-like experience, offline access, and efficient data management. These features make PWSs well-suited for maritime environments, where connectivity is often limited or intermittent.

PWAs leverage service workers, which are scripts that run in the background independantly of the main application. Service workers enable offline functionality by caching important static resources, such as HTML, CSS, and JavaScript files. This allows the PWA to continue functioning event when there’s no network connectivity.

**See more about service workers [here](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API)**

Service workers are integrated into the Radfish application by default. After scaffolding the application you will notice the following files:

`service-worker.js`

`serviceWorkerRegistration.js`

And the service workers is integrated into the React app in the app’s `index.js` entrypoint:

```jsx
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();
```

This will register the React application as a PWA, which can be downloaded from the browser. For more information on how to download the PWA onto your device, see [this blog article](https://aureatelabs.com/blog/install-pwa-to-device/)

Additionally, you can query for whether or not the Radfish application is online or offline by leveraging the [navigator API](https://developer.mozilla.org/en-US/docs/Web/API/Navigator)

It is up to the developer on how, or where this API needs to be used, but it is a good idea to use it early on in your application, so that the rest of the application can listen for changes in offline state. An example of this can be by using a `useEffect` at the `App.js` level:

```jsx
// Check if the app is offline
const isOffline = !navigator.onLine;

useEffect(() => {
  const handleOnline = () => {
    // You may want to refetch data when the app comes online
    setToast({ status: "online", message: "Application currently online!" });
  };

  const handleOffline = () => {
    setToast({ status: "offline", message: "Application currently offline" });
  };

  window.addEventListener("online", handleOnline);
  window.addEventListener("offline", handleOffline);

  // need this cleanup, else event listeners are immediately removed
  return () => {
    window.removeEventListener("online", handleOnline);
    window.removeEventListener("offline", handleOffline);
  };
}, [isOffline]);
```

This code listens for changes surfaced from the `navigator` API, and notifies the application in the form of a Toast message of the applications online/offline state.

It is important to fetch and cache required data needed to basic app functionality whenever the application come online. For more information on this, see the **caching strategy [TODO]** section of this developer documentation.

## **Offline Storage**

To use offline data storage, use the `useOfflineStorage` hook. This React hook provides methods for managing offline form data. There are two storage methods available `LocalStorageMethod` or `IndexedDBStorageMethod`.

### Configuration

Step-by-step instructions to configure offline storage:

1. **Set the environment variables in the `.env` files. Based on which offline storage method you select, the following env variables are required:**
   1. Local Storage
      1. `VITE_LOCAL_STORAGE_KEY`
   2. Indexed DB:
      1. `VITE_INDEXED_DB_NAME`
      2. `VITE_INDEXED_DB_VERSION`
      3. `VITE_INDEXED_DB_TABLE_NAME`
      4. `VITE_INDEXED_DB_SCHEMA`
2. **In the `src/hooks/useOfflineStorage.js` file, initialize one of the following Storage Method instances, and pass the appropriate environment variables using `import.meta.env.REPLACE_WITH_KEY_NAME` as parameters:**

   1. `**LocalStorageMethod**` — Requires one parameter, the key name for localStorage.

      ```jsx
      const storageMethod = new LocalStorageMethod(
        import.meta.env.VITE_LOCAL_STORAGE_KEY
      );
      ```

   2. `**IndexedDBStorageMethod**` — Requires four parameters, the db name, db version, db table name, db schema.

      ```jsx
      const storageMethod = new IndexedDBStorageMethod(
        import.meta.env.VITE_INDEXED_DB_NAME,
        import.meta.env.VITE_INDEXED_DB_VERSION,
        import.meta.env.VITE_INDEXED_DB_TABLE_NAME,
        import.meta.env.VITE_INDEXED_DB_SCHEMA
      );
      ```

3. **In the `src/hooks/useOfflineStorage.js` file, create the `StorageModelFactory` :**

   ```jsx
   // 1. Choose one of the following storage methods:
   const storageMethod = new IndexedDBStorageMethod(
     import.meta.env.VITE_INDEXED_DB_NAME,
     import.meta.env.VITE_INDEXED_DB_VERSION,
     import.meta.env.VITE_INDEXED_DB_TABLE_NAME,
     import.meta.env.VITE_INDEXED_DB_SCHEMA
   );
   const storageMethod = new LocalStorageMethod(
     import.meta.env.VITE_LOCAL_STORAGE_KEY
   );
   // 2. Create Storage Method
   const storageModel = StorageModelFactory.createModel(storageMethod);
   ```

### **`useOfflineStorage` Hooks API**

The `useOfflineStorage` hook returns an object with the following methods:

- **`createOfflineDataEntry(data)` —** Creates a new data entry in the storage.
  - `data`: The data object to create.
  - Returns a promise that resolves when the data is created.
- **`findOfflineData(criteria)`** — Finds data in the storage based on the given criteria, returns all data if not criteria parameter is passed.
  - `criteria`: The criteria object to use for finding data, eg `{uuid: 123}`.
  - Returns a promise that resolves to an array of tuples:
    - `[ [ uuid, { key: value } ], [ uuid2, { key: value } ] ]`
- **`updateOfflineDataEntry(criteria, data)`** — Updates data in the storage.
  - `criteria`: The criteria to use for updating data. This should be an object.
  - `data`: The updated data object.
  - Returns a promise that resolves to the updated data as an object:
    - `{ numberOfFish: 10, species: salmon }`

### **Usage**

```jsx
import useOfflineStorage from "./useOfflineStorage";

function MyComponent() {
  const { createOfflineDataEntry, findOfflineData, updateOfflineDataEntry } =
    useOfflineStorage();
  const data = { species: "Grouper", numberOfFish: 100 };

  // Create new offline data entry
  createOfflineDataEntry(data);
  // Find all offline data
  findOfflineData();
  // Find a specific offline data entry by uuid
  findOfflineData({ uuid: "1234" });
  // Update an offline data entry by uuid
  updateOfflineDataEntry({ uuid: "1234" }, data);

  // rest of code....
}

export default MyComponent;
```

---

# OfflineStorageWrapper Usage Guide

`OfflineStorageWrapper` is a context wrapper component that provides offline storage functionality to its child components through a React context. It supports both IndexedDB and LocalStorage methods.

## How to Use

**1. Wrap your component with `OfflineStorageWrapper`:**

```jsx
import { OfflineStorageWrapper } from "./path-to-OfflineStorageWrapper";

<OfflineStorageWrapper config={config}>
  <YourComponent />
</OfflineStorageWrapper>;
```

The config prop is an object that specifies the storage type and configuration. It should include the `type` set to `indexedDB` or `localStorage`, database name (`string`), database version number (`number`), and stores (`object`).

The `stores` object should contain a key that is mapped as the table name, the value should be a comma separated string that outlines the schema. For more information on setting up the stores, please see the official `Dexie.js` docs: [https://dexie.org/docs/Tutorial/React#3-create-a-file-dbjs-or-dbts](https://dexie.org/docs/Tutorial/React#3-create-a-file-dbjs-or-dbts).

For IndexedDB, the configuration should look like this:

```js
const config = {
  type: "indexedDB",
  name: "your_db_name",
  version: 1,
  stores: {
    table_name_1: "uuid, name",
    // Add more stores as needed
  },
};
```

For LocalStorage, the configuration should look like this:

```js
const config = {
  type: "localStorage",
  name: "your_storage_name",
};
```

**2. Use the useOfflineStorage hook in child components:**

```jsx
import { useOfflineStorage } from "./path-to-OfflineStorageWrapper";

function YourComponent() {
  const {
    createOfflineData,
    findOfflineData,
    updateOfflineData,
    deleteOfflineData,
  } = useOfflineStorage();

  // Use these functions to interact with offline storage
}
```

The `useOfflineStorage` hook provides four functions:

- `createOfflineData(tableName, data):` Creates a new record in the specified table.
- `findOfflineData(tableName, criteria):` Finds records in the specified table that match the criteria.
- `updateOfflineData(tableName, data):` Updates a record in the specified table.
- `deleteOfflineData(tableName, uuid):` Deletes a record with the specified UUID from the specified table.

## Error Handling

If you try to use the `useOfflineStorage` hook outside of an `OfflineStorageWrapper`, it will throw an error. Always make sure to use `useOfflineStorage` within a component that's wrapped with `OfflineStorageWrapper`.
