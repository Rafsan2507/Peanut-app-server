import { Request, Response } from "express";
import { addSwiper, findMatch } from "../models/SwipesModel/swipesQuery";
import { ExtendedRequest } from "../src/express";

import Matches from "../models/matchesModel/matchesModel";

const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();
const SECRET_KEY = process.env.SECRET_KEY || "lalala this isnt secure";

export async function postSwiper(req: ExtendedRequest, res: Response) {
  try {
    const { swipedId } = req.body;
    const swipedById = req.user?.id;

    if (swipedById && swipedId && typeof swipedById === "number" && typeof swipedId === "number") {
        const newUser = await addSwiper({ swipedById, swipedId });

        const reciprocalLike = await findMatch(swipedById, swipedId);
    
        if (reciprocalLike) {
          // If reciprocal like exists, create a match
          await Matches.create({ user1Id: swipedById, user2Id: swipedId });
        }
        res.status(201).send({ message: "added" });
    } else {
        res.status(400).send({ message: "Invalid input data" });
    }
    
  } catch (error) {
    res.status(400).send({ error, message: "Could not add swiper" });
  }
}
