/**
 * @param {string} s
 * @return {boolean}
 */

const isValid = (s) => {
  // Create a map to identify the other complimentary bracket
  const brackets = {
    "}": "{",
    "]": "[",
    ")": "(",
  };

  const stack = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(" || s[i] === "[" || s[i] === "{") {
      stack.push(s[i]);
    } else {
      if (brackets[s[i]] === stack[stack.length - 1]) {
        stack.pop();
      } else return false;
    }
  }

  if (stack.length === 0) return true;
  else return false;
};

console.log(isValid("()"));
