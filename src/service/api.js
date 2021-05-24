import axios from 'axios'

const create = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/',
})

async function getPokemons() {
    const pokeResponse = await create.get('/pokemon')

    if (!pokeResponse.ok) {
        const message = `An error has occured: ${pokeResponse.status}`
        throw new Error(message)
    }

    const pokeData = await pokeResponse.json()
    return pokeData
}

getPokemons()

export default getPokemons