import { query } from 'express-validator';

import { Enums } from '../constant';

const getPickingSlips = [
  query('page')
    .optional()
    .isNumeric()
    .withMessage('Page must be a number')
    .bail()
    .toInt(),
  query('limit')
    .optional()
    .isNumeric()
    .withMessage('Limit must be a number')
    .bail()
    .toInt(),
  query('status')
    .optional()
    .bail()
    .isString()
    .withMessage('Status must be a string.')
    .bail()
    .isIn([...Object.values(Enums.SlipStatus)])
    .withMessage(
      `Status filter must be either ${Object.values(Enums.SlipStatus)}`
    )
    .bail(),
];

export default { getPickingSlips };
