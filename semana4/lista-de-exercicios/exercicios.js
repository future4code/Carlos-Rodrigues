//Exercício 1

function inverteArray(array) {
   let arrayInvertido = []
   for (let i = array.length -1 ; i >= 0; i--) {
      arrayInvertido.push(array[i])
   }
   return arrayInvertido
} 

//Exercício 2

function retornaNumerosParesElevadosADois (array) {
   let novoArray = []
   
   for (const numero of array) {
      if (numero % 2 === 0) {
         novoArray.push(numero*numero)   
      }
   }
   return novoArray
}

//Exercício 3

function retornaNumerosPares (array) {
   let arrayPares = []
   for (const numeros of array) {
      if (numeros % 2  === 0) {
         arrayPares.push(numeros)   
      }  
   }
   return arrayPares
}

//Exercício 4

function retornaMaiorNumero(array) {
  let maior = 0
   for (const numero of array) {
      if (numero > maior) {
         maior = numero    
      }
   }
   return maior 
}

//Exercício 5

function retornaQuantidadeElementos (array) {
   let contador = array.length
   return contador
}

//Exercício 6

function retornaExpressoesBooleanas() {
   const respostas = [false, false, true, true, true]
   return respostas
}

//Exercício 7

function retornaNNumerosPares(n) {
   
   let novoArray = []
   for (let i = 0; i < n; i++) {
      novoArray.push(2*i)   
   }
   return novoArray 
}

// Exercício 8

function checaTriangulo(a, b, c) {
   let triangulo = ''

  if (a === b && b === c) {
     triangulo = 'Equilátero'    
  } else if (a === b && a !== c || a === c && b !== a) {
     triangulo = 'Isósceles'  
  } else if (a !== b && b !== c) {
     triangulo ='Escaleno'    
  }
  return triangulo
}

// Exercício 9

function comparaDoisNumeros(num1, num2) {
   let maior 
   let menor
   let divisivel
   let maiorMenosMenor

   if (num1 > num2) {
      maior = num1  
      menor = num2 
      maiorMenosMenor = num1 - num2
   }
   else if (num1 < num2) {
      maior = num2  
      menor = num1
      maiorMenosMenor = num2 - num1
   }
   else {
      console.log("Os números são iguais")
   }
   

   if (maior % menor === 0) {
      divisivel = true    
   }
   else {
      divisivel = false
   }
   
   comparador = {
      maiorNumero: maior,
      maiorDivisivelporMenor: divisivel,
      diferenca: maiorMenosMenor
   }
  return comparador
}

// Exercício 10

function segundoMaiorEMenor(array) {
   let maior = 0
   let segundoMaior = 0
   let menor = Infinity
   let segundoMenor = Infinity
   let arrayNumeros = []
   
   for (const numero of array) {
      if (numero > maior) {
         maior = numero   
      }
   }
   for (const numero of array) {
      if (numero > segundoMaior && numero < maior) {
         segundoMaior = numero   
      }  
   }
   arrayNumeros.push(segundoMaior)

   for (const numero of array) {
      if (numero < menor) {
         menor = numero   
      }
   }
   for (const numero of array) {
      if (numero < segundoMenor && numero > menor) {
         segundoMenor = numero   
      }  
   }
   arrayNumeros.push(segundoMenor)
   return arrayNumeros  
}

//Exercício 11

function ordenaArray(array) {

   for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < array.length; j++) {
         if (array[j] > array[j+1]) {
            let ordena = array[j]
            array[j] = array[j+1]
            array[j+1] = ordena 
         }   
      }    
   }
   return array
}

// Exercício 12

function filmeFavorito() {
   
  const dadosDoFilme = {
    nome: 'O Diabo Veste Prada',
    ano: 2006,
    diretor: 'David Frankel',
    atores: ['Meryl Streep', 'Anne Hathaway', 'Emily Blunt', 'Stanley Tucci']   
  }

return dadosDoFilme
}

// Exercício 13

function imprimeChamada() {
   // implemente sua lógica aqui
}

// Exercício 14

function criaRetangulo(lado1, lado2) {
   // implemente sua lógica aqui
}

// Exercício 15

function anonimizaPessoa(pessoa) {
   // implemente sua lógica aqui
}

// Exercício 16

const arrayDePessoas = [
  { nome: "Pedro", idade: 20 },
  { nome: "João", idade: 10 },
  { nome: "Paula", idade: 12 },
  { nome: "Artur", idade: 89 } 
]

// Exercício 16, letra A

function maioresDe18(arrayDePessoas) {
   // implemente sua lógica aqui
}

// Exercício 16, letra B

function menoresDe18(arrayDePessoas) {
   // implemente sua lógica aqui
}

// Exercício 17, letra A

function multiplicaArrayPor2(array) {
   // implemente sua lógica aqui
}

// Exercício 17, letra B

function multiplicaArrayPor2S(array) {
  // implemente sua lógica aqui
}

// Exercício 17, letra C

function verificaParidade(array) {
   // implemente sua lógica aqui
}

// Exercício 18

const pessoas = [
  { nome: "Paula", idade: 12, altura: 1.8},
  { nome: "João", idade: 20, altura: 1.3},
  { nome: "Pedro", idade: 15, altura: 1.9},
  { nome: "Luciano", idade: 22, altura: 1.8},
  { nome: "Artur", idade: 10, altura: 1.2},
  { nome: "Soter", idade: 70, altura: 1.9}
]

//Exercício 18, letra A

function retornaPessoasAutorizadas() {
   // implemente sua lógica aqui
}


// Exercício 18, letra B

function retornaPessoasNaoAutorizadas() {
   // implemente sua lógica aqui
}

//Exercício 19

const consultasNome = [
   { nome: "João", dataDaConsulta: "01/10/2021" },
   { nome: "Pedro", dataDaConsulta: "02/07/2021" },
   { nome: "Paula", dataDaConsulta: "03/11/2021" },
   { nome: "Márcia",  dataDaConsulta: "04/05/2021" }
 ]
 
 //Exercício 19, letra A
 
 function ordenaPorNome() {
  
 }
 
 // Exercício 19, letra B
 
 const consultasData = [
   { nome: "João", dataDaConsulta: "01/10/2021" },
   { nome: "Pedro", dataDaConsulta: "02/07/2021" },
   { nome: "Paula", dataDaConsulta: "03/11/2021" },
   { nome: "Márcia",  dataDaConsulta: "04/05/2021" }
 ]
 
 function ordenaPorData() {
 
 }

//Exercício 20

const contas = [
  { cliente: "João", saldoTotal: 1000, compras: [100, 200, 300] },
  { cliente: "Paula", saldoTotal: 7500, compras: [200, 1040] },
  { cliente: "Pedro", saldoTotal: 10000, compras: [5140, 6100, 100, 2000] },
  { cliente: "Luciano", saldoTotal: 100, compras: [100, 200, 1700] },
  { cliente: "Artur", saldoTotal: 1800, compras: [200, 300] },
  { cliente: "Soter", saldoTotal: 1200, compras: [] }
]

function atualizaSaldo() {
  // implemente sua lógica aqui
}