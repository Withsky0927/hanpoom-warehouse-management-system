/* eslint-disable consistent-return */
import { Request, Response, NextFunction } from "express";

export default (handler: CallableFunction) =>
  async (
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<void | NextFunction> => {
    try {
      await handler(request, response, next);
    } catch (error) {
      return next(error);
    }
  };
