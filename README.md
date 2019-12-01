# Advent of Code 2019 – in JavaScript
If you want to play https://adventofcode.com/2019/ and use test-driven JS, you can clone this repository and get going.
You will need to login to https://adventofcode.com/2019/ to receive the daily instructions.

## Getting started
This repo has a gulp/rollup setup for ES2019 and can run tests with tape. Start by running a 

```sh
yarn install
```

to install the required dependencies. 

## Play
This repo includes the puzzle input, placeholder functions and complete unit tests for day 1 of adventofcode 2019.
You can start playing by implementing the functions in `src/day-1/index.js` and testing them against the unit tests.

### (re-)build bundled JS
This repo has a `index.html` that you can open in your browser to see your outputted stuff either 
on the console or in the DOM. Please refer to the comments in `src/main.js` on how to use it.

The `index.html` includes a reference to a compiled bundle of your scripts. You can recompile the bundle by running 

```sh
yarn run build
```

### Run unit tests

This repo includes ready-to-start unit tests for day 1 of adventofcode. Use these as examples for subsequent days.
You can run the unit tests with

```sh
yarn run test
```
