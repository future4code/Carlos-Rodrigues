//Exercícios de interpretação de código

//1) O código irá verificar se o número é par ou não, analisando o resto da divisão por 2, se for
//igual no 0 vai passar a mensagem "Passou no teste." no console, caso contrário irá colocar a 
//mensagem "Não passou no teste."

//2) a) O código irá pegar a fruta que o usuário digitar no prompt de comando e armazenar na variável
//fruta, depois ele vai comparar com as opção dentro do switch e retornar no console a frase:
//"O preço da fruta ", fruta, " é ", "R$ ", preco" onde em fruta e preço, estaria respectivamente
//o nome e o preço da mesma.

//b) "O preço da fruta  maçã é R$ 2.25

//c) "O preço da fruta pera é 5 "


//3)

//a) Pegar um valor que será pego pelo usuário no prompt, transformar em número e armazenar dentro 
// da variável numero

//b) Caso o usuário digite o número 10, será colocado no console a mensagem "Esse número passou no
// teste", caso contrário não irá aparecer mensagem nenhuma.

//c) Sim, pois a variável mensagem só está declarada dentro do escopo.

//---------------------------------------------------------------------------------------------------



//Exercícios de escrita de código

// 4)

// let idade = Number(prompt("Qual sua idade?"))

// if (idade >= 18)
// {
//     console.log("Você pode dirigir")
// }
// else {
//     console.log("Você não pode dirigir :(")
// }


//5)

// let turno = prompt("Qual turno você estuda? Digite 'M' para manhã, 'V' para vespertino e 'N' para noturno")
// turno = turno.toLowerCase()

// if (turno === "m") {
//     console.log("Bom dia!")
// }
// else if (turno === "v") {
//     console.log("Boa tarde!")
// }
// else if (turno === "n") {
//     console.log("Boa noite!")
// }


//6)

// let turno = prompt("Qual turno você estuda? Digite 'M' para manhã, 'V' para vespertino e 'N' para noturno")
// turno = turno.toLowerCase()

// switch (turno) {
//     case 'm':
//         console.log("Bom dia!")
//         break
//     case 'v':
//         console.log("Boa tarde!")
//         break
//     case 'n':
//         console.log("Boa noite!")
//         break
// }


// let genero, preco
// genero = prompt("Qual gênero do filme?").toLowerCase()
// preco = Number(prompt("Qual preço do ingresso?"))

// if (genero === "fantasia") {
//     if (preco < 15) {
//         console.log ("Bom filme!")
//     }
//     else {
//         console.log("Escolha outro filme :(")
//     }
// }
// else {
//     console.log("Escolha outro filme :(")
// }


// let genero, preco, lanchinho
// genero = prompt("Qual gênero do filme?").toLowerCase()
// preco = Number(prompt("Qual preço do ingresso?"))
// lanchinho = prompt("O que você vai comer ?")


// if (genero === "fantasia" && preco < 15) {
//     console.log (`Bom filme e aproveite o ${lanchinho}` )
// }
// else {
//     console.log("Escolha outro filme :(")
// }


//DESAFIO 2

let nomeCompleto, tpJogo, etapaJogo, categoria, qtdIngressos


nomeCompleto = prompt("Qual seu nome completo?")
tpJogo = prompt("Qual tipo de jogo? Digite IN para internacional e DO para doméstico").toUpperCase
etapaJogo = prompt("Qual etapa? SF para semi-final, DT para 3º lugar e FI para final").toUpperCase
categoria = Number(prompt("Qual categoria do jogo? (variando de 1 a 4)"))
qtdIngressos = Number(prompt("Quantos ingressos?"))

console.log(`---Dados da Compra---`)
console.log(`Nome do cliente: ${nomeCompleto}`)

if (tpJogo == "IN") {
    console.log(`Tipo de jogo: Internacional`)
}    
else if (tpJogo == "DO"){
    console.log("Tipo de jogo: Nacional")        
}



if (etapaJogo === "SF") {
    console.log(`Etapa do jogo: Semi-final`)
}
else if (etapaJogo === "DT"){
    console.log(`Etapa do jogo: Decisão de terceiro lugar`)
}        
else if (etapaJogo === "FI") {
    console.log(`Etapa do jogo: Final`)
}

console.log(`Categoria: ${categoria}`)
console.log(`Quantidade de ingressos: ${qtdIngressos} ingressos`)

console.log(`---Valores---`)


