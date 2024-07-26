import { Request, Response } from "express";
import {
  addUser,
  findOneUser,
  addDue,
  addImage,
} from "../models/UserModel/userquery";
import { ExtendedRequest } from "../src/express";
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();
const SECRET_KEY = process.env.SECRET_KEY || "lalala this isnt secure";

export async function postUserInfo(req: Request, res: Response) {
  try {
    const { firstname, lastname, username, email, password, due, image } =
      req.body;
    if (password === "") throw new Error();
    const hash = await bcrypt.hash(password, 10);
    if (
      firstname &&
      lastname &&
      username &&
      email &&
      password &&
      /* due &&
      image && */
      typeof firstname === "string" &&
      typeof lastname === "string" &&
      typeof username === "string" &&
      typeof email === "string" &&
      typeof password === "string"
     /*  typeof due === "number" &&
      typeof image === "string" */
    ) {
      const newUser = await addUser({
        firstname,
        lastname,
        username,
        email,
        password: hash,
        /* due,
        image, */
      });
      const accessToken = jwt.sign({ id: newUser.id }, SECRET_KEY);
      res.cookie("authorization", accessToken);
      res.status(201).send({ accessToken });
    }
  } catch (error) {
    res.status(400).send({ error, message: "Could not create user" });
  }
}

export async function login(req: Request, res: Response) {
  const { email, password } = req.body;
  try {
    const user = await findOneUser(email);
    const validatedPass = await bcrypt.compare(password, user?.password);
    if (!validatedPass) throw new Error();
    const accessToken = jwt.sign({ id: user?.id }, SECRET_KEY);
    res.status(200).send({ accessToken });
  } catch (error) {
    res
      .status(401)
      .send({ error: "401", message: "Username or password is incorrect" });
  }
}



/* export async function getAllUsers(req: Request, res: Response) {
  try {
    const user = await findAllUser();
    res.json({ data: user });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
}
export async function getUserInfo(req: Request, res: Response) {
  try {
    let id = req.params.id;
    const userId = Number(id);
    if (id && userId) {
      const user = await findUser(userId);
      res.json({ data: user });
    } else res.status(400).json({ message: "Invalid user ID." });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
} */
