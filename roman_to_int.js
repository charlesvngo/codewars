/**
 * @param {string} s
 * @return {number}
 */
const romanToInt = (s) => {
  let output = 0;
  const digits = s.split("");
  const romanNumerals = {
    I: 1,
    IV: 4,
    V: 5,
    IX: 9,
    X: 10,
    XL: 40,
    L: 50,
    XC: 90,
    C: 100,
    CD: 400,
    D: 500,
    CM: 900,
    M: 1000,
  };

  for (let i = s.length - 1; i >= 0; i--) {
    if (
      (digits[i] === "V" && digits[i - 1] === "I") ||
      (digits[i] === "X" && digits[i - 1] === "I") ||
      (digits[i] === "L" && digits[i - 1] === "X") ||
      (digits[i] === "C" && digits[i - 1] === "X") ||
      (digits[i] === "D" && digits[i - 1] === "C") ||
      (digits[i] === "M" && digits[i - 1] === "C")
    ) {
      output += romanNumerals[digits[i - 1] + digits[i]];
      i--;
    } else {
      output += romanNumerals[digits[i]];
    }
  }
  return output;
};

console.log(romanToInt("IX"));
console.log(romanToInt("MCMXCIV"));
