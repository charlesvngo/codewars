const solution = (input, markers) => {
  let output = "";
  for (let i = 0; i < markers.length; i++) {
    if (input.indexOf(markers[i]) >= 0 && i === 0) {
      output += input.slice(i, input.indexOf(markers[i]) - 1);
    } else if (input.indexOf("\n") < input.indexOf(markers[i])) {
      output += input.slice(input.indexOf("\n"), input.indexOf(markers[i]) - 1);
    }
  }
  return output;
};

console.log(
  solution("apples, plums % and bananas\npears\noranges !applesauce", [
    "%",
    "!",
  ])
);

// "apples, plums\npears\noranges"
