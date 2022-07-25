/**
 * @param {number} x
 * @return {boolean}
 */

const isPalindrome = (x) => {
  const splitString = x.toString().split("");
  for (let i = 0; i < splitString.length; i++) {
    if (splitString[i] !== splitString[splitString.length - 1 - i]) {
      return false;
    }
  }
  return true;
};
