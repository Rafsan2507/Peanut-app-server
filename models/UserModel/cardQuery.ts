
import { Op } from "sequelize";
import User from "./userModel";

// Function to get all users' first names and images except the current user
export async function getAllUserNamesAndImages(id: number) {
  return User.findAll({
    attributes: ['id', 'firstname', 'image'],
    where: {
      id: {
        [Op.ne]: id, // Use Sequelize's Op.ne for "not equal"
      },
    },
  });
}



