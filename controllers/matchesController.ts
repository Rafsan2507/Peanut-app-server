import {Request, Response} from 'express';
import { addMatches, findOneUser3 } from '../models/matchesModel/matchesQuery';


export async function postMatch(req: Request, res: Response) {
    try {
      const { user1Id, user2Id } = req.body;
      if (
        user1Id &&
        user2Id &&
        typeof user1Id === "number" &&
        typeof user2Id === "number"
      ) {
        const newUser = await addMatches({user1Id, user2Id});
        res.status(201).send("matched");
      }
    } catch (error) {
      res.status(400).send({ error, message: "Could not match" });
    }
  }

  export async function getUserInfo(req: Request, res: Response) {
    try {
      let id = req.params.id;
      const userId = Number(id);
      if (id && userId) {
        const user = await findOneUser3(userId);
        res.json({ data: user });
      } else res.status(400).json({ message: "Invalid user ID." });
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  }