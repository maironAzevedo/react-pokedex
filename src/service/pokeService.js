import axios from 'axios'

const create = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/',
})

async function getPokemons(url) {
    const pokeResponse = await create.get(url)
    const pokeList = pokeResponse.data

    return pokeList
}

async function getPokeData(url) {
    const pokeResponse = await create.get(url)
    const pokeDataList = pokeResponse.data

    return pokeDataList
}

export { getPokemons, getPokeData }