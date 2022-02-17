// Exercício 2:

// Implemente um método que performe uma compressão de string usando a contagem dos caracteres repetidos em sequência. Caso o resultado final tenha um tamanho maior do que a string inicial, seu programa deve retornar a string inicial

// Exemplos:

// Para o input aabbb o resultado deve ser a2b3
// Para o input aabcccccaaa o resultado deve ser a2b1c5a3
// Para o input accurate o resultado deve ser accurate (já que inicialmente o código retornaria a1c2u1r1a1t1e1 que possui o tamanho maior do que accurate)
// Para o input escola o resultado deve ser escola (já que inicialmente o código retornaria e1s1c1o1l1a1 que possui o tamanho maior do que escola)
// Para o input accuraaaaaaaaaate, o resultado deve ser a1c2u1r1a10t1e1

// tenho que comparar o elemento do array com o proximo e ver se é igual ao proximo
const stringCompression = (string) => {
  const substrings = [];
  let lastChar = string[0]; // lastchar = a
  let charCount = 0;

  for (const char of string) {
    //Início
    // 1º laço a === a não entra no if
    // 2º laço a === a não entra no if
    // 3º laço a === a não entra no if
    // 4º laço b !== a entra no if
    // 5º laço b === b não entra no if
    // 6º laço b === b não entra no if

    if (char !== lastChar) {
      substrings.push(lastChar + charCount); // 4º laço -> substring[a3], lastchar = b, zerou charCount
      lastChar = char;
      charCount = 0;
    }
    charCount++;
    // Fim
    // 1º laço charCount = 1, lastChar = a
    // 2º laço charCount = 2, lastChar = a
    // 3º laço charCount = 3, lastChar = a
    // 4º laço charCount = 1, lastChar = b
    // 5º laço charCount = 2, lastChar = b
    // 6º laço charCount = 3, lastChar = b
  }
  substrings.push(lastChar + charCount); // substrings.push(b3) -> substrings = [a3, b3]
  let result = "";
  for (const key of substrings) {
    result += key;
  }
  return result.length > string.length ? string : result;
};

stringCompression("aaabbb");
