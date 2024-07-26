import { Request, Response } from "express";
import { getUserById, getUserPreferences } from "../models/ProfileModel/profileQuery";

export async function getUserProfile(req: Request, res: Response) {
    const userId = parseInt(req.params.id, 10);
  
    if (isNaN(userId)) {
      return res.status(400).json({ error: "Invalid user ID" });
    }
  
    try {
      const user = await getUserById(userId);
      if (user) {
        res.status(200).json(user);
      } else {
        res.status(404).json({ error: "User not found" });
      }
    } catch (error) {
      res.status(500).json({ error });
    }
  }

  export async function getUserPreference(req: Request, res: Response) {
    const userId = parseInt(req.params.id, 10);
  
    if (isNaN(userId)) {
      return res.status(400).json({ error: "Invalid user ID" });
    }
  
    try {
      const activities = await getUserPreferences(userId);
      if (activities) {
        res.status(200).json({ activities });
      } else {
        res.status(404).json({ error: "User not found" });
      }
    } catch (error) {
      res.status(500).json({ error });
    }
  }
    