import { Router } from "express";
import { postUserInfo, login } from "../controllers/authController";
import { postSwiper } from "../controllers/swipeController";
import { getUserInfo, postMatch } from "../controllers/matchesController";
import { authMiddleware } from "../middlewares/auth";
const router = Router();

router.post("/sign-up", postUserInfo);
router.post("/login", login);

router.post("/swiper", authMiddleware, postSwiper);
router.post("/match", authMiddleware, postMatch);
router.get("/getmatch/:id", getUserInfo);
export default router;
