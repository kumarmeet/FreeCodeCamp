function dropElements(arr, func) {
  // let i = 0;
  // while (i < arr.length) {
  //   if (!func(arr[i])) {
  //     arr.splice(i, 1);
  //   } else {
  //     i++;
  //   }
  // }

  while (arr.length > 0 && !func(arr[0])) {
    arr.shift();
  }
  return arr;
}

console.log(
  dropElements([1, 2, 3, 9, 2], function (n) {
    return n > 2;
  })
);

function dropElements_1(arr, func) {
  let i = 0;
  while (i < arr.length) {
    if (!func(arr[i])) {
      arr.splice(i, 1);
    } else {
      i++;
    }
  }

  return arr;
}
