import { Request, Response } from "express";
import StatusCodes from "http-status-codes";

import Sleep from "../models/Sleep";

const { OK, CREATED, NOT_FOUND, BAD_REQUEST, INTERNAL_SERVER_ERROR } = StatusCodes;

/**
 * Sends a GET request to the Sleep collection and returns the response
 * @param req object representing the HTTP request
 * @param res object representing the HTTP response
 * @returns json formatted response with status code
 */
export async function getSleep(req: Request, res: Response) {
  let {where, sort, select, skip, limit, count} = req.query;
  let query = {} as any;
  query.options = {};
  if (where) query.where = JSON.parse(where as string);
  if (select) query.select = JSON.parse(select as string);
  if (sort) query.options.sort = JSON.parse(sort as string);
  if (skip) query.options.skip = JSON.parse(skip as string);
  if (limit) query.options.limit = JSON.parse(limit as string);
  if (count) query.options.count = JSON.parse(count as string);

  try {
    let find = await Sleep.find(query.where, query.select, query.options);
    return res.status(OK).json({
      message: 'GET successful',
      data: find
    });
  } catch (err) {
    return res.status(INTERNAL_SERVER_ERROR).json({
      message: 'GET failed',
      data: []
    });
  }
}

/**
 * Sends a POST request to the Sleep collection and returns the response
 * @param req object representing the HTTP request
 * @param res object representing the HTTP response
 * @returns json formatted response with status code
 */
export async function createSleep(req: Request, res: Response) {
  if (!req.body.typeOfSleep || !req.body.time || !req.body.notes || !req.body.email) {
    return res.status(BAD_REQUEST).json({
      message: 'POST failed: [typeOfSleep, time, notes, email] all required',
      data: []
    });
  }
  
  const newSleep = new Sleep({
    'typeOfSleep': req.body.typeOfSleep,
    'time': req.body.time,
    'notes': req.body.notes,
    'email': req.body.email
  });

  try {
    let save = await newSleep.save();
    return res.status(CREATED).json({
      message: 'POST successful',
      data: save
    });
  } catch (err) {
    return res.status(INTERNAL_SERVER_ERROR).json({
      message: 'POST failed',
      data: []
    });
  }
}

/**
 * Sends an UPDATE request to the Sleep collection and returns the response
 * @param req object representing the HTTP request
 * @param res object representing the HTTP response
 * @returns json formatted response with status code
 */
export async function updateSleep(req: Request, res: Response) {
  return res.status(NOT_FOUND).json();
}

/**
 * Sends a DELETE request to the Sleep collection and returns the response
 * @param req object representing the HTTP request
 * @param res object representing the HTTP response
 * @returns json formatted response with status code
 */
export async function deleteSleep(req: Request, res: Response) {
  return res.status(NOT_FOUND).json();
}