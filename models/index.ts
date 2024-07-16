import { Sequelize } from "sequelize";
import config from "../config/db";
import User from "./UserModel/userModel";
import Swiper from "./SwipesModel/swipesModel";
import Matches from "./matchesModel/matchesModel";
//import Profile from "./ProfileModel/profileModel";
import Likes from "./ProfileModel/likesModel";
import Preferences from "./ProfileModel/preferenceModel";

const sequelize = new Sequelize(config.DB_URI);

export default sequelize;
