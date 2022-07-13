const xo = (str) => {
  const x = str
    .toLowerCase()
    .split("")
    .filter((x) => x === "x");
  const o = str
    .toLowerCase()
    .split("")
    .filter((o) => o === "o");

  return x.length === o.length;
};

console.log(xo("xxoo"));
