function sumFibs(num) {
  const newArr = [];
  let n1 = 1,
    n2 = 1,
    nextTerm;

  for (let i = 1; i <= num; i++) {
    newArr.push(n1);
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
  }

  return newArr
    .filter((val) => val <= num && val % 2 === 1)
    .reduce((pre, cur) => pre + cur);
}

console.log(sumFibs(4000000));
