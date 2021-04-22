//Exercícios de interpretação de código

//1)
//a. false
//b. false
//c. true
//e. boolean

//2)
//a. undefined
//b. null
//c. 11
//d. 3
//e. [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]
//f. 9


// Exercícios de escrita

//1)

// let idadeUser = Number(prompt("Qual sua idade?"))
// let idadeAmigo = Number(prompt("Qual idade do seu melhor amigo(a)"))

// let comparador = idadeUser > idadeAmigo
// console.log(`Sua idade é maior do que a do seu melhor amigo? ${comparador}`)

// let difencaIdade = idadeUser - idadeAmigo

// if (difencaIdade < 0) {
//     difencaIdade *= -1
// }

// console.log(`Diferença de idade: ${difencaIdade}`)


//2)

// let input = Number(prompt ("Digite um número par: ") )

// let resto = input % 2
// console.log(`Resto divisão por 2 = ${resto}`)

// O resto da divisão de um número par por 2 vai ser sempre 0, caso seja colocado um número ímpar
//inteiro, o resto será 1.


//3)

// let listaDeTarefas = [" "]
// listaDeTarefas[0] = prompt("Digite a 1ª tarefa: ")
// listaDeTarefas[1] = prompt("Digite a 2ª tarefa: ")
// listaDeTarefas[2] = prompt("Digite a 3ª tarefa: ")

// console.log(`${listaDeTarefas}`)

// let indice
// indice = prompt("Digite o índice da tarefa concluída: ")
// listaDeTarefas.splice(indice,1)

// console.log(`${listaDeTarefas}`)


//4)

// const nomeDoUsuario = prompt("Qual seu nome?")
// const emailDoUsuario = prompt("Qual seu e-mail?")

// console.log(`O e-mail ${emailDoUsuario} foi cadastrado com sucesso. Seja bem-vinda(o), ${nomeDoUsuario}.`)


//DESAFIOS

//1)

// let kelvin
// let celsius
// let fahrenheit

// fahrenheit = Number(prompt("Digite a temperatura em graus Fahrenheit: "))

// kelvin = (fahrenheit - 32)*(5/9) + 273.15
// console.log(`A temperatura em kelvin é ${kelvin} K`)

// celsius = Number(prompt("Digite a temperatura em graus Celsius: "))
// fahrenheit = (celsius)*(9/5) + 32
// console.log(`A temperatura em Fahrenheit é: ${fahrenheit}`)


//2)

// let quilowatt, preço

// quilowatt = Number(prompt("Consumo do mês em KwH: "))

// preço = quilowatt*0.05
// console.log(`O valor a ser pago é ${preço} reais.`)


//CONSIDERANDO O DESCONTO

// let quilowatt, preço, desconto

// quilowatt = Number(prompt("Consumo do mês em KwH: "))
// desconto = Number(prompt("Digite o valor inteiro da porcentagem de desconto, sem unidade: "))

// preço = (quilowatt*0.05)*((100-desconto)/100)
// console.log(`O valor a ser pago é ${preço} reais.`)


//3)

// let libra
// libra = 0.45359

// console.log(`20lb equivalem ${20*libra} kg`)


// let oz
// oz = 0.0283495

// console.log(`10.5oz equivalem ${10.5*oz} kg`)


// let milha
// milha = 1609.34

// console.log(`100mi equivalem ${100*milha} m`)


// let gal
// gal = 3.78541

// console.log(`103.56gal equivalem ${103.56*gal} L`)


// let xic
// xic = 1*(6/25)

// console.log(`450xic equivalem ${450*xic} L`)


// let milha, metro
// milha = Number(prompt("Digite o valor em milhas: "))
// metro = milha*1609.34
// console.log(`O valor em metros equivalente é: ${metro} m`)


