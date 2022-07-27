/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = (nums) => {
  for (let i = 0; i < nums.length; i++) {
    const value = nums.shift();
    while (nums.includes(value)) {
      nums.shift();
    }
    nums.push(value);
  }
};

const array = [1, 1, 2];
console.log(removeDuplicates(array));
console.log(array);
