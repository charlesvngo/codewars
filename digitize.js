const digitize = (n) => {
  return n
    .toString()
    .split("")
    .reverse()
    .map((x) => Number(x));
};
