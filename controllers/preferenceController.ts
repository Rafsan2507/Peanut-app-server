import { Request, Response } from "express";
import { ExtendedRequest } from "../src/express";

const dotenv = require("dotenv");
dotenv.config();
import { addPreferences } from "../models/ProfileModel/preferenceQuery";

export async function postUserPreferences(req: ExtendedRequest, res: Response) {
    try {
        const { preferences } = req.body;
        const userId = (req.user as any).id;

        if (!Array.isArray(preferences)) {
            return res.status(400).json({ error: "likesIds must be an array" });
        }

        const newPreferences = await addPreferences(userId, preferences);

        return res.status(201).json(newPreferences);
    } catch (error) {
        return res.status(500).json(error);
    }
}
