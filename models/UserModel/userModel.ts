import { Model, DataTypes, Optional } from "sequelize";
import sequelize from "../index";
import Swiper from "../SwipesModel/swipesModel";
import Matches from "../matchesModel/matchesModel";
interface UserAttributes {
  id: number;
  firstname: string;
  lastname: string;
  username: string;
  age: number;
  email: string;
  password: string;
}

export interface UserCreationAttributes extends Optional<UserAttributes, "id"> {}

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
  age: {
    type: DataTypes.INTEGER,
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
});

User.hasMany(Swiper, { foreignKey: "swipedById" });
User.hasMany(Swiper, { foreignKey: "swipedId" });
Swiper.belongsTo(User, { as: "SwipedBy", foreignKey: "swipedById" });
Swiper.belongsTo(User, { as: "Swiped", foreignKey: "swipedId" });

User.hasMany(Matches, { foreignKey: "user1Id" });
User.hasMany(Matches, { foreignKey: "user2Id" });
Matches.belongsTo(User, { as: "User1", foreignKey: "user1Id" });
Matches.belongsTo(User, { as: "User2", foreignKey: "user2Id" });

export default User;
