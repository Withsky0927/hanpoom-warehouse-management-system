const { Router } = require('express');

import {
  tryCatchHandlerMiddleware,
  validateMiddleware,
} from '../../middlewares';

import { pickingSlipsValidation } from '../../validators';
import { pickingSlipsController } from '../../controllers';

const router = Router();

router.get(
  '/',
  pickingSlipsValidation.getPickingSlips,
  validateMiddleware,
  tryCatchHandlerMiddleware(pickingSlipsController.getPickingSlips)
);

export default router;
