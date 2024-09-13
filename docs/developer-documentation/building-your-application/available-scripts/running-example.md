# Running an Example

RADFish ships with several different boilerplate examples that demonstrate core pieces of functionality identified as critical for NOAA application development. You can use these examples as a reference point to build out your own implementation, or simply to get inspiration for your own design patterns with some pre-defined best practices.

For instance, there is an example that demonstrates how to build a multi-step form that caches each step within IndexedDB, so that it can be referenced without having network connection. In order to run this example, you can run the following command:

`npx @nmfs-radfish/create-radfish-app my-app --example multistep-form`

This will clone the code from the `multistep-form` onto your machine, and spawn a new web process on port `3000` or another port if that is already taken.

Feel free to utilize this code and modify it for your needs!
