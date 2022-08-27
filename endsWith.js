// Complete the solution so that it returns true if the first argument(string)
// passed in ends with the 2nd argument (also a string).

// Examples:

// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false

const solution = (str, ending) => {
  const string = str.split("").reverse();
  const end = ending.split("").reverse();

  for (let i = 0; i < end.length; i++) {
    if (end[i] !== string[i]) {
      return false;
    }
  }

  return true;
};

// Clever and recommended solution uses javascript built in method endsWith()
// const solution = (str, ending){
//   return str.endsWith(ending);
// }
