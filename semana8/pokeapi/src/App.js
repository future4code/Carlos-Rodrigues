import React, {useState, useEffect} from 'react';
import axios from 'axios'
import PokeCard from './components/PokeCard/PokeCard';

export default function App() {

  const [pokeList, setPokeList] = useState([])
  const [pokeName, setPokeName] = useState("")

  const changePokeName = (e) => {
    setPokeName(e.target.value)
    console.log(pokeName)
  }

  useEffect(() => {
    const listaPokemon = () => {
      axios.get("https://pokeapi.co/api/v2/pokemon/?limit=151")
      .then((res) => {
        setPokeList(res.data.results)
      })
      .catch((err) => {
        console.log(err)
      })
    }
    listaPokemon()
  }, [])

  const poke = pokeList.map((pokemon) => {
    return (
      <option key={pokemon.name}
      value={pokemon.name}
      >{pokemon.name}</option>
    )
  })
  return (
    <div>
      <h2>Bora começar!!</h2>
      <select onChange={changePokeName}>
        <option value="">Selecione um pokemon</option>
        {poke}
      </select>
      {pokeName && <PokeCard pokemon={pokeName}/>}
    </div>
  )
}
