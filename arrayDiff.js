// const arrayDiff = (a, b) => {
//   const output = [];
//   for (const item of a) {
//     if (!b.includes(item)) output.push(item);
//   }
//   return output;
// }

const arrayDiff = (a, b) => {
  return a.filter((item) => !b.includes(item));
};
