/* eslint-disable import/prefer-default-export */
import axios from 'axios'

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

export function getSingleCharacterEpisodes(character, setEpisodes) {
  axios
    .all([...character.episode.map((episode) => axios.get(episode))])
    .then((result) => setEpisodes(result.map((episode) => episode.data)))
}
