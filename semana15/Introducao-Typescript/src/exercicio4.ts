// a) Tendo o typescript instalado, basta executar o comanndo tsc ./src/exercicio4.ts

// b) Caso estivesse em outra pasta bastaria mudar o caminho do exercício.

// c) Colocando vários arquivos dentro da mesma pasta e transpilando toda a pasta de uma vez, ou
// escrevendo os nomes dos arquivos dentro do mesmo comando.

type pokemon = {
	name: string,
        types: string,
	healthPoints: number
}

const pokemon1: pokemon = {
  name: "Charmander",
  types: "Fire",
  healthPoints: 28
}

const pokemon2: pokemon = {
  name: "Bulbasaur",
  types: "Grass/Poison",
  healthPoints: 31
}

const pokemon3: pokemon = {
  name: "Squirtle",
  types: "Water",
  healthPoints: 35
}