# Getting Started with Electron and SQLite

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

This is a demo project for integrating SQLite with Electron.
For UI, we are using React made with Create React App

## Tutorial

I have created a [blog which you can read as well](https://dev.to/arindam1997007/a-step-by-step-guide-to-integrating-better-sqlite3-with-electron-js-app-using-create-react-app-3k16), to get a better understanding of setting up better-sqlite3 with your Electron application.

## Requirements
Make sure you have Node.js installed. This project was developed and tested with Node.js v16.16.0. 
Higher versions might cause issues, so please fix any potential problems accordingly.

## Installation

Clone the repository and navigate to the project directory:

```bash
git clone https://github.com/your-username/electron-betterSQLite.git
cd electron-betterSQLite
```

Install the dependencies:
`npm install`

## Available Scripts

In the project directory, you can run:

### `npm run rebuild-app`
**Run this initially before starting your project**

If you face any error related to the DB file not being read, please run this command and then start the server again.

### `npm run start-electron-app`

Runs the app in the development mode inside Electron Window.

The page will reload when you make changes.\
You may also see any lint errors in the console.


## Deployment

Before deploying your Electron app, you need to package it for the target operating system.

### `npm run package-windows`
Packages it for Windows OS for installation, as well as portable copy.
Tested in Win 11.

### `npm run package-mac`
Packages it for Mac OS for installation.

### `npm run package-linux`
Packages it for Linux OS for installation.


Note: The Mac and Linux options are marked as **Not Tested**.
you may need to make adjustments or test them for your specific use case.



Additional Notes

    Customize the UI: You can modify the React components in the src folder to tailor the UI according to your needs.
    Working with SQLite: The project already includes SQLite integration; explore the public/preload.js file to understand how it's connected to the Electron app.

Happy coding and learning! 
