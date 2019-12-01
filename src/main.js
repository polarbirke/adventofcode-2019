import * as dayOne from './day-1/index.js';

// Put the result of your calculation(s) into this variable
// if you want to see the result in the browser
let result = 'foo';

// ----------------------------------------------------------------
// your code, e.g.
// result = dayOne.calcRequiredFuelForMass(12);

// or
// console.log(dayOne.calcRequiredFuelForMassAndFuel(12));

// endof your code
// ----------------------------------------------------------------

// the following will output "result" in the DOM of index.html;
// you're of course free to only use console.log if you prefer that
const output = document.getElementById('output');
const outputAnswer = (answer) => {
    let outputText = document.createTextNode(answer);
    output.appendChild(outputText);
};

outputAnswer(result);
