import React, { useEffect, useState } from 'react'
import { getPokemons } from '../../service/pokeService'
import PokeCard from '../PokeCard/PokeCard'
import './Store.css'

function Store() {
    const [pokeList, setPokeList] = useState([])

    useEffect(() => {
        getPokemons('/pokemon', setPokeList)
    }, [])

    return (
        <>
        {pokeList.results !== undefined ? 
            pokeList.results.map(pokemon => {
                console.log(pokemon)
                return <PokeCard name={pokemon.name} fetchUrl={pokemon.url}/>
            }) 
            : <h1>Carregando...</h1>
        }
        </>
    )
}

export default Store
