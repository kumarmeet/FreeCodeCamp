function truthCheck(collection, pre) {
  return collection.map((user) => user[pre]).every((val) => val);
}

console.log(
  truthCheck(
    [
      { user: "Tinky-Winky", sex: "male", age: 0 },
      { user: "Dipsy", sex: "male", age: 3 },
      { user: "Laa-Laa", sex: "female", age: 5 },
      { user: "Po", sex: "female", age: 4 },
    ],
    "age"
  )
);
