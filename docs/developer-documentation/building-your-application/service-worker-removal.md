---
sidebar_position: 7
title: Service Worker Removal
---

### Removing the Preconfigured Service Worker

> **Disclaimer:** The service worker in this template is designed to provide offline functionality and improve app performance. Removing it is generally not recommended. However, if needed, follow these steps:

1. **Uninstall the Service Worker Plugin**  
   Run the following command to uninstall `vite-plugin-pwa`:
   ```bash
   npm uninstall vite-plugin-pwa
   ```
2. **Remove Configuration from Vite**   
   Open `vite.config.js` and remove `vite-plugin-pwa`.

3. **Remove Service Worker Setup**  
   In your `src/index.js` file, remove the service worker configurations.

After these steps, the service worker will be removed from the application.

