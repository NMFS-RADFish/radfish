---
sidebar_position: 8
title: "Offline Storage"
description: Implement offline storage functionality (Coming soon)
---

# Offline Storage

RADFish application users can be out at sea for an extended period of time and may not have a reliable internet connection. The offline storage functionality outlined below allows users to continue using the application to create and manage data while offline.

## Storage Models

The `@nmfs-radfish/radfish`package provides two storage methods available `LocalStorageMethod` and `IndexedDBStorageMethod`.

### LocalStorage

In order to save to LocalStorage, we must provide a unique key that will used to store all of the application data.

```js
import { LocalStorageMethod } from '@nmfs-radfish/radfish';

new LocalStorageMethod(
  "survey-app-storage"
);
```

### IndexedDB

When using IndexedDB, we additionally need to provide a schema version and model structures. These are used to manage future data migrations.

```js
import { IndexedDBStorageMethod } from '@nmfs-radfish/radfish';

new IndexedDBStorageMethod(
  "survey-app-storage",
  "1.0.0",
  {
    species: "id, name, scientificName",
    catches: "id, speciesId, numberOfFish, weight"
  }
);
```

## React Usage

The `@nmfs-radfish/react-radfish` package exposes the an `OfflineStorageWrapper` component that creates a storage model available to that React context.

## **`useOfflineStorage` Hooks API**

You can then use the `useOfflineStorage` hook to interact directly with the storage model.

The hook returns an object with the following methods:

### `createOfflineData`

Creates a new data entry in the storage. Entries will have a unique `uuid` (`String`) property to be used for future lookups.

| Parameter   | Description                           |
| ----------- | ------------------------------------- |
| `tableName` | The table the data will be stored in. |
| `data`      | The data object to create.            |

**Returns:** A `Promise` that resolves of the `uuid` of the created entry.

### `findOfflineData`

Finds data in the storage based on the given criteria, returns all data if not criteria parameter is passed.

| Parameter   | Description                                                    |
| ----------- | -------------------------------------------------------------- |
| `tableName` | The table to be searched.                                      |
| `criteria`  | The criteria object to use for finding data, eg `{uuid: 123}`. |

**Returns:** A `Promise` that resolves to an array of objects:

### `updateOfflineData`

Updates data in the storage with the matching `criteria`.

| Parameter   | Description                                                    |
| ----------- | -------------------------------------------------------------- |
| `tableName` | The table to be searched.                                      |
| `criteria`  | The criteria object to use for finding data, eg `{uuid: 123}`. |

**Returns:** A `Promise` that resolves to an array of `uuid` of the updated entries.

### `deleteOfflineData`

 Deletes data in the storage.

| Parameter   | Description                                                    |
| ----------- | -------------------------------------------------------------- |
| `tableName` | The table to be searched.                                      |
| `criteria`  | The criteria object to use for finding data, eg `{uuid: 123}`. |

**Returns:** A `Promise` that resolves to a boolean value of whether the delete operation succeeded without errors.

## **Usage**

Example usage when using IndexedDB:

App.jsx
```jsx
import React, { useEffect, useState } from "react";
import { Table } from "@nmfs-radfish/react-radfish";
import { useOfflineStorage, OfflineStorageWrapper } from "@nmfs-radfish/react-radfish";

const offlineStorageConfig = {
  type: "indexedDB",
  name: import.meta.env.VITE_INDEXED_DB_NAME,
  version: import.meta.env.VITE_INDEXED_DB_VERSION,
  stores: {
    catches: "++id, numberOfFish"
  },
};

const Catches = () => {
  const { createOfflineData, findOfflineData } = useOfflineStorage();

  let [allCatches, setCatches] = useState([]);

  const fetchCatches = async () => {
    const catches = await findOfflineData("catches");
    setCatches(catches);
  };

  const createNewCatch = async () => {
    await createOfflineData("catches", {
      numberOfFish: Math.floor(Math.random() * 10) + 1,
    });
    await fetchCatches();
  };

  useEffect(() => {
    fetchCatches();
  }, []);

  return (
    <div>
      <button onClick={createNewCatch}>Generate new catch</button>
      <Table 
        data={allCatches} 
        columns={[
          { key: "id", label: "ID" },
          { key: "numberOfFish", label: "Count", sortable: true },
        ]} 
      />
    </div>
  );
};

const App = () => {
  return (
    <OfflineStorageWrapper config={offlineStorageConfig}>
      <Catches />
    </OfflineStorageWrapper>
  );
};

export default App;
```

## Interfacing with backend services

You can use any HTTP library of your choice to handle HTTP requests (GET, POST, PUT, DELETE). For your convenience, we’ve provided examples using the native fetch API. You can adapt these examples to the library that best fits your needs.
