/**
 * @param {string} s
 * @return {boolean}
 */

const isValid = (s) => {
  // separate the string into elements of an array
  const splitString = s.split("");

  //
  for (let i = splitString.length - 1; i >= 0; i--) {
    if (
      splitString[i] === ")" &&
      splitString.indexOf("(") !== -1 &&
      splitString.indexOf("(") < i
    ) {
      splitString.splice(i, 1);
      splitString.splice(splitString.indexOf("("), 1);
    }
    if (
      splitString[i] === "]" &&
      splitString.indexOf("[") !== -1 &&
      splitString.indexOf("[") < i
    ) {
      splitString.splice(i, 1);
      splitString.splice(splitString.indexOf("["), 1);
    }
    if (
      splitString[i] === "}" &&
      splitString.indexOf("{") !== -1 &&
      splitString.indexOf("{") < i
    ) {
      splitString.splice(i, 1);
      splitString.splice(splitString.indexOf("{"), 1);
    }
  }
  return splitString.length === 0;
};

console.log(isValid("([)]"));
