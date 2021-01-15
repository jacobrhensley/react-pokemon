import React, { useState, useEffect } from 'react';
import PokemonList from './pokemonList'
import axios from 'axios'

function App() {
  const [pokemon, setPokemon] = useState([])
  const [currentPageURL, setCurrentPageURL] = useState("https://pokeapi.co/api/v2/pokemon")
  const [nextPageURL, setNextPageURL] = useState()
  const [prevPageURL, setPrevPageURL] = useState()

  useEffect(() => {
    axios.get(currentPageURL).then(res => {
      setPokemon(res.data.results.map(p => p.name));
    })
  }, [])

  return (
    <PokemonList pokemon={pokemon} />
  );
}

export default App;
