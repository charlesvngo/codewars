const hamming = (n) => {
  const seq = [1];
  let i = 0;
  let x = 1;

  // Incrementors for the sequence;
  let i2 = -1;
  let i3 = -1;
  let i5 = -1;

  // Constants
  let x2 = 2;
  let x3 = 3;
  let x5 = 5;

  while (++i < n) {
    seq[i] = x = x2 <= x3 && x2 <= x5 ? x2 : x3 <= x5 ? x3 : x5;

    while (x2 <= x) x2 = 2 * seq[++i2];
    while (x3 <= x) x3 = 3 * seq[++i3];
    while (x5 <= x) x5 = 5 * seq[++i5];
  }

  return seq[n - 1];
};

console.log(hamming(5000));
