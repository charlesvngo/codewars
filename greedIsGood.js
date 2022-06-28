const score = (dice) => {
  const output = {};
  const scoring = {
    1: 1000,
    2: 200,
    3: 300,
    4: 400,
    5: 500,
    6: 600,
  };
  let points = 0;

  dice.forEach((die) => (output[die] ? (output[die] += 1) : (output[die] = 1)));
  for (const count in output) {
    if (output[count] >= 3) {
      output[count] -= 3;
      points += scoring[count];
    }
    if (count === "1") {
      points += 100 * output[count];
    }
    if (count === "5") {
      points += 50 * output[count];
    }
  }
  return points;
};

console.log(score([2, 4, 4, 5, 4]));
