const productFib = (prod) => {
  let n1 = 0;
  let n2 = 1;
  let nextTerm = 0;

  while (n1 * n2 < prod) {
    n1 = n2;
    n2 = nextTerm;
    nextTerm = n1 + n2;
  }

  return [n1, n2, n1 * n2 === prod];
};

console.log(productFib(4895));
console.log(
  "🚀 ~ file: productFib.js ~ line 16 ~ productFib(5895)",
  productFib(5895)
);
