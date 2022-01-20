function destroyer(arr, ...val) {
  return arr.filter((item) => !val.includes(item));
}

console.log(destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3));
