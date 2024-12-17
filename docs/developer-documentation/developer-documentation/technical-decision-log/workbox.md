---
sidebar_position: 10
description: Service worker management for improved caching
---

# Workbox
[Workbox](https://developer.chrome.com/docs/workbox) is a collection of service worker libraries and tooling.

## Why we chose this
Workbox streamlines service worker management and offline capabilities essential for RADFish. It simplifies caching strategies and offline data handling. This is critical for NOAA PWAs used offline.

## Trade-offs
Workbox’s abstraction layer may obscure some of the finer details of service worker implementation. However, the ease of integrating robust offline functionalities justifies its use within RADFish. The ease of implementation makes it more approachable for NOAA developers. Developers can easily modify the RADFish-provided setup as well.
