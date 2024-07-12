import { Request, Response } from "express";
import { addSwiper } from "../models/SwipesModel/swipesQuery";
import { ExtendedRequest } from "../src/express";
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();
const SECRET_KEY = process.env.SECRET_KEY || "lalala this isnt secure";

export async function postSwiper(req: ExtendedRequest, res: Response) {
  try {
    const { swipedId } = req.body;

    if (req.user?.id && swipedId && typeof req.user.id === "number" && typeof swipedId === "number") {
        const newUser = await addSwiper({ swipedById: req.user.id, swipedId });
        res.status(201).send({ message: "added" });
    } else {
        res.status(400).send({ message: "Invalid input data" });
    }
    
  } catch (error) {
    res.status(400).send({ error, message: "Could not add swiper" });
  }
}
