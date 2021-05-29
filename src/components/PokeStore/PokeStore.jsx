import React, { useState, useEffect } from 'react'
import { getPokemons } from '../../service/pokeService'
import Button from '../Button/Button'
import PokeCard from '../PokeCard/PokeCard'

import './PokeStore.css'

function PokeStore() {
    const [pokeList, setPokeList] = useState([])

    useEffect(() => {
        getData('/pokemon')
    }, [])

    async function getData(url) {
        if(pokeList != []) {
            setPokeList([])
        }
        
        const pokeData = await getPokemons(url)
        setPokeList(pokeData)
    }

    function nextCheckup() {
        if(pokeList.next !== null) {
            return true
        } else return false
    }

    function previousCheckup() {
        if(pokeList.previous !== null) {
            return true
        } else return false
    }

    return (
        <section>

            <input type="search" name="" id="" />
            <div className="filter-area">
                <p>Filter by type: </p>
            </div>
            <div className="pokedex-area">
                {previousCheckup() && <Button value="Página anterior" onClick={() => getData(pokeList.previous)}/>}

                <div className="cards-container">
                    {   pokeList.results ?
                        pokeList.results.map(item => (
                            <PokeCard infos={item}/>
                            )) :
                            <h1>Carregando dados...</h1>
                    }
                </div>
                
                {nextCheckup() && <Button value="Próxima Página" onClick={() => getData(pokeList.next)}/>}
            </div>
            
        </section>
    )
}

export default PokeStore
