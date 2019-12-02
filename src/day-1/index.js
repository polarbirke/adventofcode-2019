import * as data from './input.json';

// input is an array with the puzzle data for day 1
const { input } = data;

// calculate the required fuel for a given mass
let calcRequiredFuelForMass = (mass) => Math.floor(mass/3)-2;

// calculate the required fuel for a given mass, but also take into account
// that the fuel has mass and thus also requires fuel
let calcRequiredFuelForMassAndFuel = (mass) => {
    let fuel = calcRequiredFuelForMass(mass);
    let totalfuel = 0;

    for(fuel; fuel > 0; fuel = calcRequiredFuelForMass(fuel)) {
        if (fuel > 0) {
            totalfuel += fuel;
        }
    }

    return totalfuel;
};

// calculate the total fuel requirement for part 1
let calcTotalFuelForMasses = () => {
    let totalFuel = 0;

    input.forEach((mass) => {
        totalFuel += calcRequiredFuelForMass(mass);
    });

    return totalFuel;
};

// calculate the total fuel requirement for part 2
let calcTotalFuelForMassesAndFuel = () => {
    let totalFuel = 0;

    input.forEach((mass) => {
        totalFuel += calcRequiredFuelForMassAndFuel(mass);
    });

    return totalFuel;
};

export {
    calcRequiredFuelForMass,
    calcRequiredFuelForMassAndFuel,
    calcTotalFuelForMasses,
    calcTotalFuelForMassesAndFuel
};
