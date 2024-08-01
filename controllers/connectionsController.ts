import { Request, Response } from "express";
import { ExtendedRequest } from "../src/express";
import { getConnections } from "../models/matchesModel/connectionQuery";

const dotenv = require("dotenv");
dotenv.config();

export async function getAllConnections(req: ExtendedRequest, res: Response) {
    const user1Id = req.user?.id;
  
    try {
      const user2Info = await getConnections(Number(user1Id));
      return res.status(200).json(user2Info);
    } catch (error) {
      return res.status(500).json({ message: 'Error fetching user2 information.' });
    }
  }