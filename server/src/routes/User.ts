import { Request, Response } from "express";
import StatusCodes from "http-status-codes";

import User from "../models/User";

const { OK, CREATED, NOT_FOUND, BAD_REQUEST, INTERNAL_SERVER_ERROR } = StatusCodes;

/**
 * Sends a GET request to the User collection and returns the response
 * @param req object representing the HTTP request
 * @param res object representing the HTTP response
 * @returns json formatted response with status code
 */
export async function getUser(req: Request, res: Response) {
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
    let find = await User.find(query.where, query.select, query.options);
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
 * Sends a POST request to the User collection and returns the response
 * @param req object representing the HTTP request
 * @param res object representing the HTTP response
 * @returns json formatted response with status code
 */
export async function createUser(req: Request, res: Response) {
  if (!req.body.name || !req.body.email) {
    return res.status(BAD_REQUEST).json({
      message: 'POST failed: name and email required',
      data: []
    });
  }
  
  const newUser = new User({
    'name': req.body.name,
    'email': req.body.email
  });

  try {
    let save = await newUser.save();
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
 * Sends an UPDATE request to the User collection and returns the response
 * UPDATE is performed with respect to the user's email
 * @param req object representing the HTTP request
 * @param res object representing the HTTP response
 * @returns json formatted response with status code
 */
export async function updateUser(req: Request, res: Response) {
  if (!req.body.email) {
    return res.status(BAD_REQUEST).json({
      message: 'PUT failed: email required',
      data: []
    });
  }
  
  const updatedUser = {
    'name': req.body.name,
    'email': req.body.email
  };

  const filter = {
    email: req.body.email
  };

  try {
    let find = await User.findOneAndUpdate(filter, updatedUser);
    return res.status(OK).json({
      message: 'PUT successful',
      data: find
    });
  } catch (err) {
    return res.status(NOT_FOUND).json({
      message: 'PUT failed: specified user does not exist',
      data: []
    });
  }
  
}

/**
 * Sends a DELETE request to the User collection and returns the response
 * DELETE is performed with respect to the user's email
 * @param req object representing the HTTP request
 * @param res object representing the HTTP response
 * @returns json formatted response with status code
 */
export async function deleteUser(req: Request, res: Response) {
  if (!req.body.email) {
    return res.status(BAD_REQUEST).json({
      message: 'DELETE failed: email required',
      data: []
    });
  }

  const filter = {
    email: req.body.email
  };

  try {
    const deleted = await User.deleteOne(filter);
    return res.status(OK).json({
      message: 'DELETE successful',
      data: deleted
    });
  } catch (err) {
    return res.status(NOT_FOUND).json({
      message: 'DELETE failed: specified user does not exist',
      data: []
    });
  }
}