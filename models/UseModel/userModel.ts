import { Model, DataTypes, Optional } from "sequelize";
import sequelize from "../index";

interface UserAttributes {
  id: number;
  firstname: string;
  lastname: string;
  username: string;
  age: number;
  email: string;
  password: string;
}

interface UserCreationAttributes extends Optional<UserAttributes, "id"> {}

interface UserInstance
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

export default User;
