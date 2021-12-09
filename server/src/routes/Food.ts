import { Request, Response } from "express";
import StatusCodes from "http-status-codes";

import Food from "../models/Food";

const { OK, CREATED, NOT_FOUND, BAD_REQUEST, INTERNAL_SERVER_ERROR } = StatusCodes;

/**
 * Sends a GET request to the Food collection and returns the response
 * @param req object representing the HTTP request
 * @param res object representing the HTTP response
 * @returns json formatted response with status code
 */
export async function getFood(req: Request, res: Response) {
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
    let find = await Food.find(query.where, query.select, query.options);
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
 * Sends a POST request to the Food collection and returns the response
 * @param req object representing the HTTP request
 * @param res object representing the HTTP response
 * @returns json formatted response with status code
 */
export async function createFood(req: Request, res: Response) {
  if (!req.body.typesOfFood || !req.body.time || !req.body.notes || !req.body.email) {
    return res.status(BAD_REQUEST).json({
      message: 'POST failed: [typesOfFood, time, notes, email] all required',
      data: []
    });
  }
  
  const newFood = new Food({
    'typesOfFood': req.body.typesOfFood,
    'time': req.body.time,
    'notes': req.body.notes,
    'email': req.body.email
  });

  try {
    let save = await newFood.save();
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
 * Sends an UPDATE request to the Food collection and returns the response
 * @param req object representing the HTTP request
 * @param res object representing the HTTP response
 * @returns json formatted response with status code
 */
export async function updateFood(req: Request, res: Response) {
  return res.status(NOT_FOUND).json();
}

/**
 * Sends a DELETE request to the Food collection and returns the response
 * @param req object representing the HTTP request
 * @param res object representing the HTTP response
 * @returns json formatted response with status code
 */
export async function deleteFood(req: Request, res: Response) {
  return res.status(NOT_FOUND).json();
}