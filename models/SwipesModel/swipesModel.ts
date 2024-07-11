import { Model, DataTypes, Optional } from "sequelize";
import sequelize from "../index";

interface UserAttributes {
  id: number;
  swipedById: number;
  swipedId: number;
}

export interface UserCreationAttributes extends Optional<UserAttributes, "id"> {}

export interface UserInstance
  extends Model<UserAttributes, UserCreationAttributes>,
    UserAttributes {
  createdAt?: Date;
}

const Swiper = sequelize.define<UserInstance>("swipers", {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
    unique: true,
  },
  swipedById: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  swipedId: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },

});

export default Swiper;
