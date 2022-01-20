function sumAll(arr) {
  let sumUpAll = 0;

  const [val1, val2] = arr;

  let max = Math.max(val1, val2);
  let min = Math.min(val1, val2);

  for (let i = min; i <= max; i++) {
    sumUpAll += i;
  }

  return sumUpAll;
}

console.log(sumAll([1, 4]));
