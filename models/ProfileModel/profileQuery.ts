import User from "../UserModel/userModel";
import Preferences from "../ProfileModel/preferenceModel";
import Likes from "../ProfileModel/likesModel";

export async function getUserById(userId: number) {
    try {
      const user = await User.findOne({
        where: { id: userId },
        attributes: ['firstname', 'due', 'image']
      });
      return user;
    } catch (error) {
      throw new Error(`Could not fetch user`);
    }
  }
    
    
    export async function getUserPreferences(userId: number) {
      try {
        const preferences = await Preferences.findAll({
          where: { userId: userId },
          attributes: [],
          include: [
            {
              model: Likes,
              as: 'Likes',
              attributes: ['activity']
            }
          ]
        });
    
        const activities = preferences.map((preference) => preference.Likes.activity);
    
        return activities;
      } catch (error) {
        throw new Error(`Could not fetch user preferences`);
      }
    }
    
    