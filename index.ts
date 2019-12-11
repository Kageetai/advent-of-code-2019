import input from './inputs/1.json';

const calcFuelByMass = (mass: number) => Math.floor(mass / 3) - 2;
const add = (n: number, m: number) => n + m;

const result = input.map(calcFuelByMass).reduce(add, 0);

console.log(result);
