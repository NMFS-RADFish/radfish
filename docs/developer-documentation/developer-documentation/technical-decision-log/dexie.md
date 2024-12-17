---
sidebar_position: 9
description: Simplifies working with IndexedDB
---

# Dexie for Offline Data
[Dexie](https://dexie.org/) simplifies working with IndexedDB.

## Why we chose this 
Dexie makes IndexedDB development less complex. IndexedDB is crucial for RADFish applications that require offline capabilities. RADFish apps need reliable data storage and retrieval with intermittent internet connectivity. 

## Trade-offs
Using a wrapper around IndexedDB like Dexie abstracts some low-level control. However, it significantly eases development complexity, making it a worthwhile trade-off.

## Alternatives
[LocalForage](https://github.com/localForage/localForage) and [PouchDB](https://github.com/pouchdb/pouchdb) are alternatives that offer similar abstraction over IndexedDB. They offer additional features like automatic synchronization with remote databases. However, Dexie's simpler API and focus on IndexedDB make it more suitable for RADFish's client-side DB needs.
