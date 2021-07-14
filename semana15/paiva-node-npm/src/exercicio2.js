const operacao = process.argv[2]
const numero1 = Number(process.argv[3])
const numero2 = Number(process.argv[4])

let resultado = "Resultado: "

switch (operacao) {
  case "add":
    resultado += numero1 + numero2
    break
  case "sub":
    resultado += numero1 - numero2
    break
  case "mult":
    resultado += numero1 * numero2
    break
  case "div":
    resultado += (numero1 / numero2).toFixed(1)
    break
  default:
    resultado += "operação inválida"
}

console.log(resultado)