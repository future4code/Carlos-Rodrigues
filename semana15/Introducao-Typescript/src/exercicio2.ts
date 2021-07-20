// 2-a) As entradas são os números que chegam como parâmetro da função, e a saída é o objeto 
// "estatisticas".


// b) As variáveis que compõem a função são a numerosOrdenados, soma, e o objeto estatisticas
// acredito que todos eles são do tipo number.

type Estatisticas = {
    maior: number
    menor: number
    media: number
}

function obterEstatisticas(numeros: number[]): Estatisticas {

    const numerosOrdenados: number[] = numeros.sort(
        (a, b) => a - b
    )

    let soma: number = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas: Estatisticas = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}

type AmostraDeIdades = {
    numeros: number[],
    obterEstatisticas: (number: number[]) => Estatisticas
}
  
const amostraDeIdades: AmostraDeIdades = {
    numeros: [21, 18, 65, 44, 15, 18],
    obterEstatisticas 
}
  