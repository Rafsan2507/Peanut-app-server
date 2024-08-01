/* import Likes from "./likesModel";

export async function addHobbies(activities: string[]) {
  try {
    const newHobbies = await Promise.all(
      activities.map((activity) => Likes.create({ activity }))
    );
    return newHobbies;
  } catch (error) {
    throw new Error("Error adding swipers.");
  }
} */

import Likes from "./likesModel";

export async function addListofActivities(activity: string) {
  try {
    const newLike = await Likes.create({ activity });
    return newLike;
  } catch (error) {
    throw new Error("Error adding swiper.");
  }
}

export async function findAllActivities() {
  try {
    const activities = await Likes.findAll({
      attributes: ['id', 'activity']
    });
    return activities.map(activity => ({ id: activity.id, activity: activity.activity }));
  } catch (error) {
    throw new Error("Error finding all activities");
  }
}


