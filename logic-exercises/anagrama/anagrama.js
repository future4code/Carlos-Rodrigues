const checkAnagram = (s, t) => {
  if (s.length !== t.length) return false;
  let countEquals = 0;

  for (let char of s) {
    if (t.includes(char)) {
      countEquals++;
    }
  }

  if (countEquals === t.length) return true;
  return false;
};

const anagram = checkAnagram("gato", "rato");
console.log(anagram);

// Gabarito:

const isAnagram = (s, t) => {
  return s.split("").sort().join("") === t.split("").sort().join("");
  // split, separa os caracteres da string
  // sort, ordena os caracteres para que as duas strings possuam a mesma "estrutura"
  // join, junta os caracteres
};
