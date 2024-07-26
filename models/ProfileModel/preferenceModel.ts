import { Model, DataTypes, Optional } from "sequelize";
import sequelize from "../index";
import User from "../UserModel/userModel";
import Likes from "../ProfileModel/likesModel";

interface PreferencesAttributes {
  id: number;
  userId: number;
  likesId: number;
}

export interface PreferencesCreationAttributes
  extends Optional<PreferencesAttributes, "id"> {}

export interface PreferencesInstance
  extends Model<PreferencesAttributes, PreferencesCreationAttributes>,
    PreferencesAttributes {
  Likes: any;
  createdAt?: Date;
}

const Preferences = sequelize.define<PreferencesInstance>("preferences", {
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
  likesId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Likes,
      key: "id",
    },
    onDelete: "CASCADE",
  },
});



export default Preferences;
