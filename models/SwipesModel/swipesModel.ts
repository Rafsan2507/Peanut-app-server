import { Model, DataTypes, Optional } from "sequelize";
import sequelize from "../index";
import User from "../UserModel/userModel";

interface SwipeAttributes {
  id: number;
  swipedById: number;
  swipedId: number;
}

export interface SwipeCreationAttributes extends Optional<SwipeAttributes, "id"> {}

export interface SwipeInstance
  extends Model<SwipeAttributes, SwipeCreationAttributes>,
    SwipeAttributes {
  createdAt?: Date;
}

const Swiper = sequelize.define<SwipeInstance>("swipers", {
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
    references: {
      model: User,
      key: 'id',
    },
  },
  swipedId: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: User,
      key: 'id',
    },
  },
});

export default Swiper;