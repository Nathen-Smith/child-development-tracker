import { Request, Response } from "express";
import StatusCodes from "http-status-codes";

import Milestone from "../models/Milestone";

const { OK, NOT_FOUND } = StatusCodes;

export async function getAllMilestones(req: Request, res: Response) {
  const milestone = await Milestone.find();
  if (milestone.length === 0) return res.status(NOT_FOUND).json();
  return res.status(OK).json({ milestone });
}
