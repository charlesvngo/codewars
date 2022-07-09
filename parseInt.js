const parseInt = (string) => {
  // list of strings to numbers from 0 - 99. These will be combined to make any number
  const digits = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
    ten: 10,
    eleven: 11,
    twelve: 12,
    thirteen: 13,
    fourteen: 14,
    fifteen: 15,
    sixteen: 16,
    seventeen: 17,
    eighteen: 18,
    nineteen: 19,
    twenty: 20,
    thirty: 30,
    forty: 40,
    fifty: 50,
    sixty: 60,
    seventy: 70,
    eighty: 80,
    ninety: 90,
    "one million": 1000000,
  };

  if (string.includes("thousand")) {
    const numArray = string
      .split("thousand")
      .map((word) => word.replace("and ", "").trim())
      .map((word, index) =>
        index === 0 ? parseInt(word) * 1000 : parseInt(word)
      );

    if (numArray[1] === undefined) {
      return numArray[0];
    } else {
      return numArray.reduce((prev, curr) => prev + curr);
    }
  }

  if (string.includes("hundred")) {
    const numArray = string
      .split("hundred")
      .map((word) => word.replace("and ", "").trim())
      .map((word, index) =>
        index === 0 ? parseInt(word) * 100 : parseInt(word)
      );

    if (numArray[1] === undefined) {
      return numArray[0];
    } else {
      return numArray.reduce((prev, curr) => prev + curr);
    }
  }

  if (string.includes("-")) {
    const numArray = string
      .split("-")
      .map((word) => parseInt(word))
      .reduce((previousValue, currentValue) => previousValue + currentValue);
    return numArray;
  }

  return digits[string];
};

console.log(parseInt("one thousand five hundred and seventeen"));

/*
Codewars best practice and clever

var words = {
  "zero":0, "one":1, "two":2, "three":3, "four":4, "five":5, "six":6, "seven":7, "eight":8, "nine":9,
  "ten":10, "eleven":11, "twelve":12, "thirteen":13, "fourteen":14, "fifteen":15, "sixteen":16,
  "seventeen":17, "eighteen":18, "nineteen":19, "twenty":20, "thirty":30, "forty":40, "fifty":50,
  "sixty":60, "seventy":70, "eighty":80, "ninety":90
};
var mult = { "hundred":100, "thousand":1000, "million": 1000000 };
function parseInt(str) {
  return str.split(/ |-/).reduce(function(value, word) {
    if (words[word]) value += words[word];
    if (mult[word]) value += mult[word] * (value % mult[word]) - (value % mult[word]);
    return value;
  },0);
}


*/
