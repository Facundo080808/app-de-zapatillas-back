import { Router } from "express";
import usersRouter from "./usersRoute.mjs";
import itemsRouter from "./itemsRoute.mjs";
const router = Router();



router.use("/users", usersRouter);
router.use("/items", itemsRouter);


export default router;
