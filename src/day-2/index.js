import * as data from './input.json';

// input is an array with the puzzle data for day 1
const { input } = data;

let executeIntcode = (initialState) => {
    let outputState = initialState.slice(0);

    initialState.forEach((integer, index) => {
        if (index % 4 !== 0 || integer === 99) return;

        switch (integer) {
            case 1:
                outputState[outputState[index+3]] = outputState[outputState[index+1]] + outputState[outputState[index+2]];
                break;
            case 2:
                outputState[outputState[index+3]] = outputState[outputState[index+1]] * outputState[outputState[index+2]];
                break;
        }
    });

    return outputState;
};

let runProgramPartOne = () => executeIntcode(input);

let runProgramPartTwo = () => {
    let noun;
    let verb;

    for (let i = 0; i < 100; i++) {
        let memory = input.slice(0);

        memory[1] = i;

        for (let j = 0; j < 100; j++) {
            memory[2] = j;

            if (executeIntcode(memory)[0] === 19690720) {
                noun = memory[1];
                verb = memory[2];
                break;
            }
        }
    }

    return noun + ', ' + verb;
};

export {
    executeIntcode,
    runProgramPartOne,
    runProgramPartTwo
};
