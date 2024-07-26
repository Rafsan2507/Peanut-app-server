import { Request, Response } from "express";
import { addDue, addImage } from "../models/UserModel/userquery";
import { ExtendedRequest } from "../src/express";

export async function postDue(req: ExtendedRequest, res: Response) {
    try {
      const { due } = req.body;
      const id = req.user?.id;
      if (
        id &&
        due &&
        typeof id === "number" &&
        typeof due === "number"
      ) {
        const dues = await addDue(id, due);
        res.status(201).send({message: "due added"});
      }
    } catch (error) {
      res.status(400).send({ error, message: "Could not add due" });
    }
  }
  
  export async function postImage(req: ExtendedRequest, res: Response) {
    try {
      const { image } = req.body;
      const id = req.user?.id;
      if (
        id &&
        image &&
        typeof id === "number" &&
        typeof image === "string"
      ) {
        const images = await addImage(id, image);
        res.status(201).send({message: "image added"});
      }
    } catch (error) {
      res.status(400).send({ error, message: "Could not add image" });
    }
  }
