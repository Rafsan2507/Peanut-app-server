import { Model, DataTypes, Optional } from "sequelize";
import sequelize from "../index";
import User from "../UserModel/userModel";

interface MessageAttributes {
  id: number;
  sender_Id: number;
  receiver_Id: number;
  content: string;
  timestamp: Date;
}

export interface MessageCreationAttributes extends Optional<MessageAttributes, "id"> {}

export interface MessageInstance
  extends Model<MessageAttributes, MessageCreationAttributes>,
  MessageAttributes {
  createdAt?: Date;
}

const Messages = sequelize.define<MessageInstance>("message", {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
    unique: true,
  },
  sender_Id: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: User,
      key: 'id',
    },
  },
  receiver_Id: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: User,
      key: 'id',
    },
  },
  content: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  timestamp: {
    type: DataTypes.DATE,
    allowNull: true,
  },
});


export default Messages;