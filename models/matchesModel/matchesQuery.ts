import Matches from './matchesModel';

export async function addMatches (data: { user1Id: number, user2Id: number}) {
    try {
      const newMatch = await Matches.create(data);
      return newMatch;
    } catch (error) {
      throw new Error('Error adding matches.');
    }
  }

  export async function findOneUser3(id: number) {
    try {
      const user2 = await Matches.findAll({
        where: {
          user1Id: id
        }
      });
  
      return user2;
    } catch (error) {
      throw new Error('Error login');
    }
  }