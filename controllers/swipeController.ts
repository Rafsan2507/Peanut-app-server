import { Request, Response } from "express";
import { addSwiper, findMatch } from "../models/SwipesModel/swipesQuery";
import { ExtendedRequest } from "../src/express";
import { addMatches } from "../models/matchesModel/matchesQuery";
const dotenv = require("dotenv");
dotenv.config();

export async function postSwiper(req: ExtendedRequest, res: Response) {
  try {
    const { swipedId } = req.body;
    const swipedById = req.user?.id;

    if (
      swipedById &&
      swipedId &&
      typeof swipedById === "number" &&
      typeof swipedId === "number"
    ) {
      const newUser = await addSwiper({ swipedById, swipedId });
      const reciprocalLike = await findMatch(swipedById, swipedId);

      let matchFound = false;
      if (reciprocalLike) {
        matchFound = true;
        
        await addMatches({ user1Id: swipedById, user2Id: swipedId });
        await addMatches({ user1Id: swipedId, user2Id: swipedById });
      }
      res.status(201).send({ message: "added", matchFound });
    } else {
      res.status(400).send({ message: "Invalid input data" });
    }
  } catch (error) {
    res.status(400).send({ error, message: "Could not add swiper" });
  }
}
