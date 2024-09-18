---
sidebar_position: 1
---

# DatePicker

The `DatePicker` component is a reusable form input designed to capture date-related information from users. It provides a consistent and accessible user interface element for selecting dates, ensuring seamless integration within NOAA web applications.

## **Features**

- **Customizable Input Type:** Supports various input types such as "date", "datetime-local", "month", etc.
- **Accessible Labels and Hints:** Enhances user experience with properly linked labels and hint texts.
- **Styling Flexibility:** Easily stylable via the `className` prop to match your application's design.
- **Default Values:** Allows setting initial values for the input field.
- **Extended Functionality:** Supports additional HTML input attributes through the `...props` spread.

## **Props**

| Prop           | Type     | Default     | Required | Description                                                                                |
| -------------- | -------- | ----------- | -------- | ------------------------------------------------------------------------------------------ |
| `type`         | `string` | `"date"`    | No       | Specifies the type of input. Common values include "date", "datetime-local", "month", etc. |
| `id`           | `string` | **—**       | Yes      | The unique identifier for the input element.                                               |
| `name`         | `string` | **—**       | Yes      | The name attribute for the input, used in form submissions.                                |
| `defaultValue` | `string` | `undefined` | No       | The initial value of the input when the component is first rendered.                       |
| `hintText`     | `string` | `undefined` | No       | Supplemental text that provides additional guidance or information about the input field.  |
| `label`        | `string` | **—**       | Yes      | The text label associated with the input field.                                            |
| `className`    | `string` | `""`        | No       | Additional CSS classes to apply to the root element for custom styling.                    |
| `...props`     | `object` | `-`         | No       | Any other valid HTML input attributes (e.g., `onChange`, `disabled`, etc.)                 |

## **Installation**

Import the `DatePicker` component into your desired file:

```jsx
import { DatePicker } from "./path-to-DatePicker";
```

Usage examples

### 1. Basic Usage

A simple date picker with essential props

```jsx
import React from "react";
import { DatePicker } from "@nmfs-radfish/react-radfish";

const BasicForm = () => {
  return (
    <form>
      <DatePicker
        id="birthdate"
        name="birthdate"
        label="Birthdate"
        hintText="Please enter your date of birth."
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default BasicForm;
```

### 2. With Default Value and Custom Type

Using a different input type and setting a default value

```jsx
import React from "react";
import { DatePicker } from "./path-to-DatePicker";

const AppointmentForm = () => {
  return (
    <form>
      <DatePicker
        type="datetime-local"
        id="appointment"
        name="appointment"
        label="Appointment Date and Time"
        hintText="Select a convenient date and time for your appointment."
        defaultValue="2024-04-30T10:30"
      />
      <button type="submit">Schedule</button>
    </form>
  );
};

export default AppointmentForm;
```

### 3. Controlled Component Example

Managing the DatePicker value through React state:

```jsx
import React, { useState } from "react";
import { DatePicker } from "./path-to-DatePicker";

const ControlledForm = () => {
  const [selectedDate, setSelectedDate] = useState("");

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Selected Date: ${selectedDate}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <DatePicker
        id="event-date"
        name="eventDate"
        label="Event Date"
        hintText="Select the date for your event."
        value={selectedDate}
        onChange={handleDateChange}
      />
      <button type="submit">Create Event</button>
    </form>
  );
};

export default ControlledForm;
```

### 4. Custom Styling

Applying custom CSS classes to the DatePicker

```jsx
import React from "react";
import { DatePicker } from "./path-to-DatePicker";

const StyledForm = () => {
  return (
    <form>
      <DatePicker
        id="start-date"
        name="startDate"
        label="Start Date"
        hintText="Choose the start date of the project."
        className="custom-date-picker"
        onChange={(e) => console.log(e.target.value)}
      />
      <button type="submit">Start Project</button>
    </form>
  );
};

export default StyledForm;
```

### 508 Compliance

The DatePicker component ensures accessibility by using the native HTML input element, which is inherently 508 compliant. It supports keyboard navigation, allowing users to interact with the date picker without a mouse. Additionally, the component is fully compatible with screen readers, providing clear labels and descriptive hints through proper ARIA attributes. This ensures that all users, including those with disabilities, can effectively utilize the DatePicker in forms and data entry interfaces.

### Native DatePicker vs. Trussworks DatePicker

The RADFish DatePicker offers flexibility by supporting both controlled and uncontrolled modes. In controlled mode, developers manage the value via React state, allowing for precise control over the input. In uncontrolled mode, the browser manages the form state, simplifying development for straightforward use cases. On the other hand, the Trussworks date picker only supports uncontrolled behavior, which limits flexibility in scenarios where managing the input programmatically is required. This makes the native picker a more versatile choice for a wider range of applications, offering developers greater control when needed.

### Conclusion

The DatePicker component is a versatile and accessible tool for capturing date information within NOAA web applications. Its customizable props, ease of integration, and adherence to accessibility standards make it an essential component for building user-friendly forms and data entry interfaces. By following the best practices and examples provided, developers can efficiently incorporate the DatePicker into their projects, enhancing both functionality and user experience.
