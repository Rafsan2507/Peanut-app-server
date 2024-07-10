import { UserInstance } from "../models/UseModel/userModel"; // Adjust the import path as needed
import { Request } from "express";

export interface ExtendedRequest extends Request {
  user?: UserInstance; // Adjust the type of user as needed
}
