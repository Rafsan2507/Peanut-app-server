import { Router } from "express";
import { postDue, postImage } from "../controllers/imageController";


const imagedueRouter = Router();

imagedueRouter.put("/due", postDue);
imagedueRouter.put("/image", postImage);

export default imagedueRouter;