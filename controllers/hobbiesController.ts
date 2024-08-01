import { Request, Response } from "express";
import { ExtendedRequest } from "../src/express";
import {
  addListofActivities,
  findAllActivities,
} from "../models/ProfileModel/hobbiesQuery";
const dotenv = require("dotenv");
dotenv.config();

export async function postListofActivities(req: Request, res: Response) {
  const { activity } = req.body;

  try {
    if (activity && typeof activity === "string") {
      const newLike = await addListofActivities(activity);
      return res.status(201).json(newLike);
    } else {
      return res.status(400).json({ error: "string is empty" });
    }
  } catch (error) {
    return res.status(500).json({ error: "Error adding hobby." });
  }
}

export async function getAllActivities(req: ExtendedRequest, res: Response) {
  try {
    const activities = await findAllActivities();
    res.json(activities);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
}
