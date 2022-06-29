const moveZeroes = (arr) => {
  const output = [];
  const zeroArray = [];
  for (const elem of arr) {
    elem === 0 ? zeroArray.push(elem) : output.push(elem);
  }
  return output.concat(zeroArray);
};
