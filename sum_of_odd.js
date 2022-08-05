// Given the triangle of consecutive odd numbers:

//              1
//           3     5
//        7     9    11
//    13    15    17    19
// 21    23    25    27    29
// ...

// Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

// 1 -->  1
// 2 --> 3 + 5 = 8

const rowSumOddNumbers = (n) => {
  // create an array of all the required odd numbers.
  let array = [];
  let arrayLength = 0;
  let output = 0;

  for (let i = 0; i <= n; i++) {
    arrayLength += i;
  }
  for (let i = 0; i < arrayLength; i++) {
    array.push(1 + i * 2);
  }
  for (let i = 0; i < n; i++) {
    output += array[array.length - 1 - i];
  }

  return output;
};

console.log(rowSumOddNumbers(2));
