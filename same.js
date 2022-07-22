const comp = (array1, array2) => {
  let output = true;
  const array3 = array1.map((e) => array2.filter((x) => x === e * e));
  for (const item of array3) {
    if (!item.length) {
      output = false;
    }
  }
  return output;
};

const a1 = [11, 19, 19, 19, 121, 144, 144, 161, 161];
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
