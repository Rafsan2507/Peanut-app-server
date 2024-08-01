import { Request, Response } from "express";
import { ExtendedRequest } from "../src/express";
import { insertMessage, fetchMessages } from "../models/messageModel/messageQuery";
import { onlineUsers, socketIO } from "../src";

const dotenv = require("dotenv");
dotenv.config();

export const postMessage = async (req: ExtendedRequest, res: Response) => {
  const sender_Id = req.user?.id;
  const receiver_Id = req.params.receiver_Id;
  const { content } = req.body;

  try {
    const timestamp = new Date();
    const newMessage = await insertMessage(Number(sender_Id), Number(receiver_Id), content, timestamp);

    const receiverSocketId = onlineUsers[receiver_Id];

    if (receiverSocketId) {
      socketIO.to(receiverSocketId).emit('newMessage', { sender_Id, content });
    }

    return res.status(201).json(newMessage);
  } catch (error) {
    return res.status(500).json({ error });
  }
};

export const getAllMessages = async (req: ExtendedRequest, res: Response) => {
  const sender_Id = req.user?.id;
  const receiver_Id = req.params.receiver_Id;

  try {
    const messages = await fetchMessages(Number(sender_Id), Number(receiver_Id));
    return res.status(200).json(messages);
  } catch (error) {
    return res.status(500).json({ error });
  }
};