function spinalCase(str) {
  str = str.replace(/([a-z])([A-Z])/g, "$1 $2");

  console.log(str);

  return str
    .toLowerCase()
    .split(/(?:_| )+/)
    .join("-");
}

console.log(spinalCase("thisIsSpinalTap"));
