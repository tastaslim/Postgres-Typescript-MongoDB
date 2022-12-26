import axios from 'axios';

export class BreakBad {
  public async getCharacter(characterId: string) {
    const response = await axios.get(`https://www.breakingbadapi.com/api/characters/${characterId}`);
    return response.data;
  }
}
