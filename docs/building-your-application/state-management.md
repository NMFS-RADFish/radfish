---
sidebar_position: 7
---

# State Management

**What is State Management?**

In the world of NOAA web app development, we frequently deal with various forms of data, from user inputs like form data to environmental statistics such as fish populations or weather changes. State management is our tool for keeping track of all these changes efficiently. Think of it as a digital notepad that records every update and change within the app, ensuring we always have the most current information at our fingertips.

**Why Use State Management in NOAA Apps?**

Our applications are not just repositories of static data; they are dynamic platforms where data constantly evolves. State management is essential for several reasons:

Stay Updated: It allows us to display the most up-to-date information to our users, ensuring accuracy and reliability.
Work Offline: It enables our apps to function even in the absence of an internet connection, storing data locally and syncing it back to our servers once a connection is re-established.
Be Fast and Responsive: It helps our apps to react swiftly to user interactions and data changes, providing a smooth and efficient user experience.
A Simple Way to Manage State: Using React Context

For sharing and managing state across different parts of our applications, we use a feature called React Context. This is akin to creating a communal space where any component of our app can easily access or update shared information, eliminating the complexity of passing data through multiple layers.

**How We Implement State Management**

**FormState**

Our approach to managing form state is straightforward yet effective, utilizing the React Context for a seamless integration. Here's a simplified overview:

Centralized State Management: We centralize our form state management using a specific context, referred to in our code as FormWrapper. This context acts as a container for all form-related data, ensuring that state is managed efficiently and is accessible throughout the component hierarchy.

Simplifying Form Data Handling: Form state is managed with react context. The code for this state can be found in contexts/FormWrapper.js. This context exports form handlers, and captures form data on submit. Whenever you want to leverage this context for a form you create, be sure to wrap this component with the FormWrapper.

```jsx
<FormWrapper onSubmit={handleFormSubmit}>
  <DemoForm asyncFormOptions={asyncFormOptions} />
</FormWrapper>
```

This will ensure that the state that is managed in context will be passed correctly to the child form that you are building, and should behave in a similar way. You can access the form data within the FormWrapper and can console.log, debug, or otherwise pass this data to the context's children as you application needs.

Flexibility and Debugging: Utilizing this context gives developers the flexibility to easily access, log, or debug the form data captured upon submission. This aids in maintaining the integrity of the data collected and ensures that it aligns with the application's needs.

**TableState**

At a high level, we handle state management for tables in a similar way. We use a React context provider to wrap whichever table needs state to be managed. For instance, within the boilerplate repository, you can see how `DemoTable` is wrapper by `TableWrapper`

```jsx
<TableWrapper>
  <DemoTable />
</TableWrapper>
```

By doing this, `DemoTable` can now utilize the `useTableState` hook, that provides the component with all of the state, event handlers, sorting functionality, as well as other pieces of functionality that may be needed for the application’s needs.

More specifically, Radfish leverages a React Library called [Tanstack Table](https://tanstack.com/table/latest/docs/framework/react/react-table) which makes it simple to handle traditionally tricky table interactions like sorting, filtering, and data fetching. Tanstack Table manages a lot of the heavy lifting with regards to re-rendering, and provides an easy to use interface to make static tables dynamic and interactive.

We suggest looking closely at the official Tanstack Table documentation to get familiar with how the library works. But, in the context of the boilerplate repo, we’ve provided a simple interface in `TableWrapper` that leverages the `useReactTable` hook.

This hook gives access to the data from the table, along with the data structures and many of the event handlers that a developer may need for their form:

```jsx
import {
  createColumnHelper,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";

/**
 * React Table instance. Initializes the table with the data being managed in TableWrapper state
 * Columns are set to the memoized value returned from the useMemo hook above
 * state and helper methods are to provide helper methods to render data, and re-render based on sorting functionality
 */
const table = useReactTable({
  data,
  columns,
  state: {
    sorting,
  },
  onSortingChange: setSorting,
  getCoreRowModel: getCoreRowModel(),
  getSortedRowModel: getSortedRowModel(),
});
```

Similar to how state is passed into the children components from context, these handlers can also be passed into the child `Table` component, doesn’t need to implement all of these details on it’s own. You can see that the `DemoTable` component is mostly just responsible for rendering out components, and isn’t responsible for managing a lot of these details.

---
