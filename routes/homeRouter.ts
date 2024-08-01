import { Router } from "express";
import { getAllUsersExceptCurrent } from "../controllers/cardController";
import { postSwiper } from "../controllers/swipeController";



const homeRouter = Router();
homeRouter.get("/home", getAllUsersExceptCurrent);

homeRouter.post("/swiper", postSwiper);

export default homeRouter;
