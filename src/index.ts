import express, { Express } from "express";
import config from "../config/db";
import sequelize from "../models/index";
import { Request, Response } from "express";
import router from '../routes/signup.router';
const cors = require("cors");

import User from '../models/UserModel/userModel'; // Ensure these imports to load models
import Swiper from'../models/SwipesModel/swipesModel'; // Ensure these imports to load models
import Matches from '../models/matchesModel/matchesModel';

const app: Express = express();
app.use(cors());
app.use(express.json());
app.use(router);

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    message: "Welcome to the backend",
  });
});

app.listen(config.PORT, async () => {
  await sequelize.sync();
  console.log(`Server is running on http://localhost:${config.PORT}`);
});
