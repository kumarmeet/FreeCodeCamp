function pairElement(str) {
  const pairs = {
    A: "T",
    T: "A",
    C: "G",
    G: "C",
  };
  const arr = str.split("");
  console.log(arr);
  return arr.map((x) => [x, pairs[x]]);
}

console.log(pairElement("GCG"));
