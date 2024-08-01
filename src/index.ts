import express, { Express } from "express";
import config from "../config/db";
import sequelize from "../models/index";
import { Request, Response } from "express";
import router from "../routes/router";
const jwt = require("jsonwebtoken");
import dotenv from "dotenv";

dotenv.config();

const cors = require("cors");

const corsOptions = {
  origin: ["http://localhost:3000"],
  credentials: true,
  exposedHeaders: ["authorization"],
};

const app: Express = express();

const http = require('http').Server(app);

const socketIO = require('socket.io')(http,{
  cors: {
    origin: "http://localhost:3000"
  }
});

const SECRET_KEY = process.env.SECRET_KEY || "lalala this isnt secure";
const onlineUsers: { [key: string]: string } = {};

app.use(cors(corsOptions));
app.use(express.json());
app.use(router);

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    message: "Welcome to the backend",
  });
});

socketIO.on('connection', (socket:any) => {
  console.log(`⚡: ${socket.id} user just connected!`);
  socket.on('authenticate', async (data: { token: string }) => {
    try {
      const { token } = data;
      const { id } = jwt.verify(token, SECRET_KEY);
  
        onlineUsers[id] = socket.id;
        console.log(`User ID ${id} authenticated with socket ID ${socket.id}`);
    } catch (error) {
      socket.emit('authenticated', { success: false });
    }
  });
  socket.on('disconnect', ()=> {
    console.log('🔥: A user disconnected');
    for (const [userId, socketId] of Object.entries(onlineUsers)) {
      if (socketId === socket.id) {
        delete onlineUsers[userId];
        break;
      }
    }
  });
});

http.listen(config.PORT, async () => {
  await sequelize.sync();
  console.log(`Server is running on http://localhost:${config.PORT}`);
});

export { onlineUsers, socketIO };