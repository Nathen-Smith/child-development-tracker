import { Request, Response } from "express";
import StatusCodes from "http-status-codes";

import Journal from "../models/Journal";

const { OK, NOT_FOUND } = StatusCodes;

export async function getAllJournalEntries(req: Request, res: Response) {
  const journal = await Journal.find();
  if (journal.length === 0) return res.status(NOT_FOUND).json();
  return res.status(OK).json({ journal });
}
