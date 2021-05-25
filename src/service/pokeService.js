import axios from 'axios'

const create = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/',
})

async function getPokemons(url, setList) {
    const pokeResponse = await create.get(url)
    const pokeList = pokeResponse.data

    setList(pokeList)
}

export { getPokemons }