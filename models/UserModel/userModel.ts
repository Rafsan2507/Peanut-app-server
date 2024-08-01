import { Model, DataTypes, Optional } from "sequelize";
import sequelize from "../index";
import Swiper from "../SwipesModel/swipesModel";
import Matches from "../matchesModel/matchesModel";
import Preferences from "../ProfileModel/preferenceModel";
import Likes from "../ProfileModel/likesModel";
import Messages from "../messageModel/messageModel";

interface UserAttributes {
  id: number;
  firstname: string;
  lastname: string;
  username: string;
  email: string;
  password: string;
  due: number;
  image: string;
}

export interface UserCreationAttributes
  extends Optional<UserAttributes, "id" | "due" | "image"> {}

export interface UserInstance
  extends Model<UserAttributes, UserCreationAttributes>,
    UserAttributes {
  createdAt?: Date;
  updatedAt?: Date;
}

const User = sequelize.define<UserInstance>("users", {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
    unique: true,
  },
  firstname: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  lastname: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  username: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  email: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  password: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  due: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  image: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});

User.hasMany(Swiper, { foreignKey: "swipedById", as: "SwipedBy" });
User.hasMany(Swiper, { foreignKey: "swipedId", as: "Swiped" });
User.hasMany(Matches, { foreignKey: "user1Id", as: "User1Matches" });
User.hasMany(Matches, { foreignKey: "user2Id", as: "User2Matches" });
User.hasMany(Messages, { foreignKey: "sender_Id", as: "sender" });
User.hasMany(Messages, { foreignKey: "receiver_Id", as: "receiver" });

User.belongsToMany(Likes, {
  through: Preferences,
  foreignKey: "userId",
  otherKey: "likesId",
  as: "UserLikes",
});

Likes.belongsToMany(User, {
  through: Preferences,
  foreignKey: "likesId",
  otherKey: "userId",
  as: "LikesUsers",
});

Preferences.belongsTo(User, { foreignKey: "userId", as: "User" });
Preferences.belongsTo(Likes, { foreignKey: "likesId", as: "Likes" });

Matches.belongsTo(User, { foreignKey: 'user2Id', as: 'User2' });


export default User;
