/* eslint-disable import/prefer-default-export */
import axios from 'axios'

export function getCharacters(query) {
  return axios
    .get(`https://rickandmortyapi.com/api/character${query}`)
    .then(({ data }) => data)
}

export function getSingleCharacter(id) {
  return axios
    .get(`https://rickandmortyapi.com/api/character/${id}`)
    .then(({ data }) => data)
}

export function getSingleCharacterEpisodes(character) {
  return axios
    .all([...character.episode.map((episode) => axios.get(episode))])
    .then((result) => result)
}
