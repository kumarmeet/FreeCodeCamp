function telephoneCheck(str) {
  // Good luck!
  let valideNumber = true;
  const strToArr = str.split("");

  // Regular Expressions
  const closeBracket = /\)/;
  const openBracket = /\(/;
  const nonValidChars = /[^\d\s-)(]/;

  const numbersCount = strToArr.reduce(
    (accu, char) => (isNaN(char) || char === " " ? accu : (accu += 1)),
    0
  );
  console.log(numbersCount);

  if (numbersCount !== 10 && numbersCount !== 11) valideNumber = false;
  if (numbersCount === 11 && strToArr[0] !== "1") valideNumber = false;
  if (strToArr[0] === "(" && strToArr[4] !== ")") valideNumber = false;
  if (closeBracket.test(str) && !openBracket.test(str)) valideNumber = false;
  if (nonValidChars.test(str)) valideNumber = false;

  return valideNumber;
}

var re =
  /^([+]?1[\s]?)?((?:[(](?:[2-9]1[02-9]|[2-9][02-8][0-9])[)][\s]?)|(?:(?:[2-9]1[02-9]|[2-9][02-8][0-9])[\s.-]?)){1}([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2}[\s.-]?){1}([0-9]{4}){1}$/;

function telephone_Check(str) {
  return re.test(str);
}

console.log("Valide number: " + telephoneCheck("1(111)111-1111"));
