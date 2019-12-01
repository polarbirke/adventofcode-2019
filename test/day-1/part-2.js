const test = require('tape');
import { calcRequiredFuelForMassAndFuel } from '../../src/day-1/index.js';

test('1.2: Calculate the required amount of fuel for a given mass including the fuel', function (t) {
    t.equal(2, calcRequiredFuelForMassAndFuel(12), "The required fuel for a mass of 14 including the fuel should be 2.");
    t.equal(2, calcRequiredFuelForMassAndFuel(14), "The required fuel for a mass of 14 including the fuel should be 2.");
    t.equal(966, calcRequiredFuelForMassAndFuel(1969), "The required fuel for a mass of 1969 including the fuel  should be 966.");
    t.equal(50346, calcRequiredFuelForMassAndFuel(100756), "The required fuel for a mass of 100756 including the fuel  should be 50346.");

    t.end();
});