const isPangram = (string) => {
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  string
    .toLowerCase()
    .split("")
    .forEach((letter) => {
      if (alphabet.includes(letter)) {
        alphabet = alphabet.replace(letter, "");
      }
    });
  return alphabet.length === 0;
};

console.log(isPangram("The quick brown fox jumps over the lazy dog."));
