function rot13(str) {
  // const mapAlphabet = [];

  // for (i = 0; i < 38; i++) {
  //   mapAlphabet.push(String.fromCharCode(parseInt(65 + i)));
  // }

  const mapAlphabet = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
  ];
  var decodedArr = [];

  for (i = 0; i < str.length; i++) {
    var newArr = mapAlphabet.indexOf(str[i]) + 13;
    if (mapAlphabet.indexOf(str[i]) == -1) {
      decodedArr.push(str[i]);
    } else {
      decodedArr.push(mapAlphabet[newArr]);
    }
  }
  return decodedArr.join("");
}

function rot_13(str) {
  // LBH QVQ VG!
  return str.replace(/[A-Z]/g, (L) =>
    String.fromCharCode((L.charCodeAt(0) % 26) + 65)
  );
}

console.log(rot_13("LBH QVQ VG!"));
