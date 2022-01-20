function fearNotLetter(str) {
  const alphabets = "abcdefghijklmnopqrstuvwxyz";
  let k = 0;

  for (let i = 0; i < alphabets.length; i++) {
    if (str[0] === alphabets[i]) {
      for (let j = i; j <= str.length; j++) {
        if (str[k++] !== alphabets[j]) {
          return alphabets[j];
        }
      }
    }
  }

  return;
}

console.log(fearNotLetter("rtuv"));

function fearNotLetter2(str) {
  for (var i = 0; i < str.length; i++) {
    var code = str.charCodeAt(i);

    if (code !== str.charCodeAt(0) + i) {
      return String.fromCharCode(code - 1);
    }
  }
  return undefined;
}

const set = new Set([1, 2, 3, 5, 2, 1, 4, 2, 1, 6, 7, 8]);

console.log(set);
