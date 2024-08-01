import { Router } from "express";
import { getAllConnections } from "../controllers/connectionsController";

const connectionRouter = Router();

connectionRouter.get("/connection", getAllConnections);

export default connectionRouter;