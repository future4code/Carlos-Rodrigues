// Exercício 1
    
// Considere que a gente só possa fazer três operações com string: adicionar um caractere ao final dele, remover um caractere do final dele ou substituir um caractere por outro. Dizemos que uma string é 'one edit' de outra se ela for o resultado da original a partir de UMA SÓ dessas operações. Escreva um método que determine se uma string é  'one edit' de outra.
    
//Exemplos:
        
// "banan" é 'one edit' de "banana" (remoção de um caracter)
// "bananak" é 'one edit' de "banana" (adição de um caracter)
// "panana" é 'one edit' de "banana" (troca de um caracter)
// "bananaaa" **não** é 'one edit' de "banana" (adição de dois caracteres)

const checkString = (stringA, stringB) => {
  let counter = 0;
  const [lengthA, lengthB] = [stringA.length, stringB.length];

  if (Math.abs(lengthA - lengthB) > 1) {
    return console.log("Não é one edit.");
  } else if (lengthA > lengthB && stringA.includes(stringB)) {
    return console.log("É one edit");
  } else if (lengthB > lengthA && stringB.includes(stringA)) {
    return console.log("É one edit");
  }

  if (lengthA === lengthB) {
    for (let i = 0; i < lengthA; i++) {
      if (stringA[i] !== stringB[i]) {
        counter++;
      }
    }
    if (counter !== 1) {
      return console.log("Não é one edit");
    }
    return console.log("É one edit");
  }
};

checkString("banana", "banana");
