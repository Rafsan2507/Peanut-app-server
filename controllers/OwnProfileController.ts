import { Request, Response } from "express";
import { getUserById, getUserPreferences } from "../models/ProfileModel/profileQuery";
import { ExtendedRequest } from "../src/express";

export async function getOwnProfile(req: ExtendedRequest, res: Response) {
    const id = req.user?.id;
  
    try {
      const user = await getUserById(Number(id));
      if (user) {
        res.status(200).json(user);
      } else {
        res.status(404).json({ error: "User not found" });
      }
    } catch (error) {
      res.status(500).json({ error });
    }
  }

  export async function getOwnPreference(req: ExtendedRequest, res: Response) {
    const id = req.user?.id;
  
    try {
      const activities = await getUserPreferences(Number(id));
      if (activities) {
        res.status(200).json({ activities });
      } else {
        res.status(404).json({ error: "User not found" });
      }
    } catch (error) {
      res.status(500).json({ error });
    }
  }