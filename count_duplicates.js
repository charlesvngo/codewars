// Count the number of Duplicates

// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.
// Example

// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice

// const duplicateCount = (text) => {
//   const uniqueCharacters = Array.from(new Set(text.toLowerCase().split("")));
//   return text.length - uniqueCharacters.length;
// };

// const duplicateCount = (text) => {
//   const filteredText = text
//     .toLowerCase()
//     .split("")
//     .filter((e, i) => e !== text[i - 1]);
//   return text.length - filteredText.length;
// };

const duplicateCount = (text) => {
  const uniqueChars = {};
  let uniqueCount = 0;
  text
    .toLowerCase()
    .split("")
    .forEach((e) => {
      if (uniqueChars[e] !== undefined) {
        uniqueChars[e] += 1;
      } else {
        uniqueChars[e] = 0;
      }
    });
  for (const i in uniqueChars) {
    if (uniqueChars[i]) {
      uniqueCount++;
    }
  }
  return uniqueCount;
};

console.log(duplicateCount("abcde"));
console.log(duplicateCount("aabbcde"));
console.log(duplicateCount("aabBcde"));
console.log(duplicateCount("indivisibility"));
console.log(duplicateCount("Indivisibilities"));

// Recommended solution from code wars
// function duplicateCount(text){
//   return (text.toLowerCase().split('').sort().join('').match(/([^])\1+/g) || []).length;
// }
