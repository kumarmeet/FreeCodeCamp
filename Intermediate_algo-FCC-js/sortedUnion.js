function uniteUnique(...arr) {
  const newArr = new Set(arr.flat()).values();

  return Array.from(newArr); //converting set values to array
}

console.log(uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]));
