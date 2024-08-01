import { Router } from "express";
import { postUserInfo, login } from "../controllers/authController";


import { authMiddleware } from "../middlewares/auth";
import imagedueRouter from "./imagedueRouter";
import preferenceRouter from "./preferenceRouter";
import homeRouter from "./homeRouter";
import profileRouter from "./profileRouter";
import connectionRouter from "./connectionRouter";
import chatRouter from "./chatRouter";


const router = Router();

router.post("/sign-up", postUserInfo);
router.post("/login", login);

router.use("/", authMiddleware, imagedueRouter);
router.use("/", authMiddleware, preferenceRouter);
router.use("/", authMiddleware, homeRouter);
router.use("/", authMiddleware, profileRouter);
router.use("/", authMiddleware, connectionRouter);

router.use("/chat", authMiddleware, chatRouter);


export default router;
