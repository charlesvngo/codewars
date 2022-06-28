const findUniq = (arr) => {
  let output;
  const count = {};
  arr.forEach((num) => {
    count[num] ? (count[num] += 1) : (count[num] = 1);
  });

  for (const numbers in count) {
    if (count[numbers] === 1) {
      output = numbers;
    }
  }

  return Number(output);
};

console.log(findUniq([1, 1, 1, 2, 1, 1]));
