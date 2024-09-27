---
sidebar_position: 9
description: Simplifies working with IndexedDB
---

# Dexie for Offline Data

- **Why we chose this:** Dexie simplifies working with IndexedDB, crucial for RADFish applications that require robust offline capabilities. This aligns with the need for reliable data storage and retrieval in environments with intermittent connectivity.
- **Trade-offs:** Using a wrapper around IndexedDB like Dexie abstracts some low-level control but significantly eases development complexity, making it a worthwhile trade-off for enhancing offline experience in RADFish applications.

LocalForage and PouchDB are alternatives that offer similar abstraction over IndexedDB with additional features like automatic synchronization with remote databases. However, Dexie's simpler API and focus on IndexedDB specifically make it more suitable for RADFish's client-side DB needs.

---
