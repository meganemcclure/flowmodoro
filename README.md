# Flowmodoro

## Install Instructions

Please follow the instructions for installing developer extensions [here](https://developer.chrome.com/docs/extensions/get-started/tutorial/hello-world#load-unpacked)

## Setup

1. Clone the repo
2. Run the following commands in the project directory

```
npm install
npm run build
```

3. Follow the instructions for installing developer extensions [here](https://developer.chrome.com/docs/extensions/get-started/tutorial/hello-world#load-unpacked). When unpacking, select the `flowomodoro/dist` file.
4. (Optional) If you wish to do any development work on this extension run the following to enable live changes.

```
npm run watch
```

## Dev Details

This project supports the following commands

1. `npm install` - install all node module dependencies
2. `npm run build` - build the project (create the dist folder)
3. `npm run lint` - run the linter to fix styling issues
4. `npm run watch` - allow live updates (dynamically update the `dist` folder)
