const disemvowel = (str) => {
  return str.replace(/[aeiou]/gi, "");
};

console.log(disemvowel("Apple"));
