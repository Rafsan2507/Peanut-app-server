import Matches from './matchesModel';

export async function addMatches (data: { user1Id: number, user2Id: number}) {
    try {
      const newMatch = await Matches.create(data);
      return newMatch;
    } catch (error) {
      throw new Error('Error adding matches.');
    }
  }