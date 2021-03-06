function convertToRoman(num) {
  const numbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const roman = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];

  // Create an empty string for the result
  let result = '';

  // Loop through the numbers while the num is greater than the number, keep looping
  numbers.forEach(function(number, i) {
     while (num >= number) {
       // add numerals as you go eg. 55 --> loop numbers, find L, loop again, find V
       result += roman[i];
       num -= number;
     }
  });

  return result;
}

console.log(convertToRoman(13));
