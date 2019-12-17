import { chunk } from 'lodash';

import input from '../inputs/2.json';

const target = 19690720;

const executeProgram = (program: number[], noun: number, verb: number) => {
  program[1] = noun;
  program[2] = verb;
  const chunks = chunk(program, 4);

  (function() {
    for (let i = 0; i < chunks.length; i++) {
      const code = chunks[i];

      switch (code[0]) {
        case 1:
          program[code[3]] = program[code[1]] + program[code[2]];
          break;
        case 2:
          program[code[3]] = program[code[1]] * program[code[2]];
          break;
        case 99:
          return;
      }
    }
  })();

  return program;
};

const findTupel = () => {
  for (let noun = 0; noun < 100; noun++) {
    for (let verb = 0; verb < 100; verb++) {
      const output = executeProgram([...input], noun, verb)[0];
      if (output === target) {
        return 100 * noun + verb;
      }
    }
  }
};

export default findTupel();
