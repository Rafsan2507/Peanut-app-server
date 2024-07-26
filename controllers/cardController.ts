import { Request, Response } from "express";
import { getAllUserNamesAndImages } from "../models/UserModel/cardQuery";
import { ExtendedRequest } from "../src/express";

export async function getAllUsersExceptCurrent(req: ExtendedRequest, res: Response) {
    try {
      const id = req.user?.id;
      if (id && typeof id === "number") {
        const users = await getAllUserNamesAndImages(id);
        res.status(200).send(users);
      } else {
        res.status(400).send({ message: "Invalid user ID" });
      }
    } catch (error) {
      res.status(400).send({ error, message: "Could not fetch users" });
    }
  }