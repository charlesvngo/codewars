/**
 * @param {string[]} strs
 * @return {string}
 */

const longestCommonPrefix = (strs) => {
  // Set an empty output to add characters to if there are any str matches.
  let output = "";
  let testCase = strs[0];

  // Compare the first letter of a string to all the other characters in the array using .every()
  // If true, add it to the output. If false, return output;
  for (let i = 0; i < testCase.length; i++) {
    if (strs.every((str) => str.charAt(i) === testCase.charAt(i))) {
      output += testCase.charAt(i);
    } else {
      return output;
    }
  }
  return output;
};

console.log(longestCommonPrefix(["caress", "care", "careless"]));

// Alternate solution that times out on leetcode

// /**
//  * @param {string[]} strs
//  * @return {string}
//  */

// const longestCommonPrefix = (strs) => {
//   // Set an empty output to add characters to if there are any str matches.
//   let output = "";
//   let index = 0;

//   while (strs.every((str) => str.charAt(index) === strs[0].charAt(index))) {
//     output += strs[0].charAt(index);
//     index++;
//   }
//   return output;
// };

// console.log(longestCommonPrefix(["caress", "care", "careless"]));
