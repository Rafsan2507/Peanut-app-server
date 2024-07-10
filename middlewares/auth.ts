import {  Response, NextFunction} from "express";
const jwt = require('jsonwebtoken');
import { findOneUser2 } from "../models/UseModel/userquery";
import { ExtendedRequest } from "../src/express";
const dotenv = require ('dotenv'); 
dotenv.config();
const SECRET_KEY = process.env.SECRET_KEY || 'lalala this isnt secure';
// REMOVE-END

export async  function authMiddleware (req: ExtendedRequest, res: Response, next: NextFunction){
  // REMOVE-START
  // extract token from auth headers
  const authHeaders = req.headers['authorization'];
  if (!authHeaders) return res.sendStatus(403);
  const token = authHeaders.split(' ')[1];

  try {
    // verify & decode token payload,
    const { id } = jwt.verify(token, SECRET_KEY);
    // attempt to find user object and set to req
    const user = await findOneUser2(id);
    if (!user) return res.sendStatus(401);
    req.user= user;
    next();
  } catch (error) {
    res.sendStatus(401);
  }
  // REMOVE-END
};
