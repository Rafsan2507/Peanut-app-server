import { Router } from "express";
import {
  postUserInfo,
  login,
} from "../controllers/authController";
import { postSwiper } from "../controllers/swipeController";
import { getUserInfo, postMatch } from "../controllers/matchesController";
import { authMiddleware } from "../middlewares/auth";
import { getAllActivities, postHobby } from "../controllers/hobbiesController";
import { postPreferences } from "../controllers/preferenceController";
import { postDue, postImage } from "../controllers/imageController";
import { getAllUsersExceptCurrent } from "../controllers/cardController";
import { getUserPreference, getUserProfile } from "../controllers/userProfileController";

const router = Router();

router.post("/sign-up", postUserInfo);
router.post("/login", login);

router.put("/due", authMiddleware, postDue);
router.put("/image", authMiddleware, postImage);
router.post("/hobby", postHobby);
router.get("/likes", authMiddleware, getAllActivities);

router.post("/preferences", authMiddleware, postPreferences);

router.get("/home", authMiddleware, getAllUsersExceptCurrent);

router.get("/profile/:id", getUserProfile);
router.get("/activity/:id", getUserPreference);


router.post("/swiper", authMiddleware, postSwiper);
router.post("/match", authMiddleware, postMatch);
router.get("/getmatch/:id", getUserInfo);
export default router;
