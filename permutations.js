// function takes a string and returns all permutations for the characters in that string.
// "aabb" => ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']

const permutations = (string) => {
  const generatePermutations = (str) => {
    if (str.length <= 2)
      return str.length === 2 ? [str, str[1] + str[0]] : [str];
    return str
      .split("")
      .reduce(
        (prevLetter, letter, index) =>
          prevLetter.concat(
            generatePermutations(
              str.slice(0, index) + str.slice(index + 1)
            ).map((val) => letter + val)
          ),
        []
      );
  };

  return Array.from(new Set(generatePermutations(string)));
};

console.log(permutations("aabb"));
