import { Request, Response } from "express";
import StatusCodes from "http-status-codes";

import Milestone from "../models/Milestone";

const { OK, CREATED, NOT_FOUND, BAD_REQUEST, INTERNAL_SERVER_ERROR } = StatusCodes;

/**
 * Sends a GET request to the Milestone collection and returns the response
 * @param req object representing the HTTP request
 * @param res object representing the HTTP response
 * @returns json formatted response with status code
 */
export async function getMilestone(req: Request, res: Response) {
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
    let find = await Milestone.find(query.where, query.select, query.options);
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
 * Sends a POST request to the Milestone collection and returns the response
 * @param req object representing the HTTP request
 * @param res object representing the HTTP response
 * @returns json formatted response with status code
 */
export async function createMilestone(req: Request, res: Response) {
  if (!req.body.title || !req.body.timeline || !req.body.email) {
    return res.status(BAD_REQUEST).json({
      message: 'POST failed: [title, timeline, email] all required',
      data: []
    });
  }
  
  const newMilestone = new Milestone({
    'title': req.body.title,
    'timeline': req.body.timeline,
    'email': req.body.email,
    'category': req.body.category,
  });

  try {
    let save = await newMilestone.save();
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
 * Sends an UPDATE request to the Milestone collection and returns the response
 * UPDATE is performed with respect to object id
 * @param req object representing the HTTP request
 * @param res object representing the HTTP response
 * @returns json formatted response with status code
 */
export async function updateMilestone(req: Request, res: Response) {
  if (!req.body._id) {
    return res.status(BAD_REQUEST).json({
      message: 'PUT failed: _id required',
      data: []
    });
  }

  const filter = {
    _id: req.body._id
  };

  try {
    let find = await Milestone.findOneAndUpdate(filter, req.body);
    return res.status(OK).json({
      message: 'PUT successful',
      data: find
    });
  } catch (err) {
    return res.status(NOT_FOUND).json({
      message: 'PUT failed: specified milestone does not exist',
      data: []
    });
  }
}

/**
 * Sends a DELETE request to the Milestone collection and returns the response
 * DELETE is performed with respect to object id
 * @param req object representing the HTTP request
 * @param res object representing the HTTP response
 * @returns json formatted response with status code
 */
export async function deleteMilestone(req: Request, res: Response) {
  if (!req.body._id) {
    return res.status(BAD_REQUEST).json({
      message: 'DELETE failed: _id required',
      data: []
    });
  }

  const filter = {
    _id: req.body._id
  };

  try {
    const deleted = await Milestone.deleteOne(filter);
    return res.status(OK).json({
      message: 'DELETE successful',
      data: deleted
    });
  } catch (err) {
    return res.status(NOT_FOUND).json({
      message: 'DELETE failed: specified milestone does not exist',
      data: []
    });
  }
}