---
sidebar_position: 6
description: Required for offline functionality
---

# Mock Service Worker
[Mock Service Worker (MSW)](https://mswjs.io/) simulates API responses during development and testing. 

## Why we chose this
NOAA applications must work offline. MSW lets developers build and test applications without dependency on real backend services. This helps develop applications with offline functionality without a backend to test against.

## Trade-offs
Relying on MSW for development might mask integration issues with actual backend services. For example, an error in MWS setup could result in a real endpoint being overridden by the mock endpoint. However, the benefits of offline development and testing are crucial for RADFish's goals.

## Alternatives
[JSON Server](https://www.npmjs.com/package/json-server) or [Mirage JS](https://miragejs.com/) provide similar mocking capabilities. They emphasize full-fledged backend simulation. They emphasize full-fledged backend simulation and ease of setup for simpler backends. However, MSW's integrates with service workers and can intercept network requests at the browser level. These features offer more realistic testing scenarios for RADFish's offline functionality. 
