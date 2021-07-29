import {
  getCharacters,
  getSingleCharacter,
  getSingleCharacterEpisodes,
} from '../api/service'

describe('service tests', () => {
  describe('getCharacters()', () => {
    test('should return first character name', async () => {
      const query = '?page=1'

      const data = await getCharacters(query)

      expect(data.results[0].name).toBe('Rick Sanchez')
    })

    test('should data length is equal 20', async () => {
      const query = '?page=1'

      const data = await getCharacters(query)

      expect(data.results).toHaveLength(20)
    })

    test('should return search query', async () => {
      const query = '?page=1&status=dead'

      const data = await getCharacters(query)

      expect(data.results[0].name).toBe('Adjudicator Rick')
    })
  })

  describe('getSingleCharacter()', () => {
    test('should return first character data', async () => {
      const id = 1

      const data = await getSingleCharacter(id)

      expect(data.name).toBe('Rick Sanchez')
    })
  })

  describe('getSingleCharacterEpisodes()', () => {
    test('should return episode one', async () => {
      const character = {
        episode: ['https://rickandmortyapi.com/api/episode/1'],
      }

      const data = await getSingleCharacterEpisodes(character)

      expect(data[0].data.name).toEqual('Pilot')
    })

    test('should not return episode', async () => {
      const character = {
        episode: [],
      }

      const data = await getSingleCharacterEpisodes(character)

      expect(data).not.toBeNull()
    })

    test('should return episode length', async () => {
      const character = {
        episode: [
          'https://rickandmortyapi.com/api/episode/1',
          'https://rickandmortyapi.com/api/episode/2',
          'https://rickandmortyapi.com/api/episode/3',
          'https://rickandmortyapi.com/api/episode/4',
        ],
      }

      const data = await getSingleCharacterEpisodes(character)

      expect(data).toHaveLength(4)
    })
  })
})
