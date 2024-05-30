# Available Scripts

## `npm start`[](https://create-react-app.dev/docs/available-scripts#npm-start)

Runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000/) to view it in the browser.

The page will reload if you make edits. You will also see any lint errors in the console.

## `npm test`[](https://create-react-app.dev/docs/available-scripts#npm-test)

Launches the test runner in the interactive watch mode. See the section about [running tests](https://create-react-app.dev/docs/running-tests) for more information.

## `npm run build`[](https://create-react-app.dev/docs/available-scripts#npm-run-build)

Builds the app for production to the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes. If necessary, classnames and function names can be enabled for profiling purposes. See the [production build](https://create-react-app.dev/docs/production-build) section for more information.

Your app is ready to be deployed! See the section about [deployment](https://create-react-app.dev/docs/deployment) for more information about deploying your application to popular hosting providers.

# Scaffold project

```
npx @nfms-radfish/cli init my-coolapp
```

After creation, your project should look like this:

```
my-coolapp
├── README.md
├── node_modules/
├── package-lock.json
├── package.json
├── noaaAssets/
├── public
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
└── src
    ├── serviceWorker.js
    ├── pages/
				├── createFishEntryForm.js
				├── viewFishEntries.js
    ├── components/
				├── RADFishForm.js
				├── RADFishLayout.js
				├── RADFishHeader.js
				├── RADFishInput.js
				├── RADFishSelect.js
    ├── App.css
    ├── App.css
    ├── App.js
    ├── App.test.js
    ├── index.css
    ├── index.js
    ├── logo.svg
    └── setupTests.js
```
