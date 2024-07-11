import { Model, DataTypes, Optional } from "sequelize";
import sequelize from "../index";

interface UserAttributes {
  id: number;
  user1Id: number;
  user2Id: number;
}

export interface UserCreationAttributes extends Optional<UserAttributes, "id"> {}

export interface UserInstance
  extends Model<UserAttributes, UserCreationAttributes>,
    UserAttributes {
  createdAt?: Date;
}

const Matches = sequelize.define<UserInstance>("matches", {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
    unique: true,
  },
  user1Id: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  user2Id: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },

});

export default Matches;
