---
sidebar_position: 10
description: Streamlines service worker management for improved caching
---

# Workbox

- **Why we chose this:** Workbox streamlines service worker management and offline capabilities essential for RADFish. It simplifies caching strategies and offline data handling, critical for NOAA PWAs used in an offline fashion.
- **Trade-offs:** Workbox’s abstraction layer may obscure some of the finer details of service worker implementation. However, the ease of integrating robust offline functionalities justifies its use within RADFish. The ease of implementation also makes the service worker functionality more approachable for cases where NOAA developers need to modify the RADFish-provided setup.

---
