function diffArray(arr1, arr2) {
  const newArr = arr1
    .concat(arr2)
    .filter((item) => !arr1.includes(item) || !arr2.includes(item));

  return newArr;
}

console.log(
  diffArray(
    ["andesite", "grass", "dirt", "pink wool", "dead shrub"],
    ["diorite", "andesite", "grass", "dirt", "dead shrub"]
  )
);

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));

console.log(
  [1, 2, 3, 5, 1, 2, 3, 4, 5].filter(
    (item) => ![1, 2, 3, 4, 5].includes(item) || ![1, 2, 3, 5].includes(item)
  )
);
