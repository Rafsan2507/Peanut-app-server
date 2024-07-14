import { Model, DataTypes, Optional } from "sequelize";
import sequelize from "../index";
import User from "../UserModel/userModel";

interface MatchAttributes {
  id: number;
  user1Id: number;
  user2Id: number;
}

export interface MatchCreationAttributes extends Optional<MatchAttributes, "id"> {}

export interface MatchInstance
  extends Model<MatchAttributes, MatchCreationAttributes>,
    MatchAttributes {
  createdAt?: Date;
}

const Matches = sequelize.define<MatchInstance>("matches", {
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
    references: {
      model: User,
      key: 'id',
    },
  },
  user2Id: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: User,
      key: 'id',
    },
  },
});

export default Matches;