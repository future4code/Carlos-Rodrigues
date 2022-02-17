const checkValidity = (string) => {
  if (string.length === 0) return true;
  const stack = [];

  for (let char of string) {
    if (char === "(" || char === "[" || char === "{") {
      stack.push(char);
    } else {
      const lastOpeningChar = stack.pop();
      if (!lastOpeningChar) {
        return false;
      } else if (
        (lastOpeningChar === "(" && char !== ")") ||
        (lastOpeningChar === "[" && char !== "]") ||
        (lastOpeningChar === "{" && char !== "}")
      ) {
        return false;
      }
    }
  }
};

const check = checkValidity([]);
console.log(check);
