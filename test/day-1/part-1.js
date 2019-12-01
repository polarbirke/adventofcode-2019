const test = require('tape');
import { calcRequiredFuelForMass } from '../../src/day-1/index.js';

test('1.1: Calculate the required amount of fuel for a given mass', function (t) {
    t.equal(2, calcRequiredFuelForMass(12), "The required fuel for a mass of 12 should be 2.");
    t.equal(2, calcRequiredFuelForMass(14), "The required fuel for a mass of 14 should be 2.");
    t.equal(654, calcRequiredFuelForMass(1969), "The required fuel for a mass of 1969 should be 654.");
    t.equal(33583, calcRequiredFuelForMass(100756), "The required fuel for a mass of 100756 should be 33583.");

    t.end();
});