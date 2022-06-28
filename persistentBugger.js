const persistence = (num) => {
  let count = 0;
  let reducer = num;
  while (reducer >= 10) {
    count++;
    reducer = reducer
      .toString()
      .split("")
      .reduce((prev, curr) => Number(prev) * Number(curr));
  }
  return count;
};

console.log(persistence(39));
