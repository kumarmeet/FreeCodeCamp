function nextInLine(arr, item) {
  arr.push(item);
  item = arr.shift();
  return item;
}

// Setup
const testArr = [5, 6, 7, 8, 9];

// Display code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 1));
console.log("After: " + JSON.stringify(testArr));
