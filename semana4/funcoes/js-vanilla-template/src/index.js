//Exercícios de interpretação de código

//1)a)
//10
//20

//b) A função iria ser calculada mas mão apareceria nada no console.

//2)a) As saídas serão "Darvas" e "Caio"

//b) "Amanda" e "Caio".

//3) O código irá analisar cada elemento de um array, pegar os elementos pares, elavar ao quadrado 
//e adicionar em um novo array chamado arrayFinal, um melhor nome poderia ser adicionaParesAoQuadrado

//---------------------------------------------------------------------------------------------------

//Exercícios de escrita de código

//4)
//a)
// function imprimeFrase() {
//     console.log("Eu sou Carlos, tenho 24 anos, moro em Juiz de Fora e sou estudante")    
// }

// imprimeFrase()

//b)

// function imprimeFrase (nome, idade, cidade, estuda) {
//     if (estuda === "sim") {
//         console.log(`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou estudante`)    
//     }
//     else if (estuda === "nao") {
//         console.log(`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e não sou estudante`)    
//     }    
// }

// imprimeFrase("Carlos", 24, "Juiz de Fora", "sim")


//5)a))

// function somaNumeros(numero1,numero2) {
//     const soma = numero1 + numero2  
//     return soma  
// }

// const somaCalculada = somaNumeros(2,3)
// console.log(`Soma = ${somaCalculada}`)

//b)

// function comparaNumeros(numero1, numero2) {
//     if (numero1 === numero2) {
//         console.log(`Os números são iguais.`)    
//     }
//     else if (numero1 > numero2) {
//         console.log(`O primeiro número é maior.`)    
//     }
//     else {
//         console.log(`O segundo número é maior`)
//     }
// }

// comparaNumeros(1,2)

//c)

// function imprime10Vezes(string) {
//     for (let i = 0; i < 10; i++) {
//         console.log(string)      
//     }       
// }

// imprime10Vezes("Três pratos de trigo para três tigres tristes.")


//6)

const arrayTeste = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]

//a)

// function elementos(array) {
//     console.log(array.length)    
// }

// elementos(arrayTeste)

//b)

// function testePar(numero) {
//     if (numero % 2 === 0) {
//         console.log(`O número é par.`)    
//     }
//     else {
//         console.log(`O número é ímpar, ou é um número racional.`)
//     }    
// }

// testePar(3.2)

//c)

// function quantidadePar(array) {
//     let contador = 0
//     for (const elemento of array) {
//         if (elemento % 2 === 0) {
//             contador++    
//         }   
//     }
//     return contador
// }

// const pares = quantidadePar(arrayTeste)
// console.log("O número de pares é:", pares)

//d)


//-------------------------------------------------------------------------------------------------

//DESAFIOS

//1)

// const expressao = (exemplo) => {
//     console.log(exemplo)
// }

// expressao("Parâmetro")

//1.2)

// const expressao = (exemplo) => {
//     console.log(exemplo)
// }

// const somaNumeros = (num1, num2) => {
//     soma = num1 + num2
//     expressao(soma)
// }

// somaNumeros(1,2)


//2)

// const numeros = [0, 8, 23, 16, 10, 15, 41, 12, 13]

//a)

// function paresVezes2(array) {
//     let novoArray = []
//     for (const elemento of array) {
//         if (elemento % 2 === 0) {
//             novoArray.push(elemento*2)
//         }       
//     }
//     return novoArray
// }

// const arrayTestePar = paresVezes2(numeros)
// console.log(arrayTestePar)

//b))

// function maiorDoArray(array) {
//     let maiorNumero = 0
//     for (const numero of array) {
//         if (numero > maiorNumero) {
//             maiorNumero = numero    
//         }
//     }
//     console.log(`Maior número do array: ${maiorNumero}`)
//     return maiorNumero
// }

// const maior = maiorDoArray(numeros)


//c)

// function indiceMaior(array) {
//     let maiorNumero = 0
//     let indice = 0
  
//     for (const elemento of array) {
//         if (elemento > maiorNumero) {
//             maiorNumero = elemento
//         }        
//     }
    
//     console.log("O maior número é:", maiorNumero)
    
//     for (let i = 0; i < array.length; i++) {
//         if (maiorNumero === array[i]) {
//             indice = i
//             console.log("E seu índice é:", indice)    
//         }    
//     }
//  return indice   
// }
    
// const indice = indiceMaior(numeros)


//d)

// function inverteArray(array) {
//     for (let i = 0; i < array.length; i++) {
//         let indice = array.length - 1 - i
//         console.log(array[indice])
        
//     }    
// }
// inverteArray(numeros)