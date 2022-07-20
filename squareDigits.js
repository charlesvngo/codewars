const squareDigits = (num) => {
  return num
    .toString()
    .split("")
    .reduce((prev, curr) => prev + (Number(curr) ** 2).toString());
};

console.log(squareDigits(3414));
