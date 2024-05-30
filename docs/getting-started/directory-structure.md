# Directory Structure

Once you bootstrap a new radfish app, you will be given the following file structure:

```
├── _tests_
├── assets
├── components
│   ├── HeaderNav.jsx
│   └── Layout.jsx
├── config
│   └── form.js
├── contexts
│   ├── FormWrapper.jsx
│   └── TableWrapper.jsx
├── hooks
│   └── useOfflineStorage.js
├── mocks
│   ├── browser.js
│   └── handlers.js
├── pages
│   ├── Form.example.jsx
│   └── Table.example.jsx
├── react-radfish
├── services
│   └── APIService.js
├── storage
├── styles
│   └── theme.css
├── utilities
│   ├── cryptoWrapper.js
│   └── fieldValidators.js
├── App.jsx
├── index.css
└── index.jsx
```

`pages`

The files within pages are collections of components that can be built leveraging a combination of the application specific components in the `components` directory, along with any components from the `react-radfish` package.

You will notice that the files shipped in this directory have an `.example` file extension. This is by design, to make it clear that these are examples of how to build pages with radfish design patterns as described in this guide.

Feel free to copy/paste/refactor these pages to suit your application's needs.

`components`

The files within this directory should be application specific. They should be reusable components that can be created and imported to created pages. They should be modular, DRY, and reusable so that they can be used within your application pages as needed.

`context`

This boilerplate leverages React's context API to manage application state. `FormWrapper` and `TableWrapper` manage the state of either a `Form` or `Table` component as needed, and exports helper function to modify it's state.

> TODO: This should be broken out into `packages` directory.

`hooks`

The files in this folder contain re-usable hooks for you to use within your components. Hooks extract logic into reusable pieces, and can also hook into context providers as needed. See more about react hooks here: https://react.dev/reference/react/hooks

`mocks`

This should contain the mock server implementation that can simulate a backend API for your Radfish application to leverage. You can find out about the mock server implementation, and how to extend it later [in this doc](#mock-api)

`config`

This folder will contain configurations needed for various components. You can see `form.js` as a working copy of this. Keep in mind that this is an `.example` file and is expected to be modified to suit your needs. See [building complex forms](#building-complex-forms) for more details on this configuration.

You can also house other application specific configurations as needed within this folder.

`styles`

This folder will contain any application specific theme `css` files as needed. Learn more about styling options [here](#styling)

`services`

This folder will contain files that represent services used in interface with 3rd party integrations or internal business logic. It's a good idea to use Object Oriented principles when creating and extending these services.
