import {Request, Response} from 'express';
import { addMatches } from '../models/matchesModel/matchesQuery';


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