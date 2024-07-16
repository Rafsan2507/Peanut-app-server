import { Router } from "express";
import {
  postUserInfo,
  login,
  postDue,
  postImage,
} from "../controllers/authController";
import { postSwiper } from "../controllers/swipeController";
import { getUserInfo, postMatch } from "../controllers/matchesController";
import { authMiddleware } from "../middlewares/auth";
import { getAllActivities, postHobby } from "../controllers/hobbiesController";
const router = Router();

router.post("/sign-up", postUserInfo);
router.post("/login", login);

router.put("/due", authMiddleware, postDue);
router.put("/image", authMiddleware, postImage);
router.post("/activities", postHobby);
router.get("/likes", authMiddleware, getAllActivities);

router.post("/swiper", authMiddleware, postSwiper);
router.post("/match", authMiddleware, postMatch);
router.get("/getmatch/:id", getUserInfo);
export default router;
