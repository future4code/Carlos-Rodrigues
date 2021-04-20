/* Exercícios de interpretação de código:

1) 10 5

2) 10 10 10 */

/* Exercícios de escrita */

//1)
const nome 
let idade 

console.log (typeof(nome))
console.log (typeof(idade))

/* Para a variável nome ocorreu um erro, pois não é possível colocar uma variável const sem declarar
ela, já em idade foi dada como undefined */

const nome = prompt("Qual seu nome ?")
let idade = prompt("Qual sua idade ?")

console.log(typeof(nome))
console.log(typeof(idade))

console.log("Olá "+ nome +", você tem "+ idade +" anos ")

/* Agora ambas variáveis foram declaradas como strings, achei que idade sairia como número, acredito
que eles podem ter sido declaradas como strings para "facilitar" na hora de ser reconhecida, já
que não foi feita nenhuma especificação clara sobre a variável */

//2)

const nome = prompt("Qual seu nome?")
let idade = prompt("Qual a sua idade?")
const filme = prompt("Escolha um filme")
const comida = prompt("Escolha uma comida")
const esporte = prompt("Escolha um esporte")

console.log("Qual seu nome?")
console.log("Resposta: "+nome+"")

console.log("Qual a sua idade")
console.log("Resposta: "+idade+" ")

console.log(" Escolha um filme")
console.log("Resposta: "+filme+"")

console.log("Escolha uma comida")
console.log("Resposta: "+comida+" ")

console.log("Escolha um esporte")
console.log("Resposta: "+esporte+"")


//3)

let topComidas = ["Batata frita", "Hambúrguer", "Mousse de maracujá com chocolate", "Salpicão", "Pão de queijo"]

console.log("Essas são minhas comidas preferidas")
console.log(topComidas[0])
console.log(topComidas[1])
console.log(topComidas[2])
console.log(topComidas[3])
console.log(topComidas[4])

topComidas[1] = prompt("Qual sua comida preferida ?")

console.log("Essas são minhas comidas preferidas")
console.log(topComidas[0])
console.log(topComidas[1])
console.log(topComidas[2])
console.log(topComidas[3])
console.log(topComidas[4])


//4)

const arrayPerguntas = ["Hoje teve aula ?", "Você sabe nadar ?", "Você joga xadrez ?"]
const arrayRespostas = [true, false, true]

console.log(""+ arrayPerguntas[0] + " " + arrayRespostas[0] +"")
console.log(""+ arrayPerguntas[1] + " " + arrayRespostas[1] +"")
console.log(""+ arrayPerguntas[2] + " " + arrayRespostas[2] +"")