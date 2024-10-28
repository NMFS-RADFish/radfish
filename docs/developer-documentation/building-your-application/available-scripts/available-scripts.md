# Available Scripts

**`npm start`**

This script starts the Vite development server. It runs the app locally with hot module reloading, allowing for fast development and instant updates as you make changes. Open [http://localhost:3000](http://localhost:3000/) to view it in the browser.

**`npm run build`**

Builds the project for production by using Vite’s build tool. It generates optimized static assets, such as HTML, CSS, and JavaScript, which are output to the dist directory.

**`npm run prebuild`**

Before the build process starts, this script ensures that the dist folder (which contains the previous build) is deleted. This helps prevent old build files from being included in the new build.

**`npm test`**

Runs unit and integration tests using Vitest, while excluding end-to-end (e2e) tests located in the `./src/__tests__/e2e/` directory. It ensures that regular tests are executed separately from e2e tests.

**`npm test:e2e`**

Runs end-to-end (e2e) tests located in `./src/__tests__/e2e/integration.e2e.test.jsx`. This script uses concurrently to run the Vite server and e2e tests in parallel, automatically stopping other processes if one succeeds.

**`npm run lint`**

Runs ESLint with the `--fix` option, which automatically fixes certain linting issues in the code found in the src/ directory.

**`npm run format`**

Formats the code in the `src/` directory using Prettier according to the configuration specified in the `.prettierrc` file. This ensures consistent code formatting across the project.

**`npm run serve`**

This script starts a local server to preview the production build. It serves the files from the `dist/` folder, allowing you to check how the app will behave in a production environment.

**`npm run lhci:mobile`**

Runs **Lighthouse CI (LHCI)** on the application, collecting performance metrics and scores for mobile devices. It automates performance auditing to ensure the app meets mobile optimization standards.

**`npm run lhci:desktop`**

Runs **Lighthouse CI (LHCI)** on the application, collecting performance metrics and scores for desktop devices. This script is similar to lhci:mobile but targets desktop performance.
