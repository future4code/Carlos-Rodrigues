//Exercícios de interpretação de código


//1) O código está declarando uma variável "valor" e atribuindo a ela o valor zero, após isso ele
// abre um "for" que irá fazer com que um laço seja repetido enquanto a variável "i" for menor do que
// cinco, dando o acréscimo de 1 na variável i cada iteração do laço, e a cada laço o valor da variável
// "i" será somada na variável "valor". Ao final vai ser mostrado a soma dos números de 0 a 4, que é
//10.

//2)a) 19, 21, 23, 25, 27, 30
//b) 

// let index = 0
// const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
// for (let numero of lista) {
//     console.log(index)
//     index++
  
// }


//DESAFIO 

// 0
// 00
// 000
// 0000

//---------------------------------------------------------------------------------------------------


//Exercícios de escrita de código

//3)

// const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

//a)
// for (const numero of arrayOriginal) {
//     console.log(numero)    
// }

//b)
// for (const numero of arrayOriginal) {
//     console.log(numero/10)    
// }

//c)
// const arrayNovo =[]
// for (const numero of arrayOriginal) {
// 	if (numero % 2 == 0){
// 	    arrayNovo.push(numero)
// 	}
// }

// console.log(arrayNovo)

//d)
// let index = 0
// for (const numero of arrayOriginal) {
//     console.log(`O elemento do índex ${index} é: ${numero}`)
//     index++
// }    

//e)
// let maiorValor = 0
// let menorValor = Infinity

// for (const numero of arrayOriginal) {
//     if (maiorValor < numero) {
//         maiorValor = numero
//     }
//     else if (numero < menorValor) {
//         menorValor = numero
//     }
// }

// console.log(`Maior valor: ${maiorValor}`)
// console.log(`Menor valor: ${menorValor}`)



