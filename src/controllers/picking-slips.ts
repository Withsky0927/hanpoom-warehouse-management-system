import { Request, Response } from 'express';

import { pickingSlipsService } from '../services';

const getPickingSlips = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const { page, limit, status } = request.query;

  const filter = {
    page: !page ? 1 : Number(page),
    limit: !limit ? 10 : Number(limit),
    status: !status ? null : String(status),
  };

  const result = await pickingSlipsService.getPickingSlips(filter);

  return response.status(200).json({
    success: true,
    data: result,
  });
};

export default { getPickingSlips };
