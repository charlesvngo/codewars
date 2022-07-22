const comp = (array1, array2) => {
  if (!array1 || !array2 || array1.length !== array2.length) return false;
  if (array1.length === 0 && array2.length === 0) return true;

  array1.sort((a, b) => a - b);
  array2.sort((a, b) => a - b);
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] * array1[i] !== array2[i]) return false;
  }
  return true;
};

const a1 = [11, 19, 19, 19, 121, 144, 144, 161];
const a2 = [
  11 * 11,
  19 * 19,
  19 * 19,
  19 * 19,
  121 * 121,
  144 * 144,
  144 * 144,
  161 * 161,
];
console.log(comp(a1, a2));
