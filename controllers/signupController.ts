import { Request, Response } from "express";
import { addUser, findUser, findAllUser } from "../models/UseModel/userquery";

export async function getAllUsers (req: Request, res: Response) {
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
}

export async function postUserInfo(req: Request, res: Response) {
  try {
    
      const { firstname, lastname, username, age, email, password } = req.body;
      if (
        firstname && lastname && username && age && email && password &&
        typeof firstname === "string" &&
        typeof lastname === "string" &&
        typeof username === "string" &&
        typeof age === "number" &&
        typeof email === "string" &&
        typeof password === "string"
      ) {
        const user = await addUser({
          firstname,
          lastname,
          username,
          age,
          email,
          password,
        });
        res.status(201).json(user);
      } else res.status(400).json({ message: "Invalid user information." });
   
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
}
