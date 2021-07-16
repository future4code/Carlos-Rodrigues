// a) Para acessar os parâmetros usamos o comando process.argv[i], sendo o i um valor maior que 2 já que a
//primeira e a segunda posição já serão tomadas pelos comandos "node" e o caminho do arquivo a ser exercutado


// b)

const nome = process.argv[2]
const idade = Number(process.argv[3])

console.log(`Olá, ${nome}! Você tem ${idade} anos. Em sete anos você terá ${idade+7} anos`)
