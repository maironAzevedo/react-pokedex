import React, { useEffect, useState } from 'react'
import { getPokeData } from '../../service/pokeService'
import Button from '../Button/Button'
import './PokeCard.css'

function PokeCard({ infos }) {
    const [pokeData, setPokeData] = useState([])

    useEffect(() => {
        callPokeData()        
    }, [])

    async function callPokeData() {
        const data = await getPokeData(infos.url)
        setPokeData(data)
    }

    return (
        <>
        {
            pokeData && pokeData.sprites ?
            <div className="pokemon-info">
                <div className="poke-header">
                    <img src={pokeData.sprites.front_default} alt="" />
                    <h3>{pokeData.name}</h3>
                </div>
                <p>Type: {pokeData.types[0].type.name}</p>
                <Button value="Saiba mais"/>
            </div>
            : <h1>Loading data...</h1>
        }
        </>
    )
}

export default PokeCard
