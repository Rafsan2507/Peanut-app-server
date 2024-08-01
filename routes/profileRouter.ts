import { Router } from "express";

import { getUserPreference, getUserProfile } from "../controllers/userProfileController";
import { getOwnPreference, getOwnProfile } from "../controllers/OwnProfileController";

const profileRouter = Router();

profileRouter.get("/profile/self-profile", getOwnProfile);
profileRouter.get("/profile/self-activity", getOwnPreference);

profileRouter.get("/profile/:id", getUserProfile);
profileRouter.get("/activity/:id", getUserPreference);

export default profileRouter;