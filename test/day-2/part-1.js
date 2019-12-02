const test = require('tape');
import { executeIntcode } from '../../src/day-2/index.js';

test('2.1: Execute Intcode', function (t) {
    t.deepEqual(executeIntcode([1,0,0,0,99]), [2,0,0,0,99], "The final state for an initial state of 1,0,0,0,99 should be 2,0,0,0,99.");
    t.deepEqual(executeIntcode([2,3,0,3,99]), [2,3,0,6,99], "The final state for an initial state of 2,3,0,3,99 should be 2,3,0,6,99.");
    t.deepEqual(executeIntcode([2,4,4,5,99,0]), [2,4,4,5,99,9801], "The final state for an initial state of 2,4,4,5,99,0 should be 2,4,4,5,99,9801.");
    t.deepEqual(executeIntcode([1,1,1,4,99,5,6,0,99]), [30,1,1,4,2,5,6,0,99], "The final state for an initial state of 1,1,1,4,99,5,6,0,99 should be 30,1,1,4,2,5,6,0,99.");

    t.end();
});