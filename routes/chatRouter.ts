import { Router } from "express";
import { getAllMessages, postMessage } from "../controllers/chatController";

const chatRouter = Router();

chatRouter.post("/:receiver_Id", postMessage);
chatRouter.get("/:receiver_Id", getAllMessages);

export default chatRouter;