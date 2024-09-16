# Installing the CLI

<aside>
🚧 This documentation currently reflects **alpha** development. These instructions will be updated with future releases.

</aside>

# Configure npm with GitHub registry

Follow the [official documentation](https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-npm-registry#installing-a-package) to configure the `@nmfs-radfish` namespace to create your access token with `read:packages` scope.

## Update your .npmrc file

Your **.npmrc** file will need to be updated to include these two lines.

1. Replace `TOKEN` with your actual access token that has at least `read:packages` scope.
2. Declare that the `@nmfs-radfish` namespace be directed to GitHub Packages registry.

```
//npm.pkg.github.com/:_authToken=TOKEN
@nmfs-radfish:registry=https://npm.pkg.github.com
```
