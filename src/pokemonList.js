import React from 'react'

export default function pokemonList({ pokemon }) {
    return (
            <div className="container">
                <div className="row">
                    {pokemon.results.map(p => (
                        <div className="card col-3" key={p.name}>
                            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${p.url.slice(34, p.url.lastIndexOf('/'))}.png`} alt={p} className="card-img-top"/>
                            <div className="card-body">
                                <h5 className="card-title">{p.name}</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
    )
}
