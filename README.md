# Flowmodoro

Welcome to Flowmodoro, a simple chrome application for utilizing the Flow Time (aka flowmodoro) timer system. Flowmodoro takes inspiration from the standard pomodoro time management sytem, but instead of fixed time blocks you work until you want to stop. Then your break time is automatically calculated for you.

**How do I use Flowmodoro?**

Start the Flow Time timer. This is your time to get focused, and get some work done.

When you come to a natural stopping point, switch over to break time. When your break time is over, repeat the process.

**How is my break time calculated?**

Breaks are always 1/5 of the time you spent focused. For example, if you worked for 50 minutes, your break time would be 10 minutes.

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
