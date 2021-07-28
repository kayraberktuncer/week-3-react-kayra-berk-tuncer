import { getData, getSingleCharacterEpisodes } from '../api/service'

describe('trial test', () => {
  test('get single data', async () => {
    expect(await getData()).toBe(1)
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
})
