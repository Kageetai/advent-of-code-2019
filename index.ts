fetch('https://adventofcode.com/2019/day/1/input')
  .then(res => {
    console.log(res);
    return res.text();
  })
  .then(text => console.log('text', text));
