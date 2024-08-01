import User from '../UserModel/userModel';
import Matches from './matchesModel';

export async function getConnections(id: number) {
    try {
      const user2Info = await Matches.findAll({
        where: {
          user1Id: id,
        },
        include: [
          {
            model: User,
            as: 'User2',
            attributes: ['id','firstname', 'image'],
          },
        ],
      });
  
      return user2Info.map(match => match.User2);
    } catch (error) {
      throw new Error('Error fetching user2 information.');
    }
  }