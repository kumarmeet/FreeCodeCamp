function convertHTML(str) {
  return str
    .split("")
    .map((val, idx, arr) => {
      if (val === "&") {
        return (val = "&amp;");
      } else if (val === ">") {
        return (val = "&gt;");
      } else if (val === "<") {
        return (val = "&lt;");
      } else if (val === `"`) {
        return (val = "&quot;");
      } else if (val === `'`) {
        return (val = "&apos;");
      }
      return val;
    })
    .join("");
}

convertHTML("abc");

function convertHTML_1(str) {
  // Use Object Lookup to declare as many HTML entities as needed.
  const htmlEntities = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&apos;",
  };
  //Use map function to return a filtered str with all entities changed automatically.
  return str
    .split("")
    .map((entity) => htmlEntities[entity] || entity)
    .join("");
}

// console.log("Dolce & Gabbana".match(/&|>|<|"|'/));
