import React from 'react'

export default function pokemonList({ pokemon }) {
    return (
            <div className="container">
                <div className="row">
                    {pokemon.results.map(p => (
                        <div className="col-3" key={p.name}>
                            {p.name}
                            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${p.url.slice(35, p.url.lastIndexOf('/'))}.png`} alt={p}></img>
                        </div>
                    ))}
                </div>
            </div>
    )
}
