import { chunk } from 'lodash';

import input from '../inputs/2.json';

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

const result = executeProgram([...input], 12, 2);

export default result[0];
