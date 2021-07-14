// a) Quando declaramos uma string e tentamos mudar para number é dado um erro dizendo que não podemos atribuir
// um número a uma string.

// b) Não, pelo mesmo motivo, o typescript não aceita uma váriavel diferente do tipo declarado.
enum CORES {
    VERMELHO = "Vermelho",
    LARANJA = "Laranja",
    AMARELO = "Amarelo",
    VERDE = "Verde",
    AZUL = "Azul",
    ANIL = "AnIL",
    ROXO = "Roxo",
}

type pessoa = {
    nome: number
    idade: string
    corFavorita: CORES
    peso: number
    corDosOlhos: string
    corDoCabelo: string
}


