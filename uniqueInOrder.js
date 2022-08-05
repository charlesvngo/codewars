// Implement the function unique_in_order which takes as argument a sequence
// and returns a list of items without any elements with the same
// value next to each other and preserving the original order of elements.

// For example:
// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]

const uniqueInOrder = (iterable) => {
  let array = [];
  let output = [];
  !Array.isArray(iterable)
    ? (array = [...iterable.split("")])
    : (array = [...iterable]);

  for (let i = 0; i < array.length; i++) {
    if (array[i] !== array[i + 1]) {
      output.push(array[i]);
    }
  }
  return output;
};

console.log(uniqueInOrder("ABBCcAD"));

// Below is the highest rated solution on Codewars using .filter()
// var uniqueInOrder=function(iterable){
//   return [...iterable].filter((a, i) => a !== iterable[i-1])
// }
