const highAndLow = (numbers) => {
  const array = numbers.split(" ").sort((a, b) => a - b);
  return `${array[array.length - 1]} ${array[0]}`;
};

console.log(highAndLow("5 4 3 2 1"));
