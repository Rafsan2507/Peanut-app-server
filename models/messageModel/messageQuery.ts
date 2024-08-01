import { Op } from "sequelize";
import Messages from "./messageModel";

export async function insertMessage(
  sender_Id: number,
  receiver_Id: number,
  content: string,
  timestamp: Date
) {
  try {
    const newMessage = await Messages.create({
      sender_Id,
      receiver_Id,
      content,
      timestamp
    });

    return newMessage;
  } catch (error) {
    throw new Error('Error inserting message');
  }
}

export async function fetchMessages(userId1: number, userId2: number) {
  try {
    const messages = await Messages.findAll({
      where: {
        [Op.or]: [
          { sender_Id: userId1, receiver_Id: userId2 },
          { sender_Id: userId2, receiver_Id: userId1 }
        ]
      },
      order: [['timestamp', 'ASC']]
    });

    return messages;
  } catch (error) {
    throw new Error('Error fetching messages');
  }
}