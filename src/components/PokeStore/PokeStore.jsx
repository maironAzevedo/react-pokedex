import React, { useState, useEffect } from 'react'
import { getPokemons } from '../../service/pokeService'
import PokeCard from '../PokeCard/PokeCard'

function PokeStore() {
    const [pokeList, setPokeList] = useState([])

    useEffect(() => {
        getData()
    }, [])

    async function getData() {
        const pokeData = await getPokemons()
        setPokeList(pokeData)
    }

    return (
        <section>
            <input type="search" name="" id="" />
            <div className="filter-area">
                <p>Filter by type: </p>
            </div>
            <div className="cards-container">
                {   pokeList.results ?
                    pokeList.results.map(item => (
                        <PokeCard infos={item}/>
                    )) :
                    <h1>Carregando dados...</h1>
                }
            </div>

            
        </section>
    )
}

export default PokeStore
