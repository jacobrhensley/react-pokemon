import React from 'react'

export default function pokemonList({ name}) {
    return (
        <div>
            {name.map(p => (
                <div key={p}>{p}</div>
            ))}
        </div>
    )
}
