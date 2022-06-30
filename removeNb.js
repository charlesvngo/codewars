// const removeNb = (n) => {
//   let sum = (n * (n + 1)) / 2;
//   const output = [];

//   for (let i = 0; i <= n - 1; i++) {
//     for (let j = 1; j <= n; j++) {
//       if (i * j === sum - i - j) {
//         output.push([i, j]);
//       }
//     }
//   }
//   return output;
// };

// console.log(removeNb(26));

// const removeNb = (n) => {
//   let sum = (n * (n + 1)) / 2;
//   const output = [];
//   let a = 1;
//   let b = n;

//   while (a * b !== sum - a - b || a < b) {
//     a * b < sum - a - b ? a++ : b--;
//     if (a * b === sum - a - b && b !== 0) {
//       output.push([a, b]);
//     }
//   }
//   return output;
// };

// console.log(removeNb(100003));

const removeNb = (n) => {
  let sum = (n * (n + 1)) / 2;
  const arr = [];
  let a = 0;
  let b = n;

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
