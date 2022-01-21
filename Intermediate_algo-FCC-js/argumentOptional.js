function addTogether() {
  //this is the way to pass argument without using function parenthesis
  const [first, second] = arguments;

  if (typeof first !== "number") {
    return undefined;
  }

  if (second === undefined) {
    return (second) => addTogether(first, second);
  }

  if (typeof second !== "number") {
    return undefined;
  }

  return first + second;
}

console.log(addTogether(5)(7));
