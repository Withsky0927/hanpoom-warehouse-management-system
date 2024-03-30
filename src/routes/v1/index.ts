const { Router } = require("express");

import pickingSlipsRoutes from "./picking-slips";

const router = Router();

router.use("/picking-slips", pickingSlipsRoutes);

export default router;
