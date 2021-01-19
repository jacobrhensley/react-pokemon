import React, { useState, useEffect } from 'react';
import PokemonList from './pokemonList'
import axios from 'axios'

function App() {
  const [pokemon, setPokemon] = useState([])
  const [currentPageURL, setCurrentPageURL] = useState("https://pokeapi.co/api/v2/pokemon")
  const [nextPageURL, setNextPageURL] = useState()
  const [prevPageURL, setPrevPageURL] = useState()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    let cancel
    axios.get(currentPageURL, {
      cancelToken: new axios.CancelToken(c => cancel = c)
    }).then(res => {
      setLoading(false)
      setNextPageURL(res.data.next)
      setPrevPageURL(res.data.previous)
      setPokemon(res.data.results.map(p => p.name))
    })

    return () => cancel()
  }, [currentPageURL])

  function goToNextPage() {
    setCurrentPageURL(nextPageURL)
  }

  function goToPrevPage() {
    setCurrentPageURL(prevPageURL)
  }

if(loading) return "Loading..."

  return (
    <>
    <PokemonList pokemon={pokemon} />
    <Pagination
    goToNextPage={nextPageUrl ? goToNextPage : null}
    goToPrevPage={prevPageUrl ? goToPrevPage : null}
    />
    </>
  );
}

export default App;
