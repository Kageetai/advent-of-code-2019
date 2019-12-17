import { chunk } from 'lodash';

import input from '../inputs/2.json';

const executeIntcode = (code: number[]) => {
  switch (code[0]) {
    case 1:
      input[code[3]] = input[code[1]] + input[code[2]];
      break;
    case 2:
      input[code[3]] = input[code[1]] * input[code[2]];
      break;
    case 99:
      // console.log('stop');
      break;
  }
};

chunk(input, 4).forEach(executeIntcode);

export default input;
