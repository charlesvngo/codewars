const toCamelCase = (str) => {
  let words;
  let result = "";

  if (str.indexOf("-") >= 0) {
    words = str.split("-");
  } else if (str.indexOf("_") >= 0) {
    words = str.split("_");
  }

  for (let i = 0; i < words.length; i++) {
    let tempString = "";
    if (i !== 0) {
      tempString += words[i].substr(0, 1).toUpperCase() + words[i].substr(1);
    } else {
      tempString += words[i];
    }
    result += tempString;
  }

  return result;
};

console.log(toCamelCase("the_stealth_warrior"));
console.log(toCamelCase("The-Stealth-Warrior"));
console.log(toCamelCase("A-B-C"));
