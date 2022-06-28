const sortTwisted37 = (array) => {
  const tempArray = array.map((number) => {
    return twistDigits(number);
  });

  tempArray.sort((a, b) => a - b);

  const output = tempArray.map((number) => {
    return twistDigits(number);
  });

  return output;
};

const twistDigits = (number) => {
  let output = number;
  if (output <= 10) {
    if (number.toString().includes(3)) {
      output = Number(output.toString().replace(/3/g, "7"));
    } else if (number.toString().includes(7)) {
      output = Number(output.toString().replace(/7/g, "3"));
    }
  } else {
    const tempArray = output.toString().split("");
    output = Number(
      tempArray
        .map((number) => {
          return twistDigits(Number(number));
        })
        .join("")
    );
  }
  return output;
};

console.log(sortTwisted37([1, 2, 3, 4, 5, 6, 7, 8, 9]));
console.log(sortTwisted37([9, 2, 4, 7, 3]));
console.log(sortTwisted37([12, 13, 14]));
