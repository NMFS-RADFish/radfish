---
sidebar_position: 3
---

# Integrating with Backend Services

You are free to use any network library of your choice to handle HTTP requests (GET, POST, PUT, DELETE). For your convenience, we’ve provided examples using the native fetch API. You can adapt these examples to the library that best fits your needs.

**Making API Requests**

A common pattern, is to call network requests in a `useEffect` that will trigger whenever a React component loads:

```jsx
useEffect(() => {
  async function fetchData() {
    try {
      const response = await fetch("https://api.example.com/data", {
        headers: {
          "X-Access-Token": "your-access-token",
        },
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Error:", error);
    }
  }

  fetchData();
}, []);
```

- **`GET` Request**

  - Asynchronous function to perform a `GET` request
  - `@param {string} endpoint` - The API endpoint to perform the GET request.
  - `@param {Object} queryParams` - The query parameters for the GET request.
  - `@returns {Promise<Object|string>}` - A promise that resolves to the API response data or an error string.

    ```js
    async function get(API_ENDPOINT, queryParams) {
      const queryString = new URLSearchParams(queryParams).toString();
      const url = `${endpoint}?${queryString}`;

      try {
        const response = await fetch(url, {
          headers: {
            "X-Access-Token": "your-access-token",
          },
        });
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        return data;
      } catch (error) {
        console.error("Error:", error);
        throw error;
      }
    }

    useEffect(() => {
      const API_ENDPOINT = "https://api.example.com/data";
      const params = { param1: "foo" };

      const fetchData = async () => {
        const data = await get(API_ENDPOINT, params);
        // handle data as needed
      };

      fetchData();
    }, []);
    ```

- **`POST` Request**

  - Asynchronous function to perform a `POST` request
  - `@param {string} endpoint` - The API endpoint to perform the POST request.
  - `@param {Object} body` - The request body for the POST request.
  - `@returns {Promise<Object|string>}` - A promise that resolves to the API response data or an error string.

    ```jsx
    async function post(API_ENDPOINT, bodyData) {
      try {
        const response = await fetch(API_ENDPOINT, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "X-Access-Token": "your-access-token",
          },
          body: JSON.stringify({ ...bodyData }),
        });
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        return { data };
      } catch (error) {
        console.error("Error:", error);
        throw error;
      }
    }

    // Example usage
    useEffect(() => {
      const API_ENDPOINT = "https://api.example.com/data";
      const bodyData = { key: "value" };

      const postData = async () => {
        const data = await post(API_ENDPOINT, bodyData);
        // handle data as needed
      };

      postData();
    }, []);
    ```

- **`PUT` Request**

  - Asynchronous function to perform a `PUT` request
  - `@param {string} endpoint` - The API endpoint to perform the PUT request.
  - `@param {Object} body` - The request body for the PUT request.
  - `@returns {Promise<Object|string>}` - A promise that resolves to the API response data or an error string.

    ```jsx
    async function update(endpoint, { id, bodyData }) {
      const url = `${endpoint}/${id}`;

      try {
        const response = await fetch(url, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            "X-Access-Token": "your-access-token",
          },
          body: JSON.stringify(bodyData),
        });
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        return data;
      } catch (error) {
        console.error("Error:", error);
        throw error;
      }
    }

    useEffect(() => {
      const API_ENDPOINT = "https://api.example.com/data";
      const params = { id: 1, bodyData: { key: "updatedValue" } };

      const updateData = async () => {
        try {
          const data = await update(API_ENDPOINT, params);
          // handle data as needed
          console.log("PUT Request Data:", data);
        } catch (error) {
          console.error("Failed to update data:", error);
        }
      };

      updateData();
    }, []);
    ```

- **`DELETE` Request**

  - Asynchronous function to perform a `DELETE` request
  - `@param {string} endpoint` - The API endpoint to perform the DELETE request.
  - `@param {Object} body` - The request body for the DELETE request.
  - `@returns {Promise<Object|string>}` - A promise that resolves to the API response data or an error string.

    ```jsx
    async function remove(endpoint, { id }) {
      const url = `${endpoint}/${id}`;

      try {
        const response = await fetch(url, {
          method: "DELETE",
          headers: {
            "X-Access-Token": "your-access-token",
          },
        });
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        console.log("Data deleted successfully");
      } catch (error) {
        console.error("Error:", error);
        throw error;
      }
    }

    useEffect(() => {
      const API_ENDPOINT = "https://api.example.com/data";
      const params = { id: 1 };

      const deleteData = async () => {
        await remove(API_ENDPOINT, params);
        // handle success if needed
      };

      deleteData();
    }, []);
    ```
---

# React Query

TODO
