import { UserInstance } from "../models/UserModel/userModel"; // Adjust the import path as needed
import { Request } from "express";

export interface ExtendedRequest extends Request {
  user?: UserInstance; // Adjust the type of user as needed
}