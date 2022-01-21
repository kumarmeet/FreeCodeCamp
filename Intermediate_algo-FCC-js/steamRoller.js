function steamrollArray(arr) {
  // return arr.reduce((a, b) => {
  //   if (Array.isArray(b)) {
  //     return a.concat(steamrollArray(b));
  //   }
  //   return a.concat(b);
  // }, []);

  //this line is similar to above chunks of code
  return arr.flat(arr.length);
}

console.log(steamrollArray([1, {}, [3, [[4]]]]));
