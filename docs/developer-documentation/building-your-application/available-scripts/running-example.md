---
sidebar_position: 2
---

# Running an Example

RADFish ships with several different [boilerplate examples](../../examples-and-templates#examples) that demonstrate core pieces of functionality. These examples have been identified as critical for NOAA application development and demonstrate best practices. You can use these examples as a reference point to build out your own implementation. They can also serve as inspiration for your own designs.

For instance, there is an example that demonstrates how to build a multi-step form that caches each step within IndexedDB. Cacheing allows data to be referenced without having a network connection. To run this example, use the following command:

`npx @nmfs-radfish/create-radfish-app my-app --example multistep-form`

This will clone the code from the `multistep-form` onto your machine, and spawn a new web process on port `3000` or another port if that is already taken.

Feel free to use this code and modify it for your needs!
