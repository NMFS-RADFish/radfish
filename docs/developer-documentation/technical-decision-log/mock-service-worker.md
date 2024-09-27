---
sidebar_position: 6
description: Required for offline functionality
---

# Mock Service Worker

- **Why we chose this:** RADFish's requirement for offline functionality makes Mock Service Worker (MSW) invaluable for simulating API responses during development and testing. This allows developers to build and test applications without dependency on real backend services, crucial for offline-capable applications and for developing apps without a backend to test against.
- **Trade-offs:** Relying on MSW for development might mask integration issues with actual backend services if human error is made in the setup of MSW and a real endpoint is overridden by the mock endpoint. Nonetheless, the benefits of seamless offline development and testing are crucial for RADFish's goals.

JSON Server or Mirage JS provide similar mocking capabilities with more emphasis on full-fledged backend simulation. However, MSW's integration with service workers and its ability to intercept network requests at the browser level offer more realistic testing scenarios for RADFish's offline functionality, making it preferable despite JSON Server or Mirage JS's ease of setup for simpler backends.

---
