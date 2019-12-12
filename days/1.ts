import input from '../inputs/1.json';

const calcFuelByMass = (mass: number) => Math.floor(mass / 3) - 2;
const add = (n: number, m: number) => n + m;
const getTotalFuel = (fuel: number) => {
  let newFuel = fuel;
  while (newFuel > 0) {
    newFuel = calcFuelByMass(newFuel);
    if (newFuel > 0) {
      fuel += newFuel;
    }
  }
  return fuel;
};

export default input
  .map(calcFuelByMass)
  .map(getTotalFuel)
  .reduce(add, 0);
