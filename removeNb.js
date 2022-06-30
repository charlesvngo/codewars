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

// Below is the best practice listed on codewars
// from the instruction:
// a * b = S(n) - a - b

// and the sum of all first n natural numbers is
// S(n) = n * (n + 1) / 2

// so we can refrase the first formula like this:
// a * b = n * (n + 1) / 2 - a - b
// a * b + b = n * (n + 1) / 2 - a
// b * (a + 1) = n * (n + 1) / 2 - a
// b = (n * (n + 1) / 2 - a) / (a + 1)

// but a and b are natural and up to n

// function removeNb (n) {

//   var results = [];
//   for (var a = 1; a <= n; a++) {
//     var b = (n * (n + 1) / 2 - a) / (a + 1);
//     if (b % 1 === 0 && b <= n) results.push([a, b]);
//   }
//   return results;
// }
