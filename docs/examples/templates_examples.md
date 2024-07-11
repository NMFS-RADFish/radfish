---
sidebar_position: 1
---

# What are Examples

Examples are small, scoped projects that are meant to demonstrate how to implement core pieces of functionality within the RADFish ecosystem. Each example includes a detailed `README.md` file about the purpose of each example, and the reasoning behind the design pattern, and the best practices utilized in each.

These examples are meant to be a reference for any RADFish project. While these examples can certainly be used as a starting point to build out a new RADFish application, we still suggest starting with a fresh `react-javascript` template (see below).

You can visualize the source code for each example at the open source repository for the overall RADFish [boilerplate](https://github.com/NMFS-RADFish/boilerplate/tree/main/examples). Each of these examples can be cloned and run separately as you are working with each from the RADFish CLI. To learn more about how to run these scripts, please reference the [running examples]() section of this documentation

# What are Templates

Templates are meant to be a clean starting point for a new RADFish project. These templates are framework specific. Note that at the time of this writing, only the `react-javascript` template is supported, though new frameworks/languages are planned to be supported in the future!

The template will come pre-configured with everything you need to get up and running to start coding your new project as quickly as possible. This will include the core modules of RADFish, including service-worker configuration, application routing, and offline storage.

If you want to create a new project based from the `react-javascript` library, you can execute the following RADFish CLI command: `npx @nmfs-radfish/create-radfish-app my-app --template templates/react-javascript`

This will create a new RADFish project named `my-app` in your current working directory. Happy hacking!
