/* eslint-disable import/prefer-default-export */
import axios from 'axios'

export function getData() {
  return axios
    .get('https://rickandmortyapi.com/api/character/1')
    .then((result) => result.data.id)
}

export function getCharacters(characters, setCharacters, query) {
  axios
    .get(`https://rickandmortyapi.com/api/character${query}`)
    .then(({ data }) => {
      setCharacters([...characters, ...data.results])
    })
}

export function getSingleCharacter(id, setCharacter) {
  axios
    .get(`https://rickandmortyapi.com/api/character/${id}`)
    .then(({ data }) => setCharacter(data))
}

export function getSingleCharacterEpisodes(character) {
  return axios
    .all([...character.episode.map((episode) => axios.get(episode))])
    .then((result) => result)
}
