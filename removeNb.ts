const removeNb = (n: number) => {
  let sum: number = (n * (n + 1)) / 2;
  const arr = [] as any[];
  let a: number = 0;
  let b: number = n;

  while (a < b && a < n && b > 0) {
    a * b < sum - a - b ? a++ : b--;
    if (a * b === sum - a - b) {
      arr.push([a, b]);
    }
  }

  const output = JSON.parse(JSON.stringify([...arr]));

  return output.concat(arr.reverse().map((e) => e.reverse()));
};

console.log(removeNb(100003));

export {};