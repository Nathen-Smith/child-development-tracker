import { Request, Response } from "express";
import StatusCodes from "http-status-codes";

import User from "../models/User";

const { OK, NOT_FOUND } = StatusCodes;

export async function getAllUsers(req: Request, res: Response) {
  const users = await User.find();
  if (!users) return res.status(NOT_FOUND).json();
  return res.status(OK).json({ users });
}
