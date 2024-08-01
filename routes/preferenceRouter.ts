import { Router } from "express";

import { getAllActivities, postListofActivities } from "../controllers/hobbiesController";
import { postUserPreferences } from "../controllers/preferenceController";

const preferenceRouter = Router();

preferenceRouter.post("/acitivitylist", postListofActivities);
preferenceRouter.get("/allActivities", getAllActivities);

preferenceRouter.post("/preferences", postUserPreferences);

export default preferenceRouter;