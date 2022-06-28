const anagrams = (word, words) => {
  let output = [];
  for (const w of words) {
    let currentWord = w;
    if (currentWord.length === word.length) {
      for (const l of word) {
        if (currentWord.indexOf(l) >= 0) {
          currentWord = currentWord.replace(l, "");
        }
      }
    }
    if (currentWord.length === 0) {
      output.push(w);
    }
  }
  return output;
};

console.log(anagrams("abba", ["aabb", "abcd", "bbaa", "dada"]));
