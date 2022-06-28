const getMiddle = (s) => {
  const middle = Math.ceil(s.length / 2);
  return s.slice(middle - 1, middle + (s.length % 2 === 0 ? 1 : 0));
};

console.log(getMiddle("testing"));
