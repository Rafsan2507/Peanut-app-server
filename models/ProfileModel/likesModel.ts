import { Model, DataTypes, Optional } from "sequelize";
import sequelize from "../index";


interface LikesAttributes {
  id: number;
  activity: string;
}

export interface LikesCreationAttributes
  extends Optional<LikesAttributes, "id"> {}

export interface LikesInstance
  extends Model<LikesAttributes, LikesCreationAttributes>,
    LikesAttributes {
  createdAt?: Date;
}

const Likes = sequelize.define<LikesInstance>("likes", {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
    unique: true,
  },
  activity: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});


export default Likes;
