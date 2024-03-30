import { Request, Response, NextFunction } from 'express';

export default (
  err: any,
  _request: Request,
  response: Response,
  _next: NextFunction
): Response => {
  console.log(err);

  return response
    .status(500)
    .json({ status: false, message: 'Internal server error.' });
};
