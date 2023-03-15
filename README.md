<h1 align="center">Supertest API Testing</h1></br>

<p align="center">
:sparkles: API Testing using Javascript, Supertest, Mocha, Chai, and Mochawesome for HTML Report. :sparkles:
</p>

## Preparation

What will be used on this project

| Item           | Source                                                         |
| -------------- | ------------------------------------------------------------ |
| Editor         | VS Code (https://code.visualstudio.com/download) |
| Package Manager| NPM (https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) |
| API Test Tools | Chai (https://www.npmjs.com/package/chai) |
|                | Supertest (https://www.npmjs.com/package/supertest) |
|                | Babel Core - Language API: Node (https://babeljs.io/setup) |
| Test Reporter  | Mochawesome (https://www.npmjs.com/package/mochawesome) |
| Run on         | Terminal or Command Prompt  |

## Pre-Requisite Installation

Install VS Code Editor and NPM.

To check whether you already installed NPM & Node.js

```Bash
npm --version
```
```Bash
node --version
```

## Setting up Project

### Clone

**👉 [Clone this Repository](https://github.com/Fatimazza/SupertestAPI/)** through Terminal or Command Prompt

### Open the Project on Editor

Open this Automation Project using VS Code Editor.

### Run the Automation Project 

Change to Project directory on Terminal or Command Prompt

```Bash
cd SupertestAPI
```

Run All Tests on Terminal

```Bash
npm run test test/api/
```

```Bash
mocha test/api/
```

Run Specific Test

```Bash
npm run test test/api/petStoreAPITesting.js
```

```Bash
mocha test/api/petStoreAPITesting.js
```

### Generate Test Execution HTML Report

Install Mochawesome Reporter

```Bash
npm install mochawesome
```

Run API Test with the Reporter

> Note: Please wait until all test execution finished

All Test

```Bash
npx mocha --spec test/api/ --reporter mochawesome --reporter-options reportFilename=allPetStoreAPITesting
```

Specific Test

```Bash
npx mocha --spec test/api/petStoreAPITesting.js --reporter mochawesome --reporter-options reportFilename=petStoreAPITesting
```

Test HTML Report

:white_check_mark: available on <b> /SupertestAPI/mochawesome-report/allPetStoreAPITesting.html </b>

:white_check_mark: available on <b> /SupertestAPI/mochawesome-report/petStoreAPITesting.html </b>

