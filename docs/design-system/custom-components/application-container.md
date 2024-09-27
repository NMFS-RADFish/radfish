---
sidebar_position: 1
---

# Application Container

The `Application` container is designed to handle network status changes and display appropriate toast notifications. It comes with **built-in** functionality that automatically handles these changes.

## Features

- **Built-in Offline/Online Notifications**: The `Application` component monitors the network status and shows toast messages when the app goes offline or comes back online.
- **Custom Hooks**: It leverages the `useToasts` and `useOfflineStatus` hooks from within `@nmfs-radfish/react-radfish` package.

## How It Works

### Built-in Offline/Online Notifications

The `Application` component has **built-in** functionality to check the application's network status and display toast notifications when the state changes:

- **When the application goes offline**: A warning toast is displayed with the message `"Application is offline"`.
- **When the application comes back online**: An info toast is displayed with the message `"Application is online"`.

This feature is provided **out of the box** and requires no additional setup from your side.

### Example Usage

To use the `Application` component, wrap it around your app in the entry file (e.g., `index.js` or `index.jsx`):

```jsx
import { Application } from "@nmfs-radfish/react-radfish";

function App () {
  return (
    <Application>
      { /* Your application code */ }
    </Application>
  );
}

export default App;
```

<!-- ### Extending Functionality with Hooks

While the `Application` component provides **out-of-the-box** functionality for network status notifications, you can also use RADFish's custom hooks—`useToasts` and `useOfflineStatus`—independently for more control over toast messages and offline status in other parts of your application.

For more information on how to use these hooks, refer to the [RADFish Custom Hooks Documentation](link-to-hooks-documentation). -->