if (tpJogo === "IN") {
    switch (etapaJogo) {
        case 'SF':
            switch (categoria) {
                case '1':
                    let preco1 = 1320/4.1
                    let total1 = qtdIngressos*preco1
                    console.log(`Valor do ingresso: U$: ${preco1}`)
                    console.log(`Valor total: U$: ${total1}`)
                    break
                case '2':
                    let preco2 = 880/4.1
                    let total2 = qtdIngressos*preco2
                    console.log(`Valor do ingresso: U$: ${preco2}`)
                    console.log(`Valor total: U$: ${total2}`)
                    break
                case '3':
                    let preco3 = 550/4.1
                    let total3 = qtdIngressos*preco3
                    console.log(`Valor do ingresso: U$: ${preco3}`)
                    console.log(`Valor total: U$: ${total3}`)
                    break
                case '4':
                    let preco4 = 220/4.1
                    let total4 = qtdIngressos*preco4
                    console.log(`Valor do ingresso: U$: ${preco4}`)
                    console.log(`Valor total: U$: ${total4}`)
                    break
            }
            break     
        case 'DT':
            switch (categoria) {
                case '1':
                    let preco1 = 1320/4.1
                    let total1 = qtdIngressos*preco1
                    console.log(`Valor do ingresso: U$: ${preco1}`)
                    console.log(`Valor total: U$: ${total1}`)
                    break
                case '2':
                    let preco2 = 880/4.1
                    let total2 = qtdIngressos*preco2
                    console.log(`Valor do ingresso: U$: ${preco2}`)
                    console.log(`Valor total: U$: ${total2}`)
                    break
                case '3':
                    let preco3 = 550/4.1
                    let total3 = qtdIngressos*preco3
                    console.log(`Valor do ingresso: U$: ${preco3}`)
                    console.log(`Valor total: U$: ${total3}`)
                    break
                case '4':
                    let preco4 = 220/4.1
                    let total4 = qtdIngressos*preco4
                    console.log(`Valor do ingresso: U$: ${preco4}`)
                    console.log(`Valor total: U$: ${total4}`)
                    break
            }
            break
        case 'FI':
            switch (categoria) {
                case '1':
                    let preco1 = 1320/4.1
                    let total1 = qtdIngressos*preco1
                    console.log(`Valor do ingresso: U$: ${preco1}`)
                    console.log(`Valor total: U$: ${total1}`)
                    break
                case '2':
                    let preco2 = 880/4.1
                    let total2 = qtdIngressos*preco2
                    console.log(`Valor do ingresso: U$: ${preco2}`)
                    console.log(`Valor total: U$: ${total2}`)
                    break
                case '3':
                    let preco3 = 550/4.1
                    let total3 = qtdIngressos*preco3
                    console.log(`Valor do ingresso: U$: ${preco3}`)
                    console.log(`Valor total: U$: ${total3}`)
                    break
                case '4':
                    let preco4 = 220/4.1
                    let total4 = qtdIngressos*preco4
                    console.log(`Valor do ingresso: U$: ${preco4}`)
                    console.log(`Valor total: U$: ${total4}`)
                    break
            }
            break
    }
} 

else if (tpJogo === "DO") {
    switch (etapaJogo) {
        case 'SF':
            switch (categoria) {
                case '1':
                    let preco1 = 1320
                    let total1 = qtdIngressos*preco1
                    console.log(`Valor do ingresso: R$: ${preco1}`)
                    console.log(`Valor total: R$: ${total1}`)
                    break
                case '2':
                    let preco2 = 880
                    let total2 = qtdIngressos*preco2
                    console.log(`Valor do ingresso: R$: ${preco2}`)
                    console.log(`Valor total: R$: ${total2}`)
                    break
                case '3':
                    let preco3 = 550
                    let total3 = qtdIngressos*preco3
                    console.log(`Valor do ingresso: R$: ${preco3}`)
                    console.log(`Valor total: R$: ${total3}`)
                    break
                case '4':
                    let preco4 = 220
                    let total4 = qtdIngressos*preco4
                    console.log(`Valor do ingresso: R$: ${preco4}`)
                    console.log(`Valor total: R$: ${total4}`)
                    break
            }
            break
            
        case 'DT':
            switch (categoria) {
                case '1':
                    let preco1 = 1320
                    let total1 = qtdIngressos*preco1
                    console.log(`Valor do ingresso: R$: ${preco1}`)
                    console.log(`Valor total: R$: ${total1}`)
                    break
                case '2':
                    let preco2 = 880
                    let total2 = qtdIngressos*preco2
                    console.log(`Valor do ingresso: R$: ${preco2}`)
                    console.log(`Valor total: R$: ${total2}`)
                    break
                case '3':
                    let preco3 = 550
                    let total3 = qtdIngressos*preco3
                    console.log(`Valor do ingresso: R$: ${preco3}`)
                    console.log(`Valor total: R$: ${total3}`)
                    break
                case '4':
                    let preco4 = 220
                    let total4 = qtdIngressos*preco4
                    console.log(`Valor do ingresso: R$: ${preco4}`)
                    console.log(`Valor total: R$: ${total4}`)
                    break
            }
            break
        case 'FI':
            switch (categoria) {
                case '1':
                    let preco1 = 1320
                    let total1 = qtdIngressos*preco1
                    console.log(`Valor do ingresso: R$: ${preco1}`)
                    console.log(`Valor total: R$: ${total1}`)
                    break
                case '2':
                    let preco2 = 880
                    let total2 = qtdIngressos*preco2
                    console.log(`Valor do ingresso: R$: ${preco2}`)
                    console.log(`Valor total: R$: ${total2}`)
                    break
                case '3':
                    let preco3 = 550
                    let total3 = qtdIngressos*preco3
                    console.log(`Valor do ingresso: R$: ${preco3}`)
                    console.log(`Valor total: R$: ${total3}`)
                    break
                case '4':
                    let preco4 = 220
                    let total4 = qtdIngressos*preco4
                    console.log(`Valor do ingresso: R$: ${preco4}`)
                    console.log(`Valor total: R$: ${total4}`)
                    break
            }
            break
    }
}

// else {
//     console.log("ERRO DESCONHECIDO, DESISTO.")
// }


