/* import { Model, DataTypes, Optional } from "sequelize";
import sequelize from "../index";
import User from "../UserModel/userModel";

interface ProfileAttributes {
  id: number;
  userId: number;
  due: string;
  image: string;
}

export interface ProfileCreationAttributes
  extends Optional<ProfileAttributes, "id"> {}

export interface ProfileInstance
  extends Model<ProfileAttributes, ProfileCreationAttributes>,
    ProfileAttributes {
  createdAt?: Date;
}

const Profile = sequelize.define<ProfileInstance>("profiles", {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
    unique: true,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: User,
      key: "id",
    },
    onDelete: "CASCADE",
  },
  due: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  image: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export default Profile;
 */
