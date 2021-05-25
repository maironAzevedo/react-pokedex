import React, { useState, useEffect } from 'react'
import { getPokemons } from '../../service/pokeService'

function PokeCard({name, fetchUrl}) {
    const [pokeData, setPokeData] = useState([])

    useEffect(() => {
        getPokemons(fetchUrl, setPokeData)
    }, [])

    return (
        <>
            <img src={pokeData.sprites.front_default} alt={`${pokeData.name}-img`} />
            <h2>{name}</h2>
            <h3>Type: {pokeData.types}</h3>    
        </>
    )
}

export default PokeCard
