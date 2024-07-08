# Available Scripts

## `npm start`

Runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000/) to view it in the browser.

The page will reload if you make edits. You will also see any lint errors in the console.

## `npm test`

Launches the test runner in the interactive watch mode.

## `npm run build`

Builds the app for production to the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance.

## `npm run serve`

Runs the production bundle (created in command above) and serves static files, simulating a production server. This is helpful when testing and building things where "offline mode" is a feature being developed.

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
