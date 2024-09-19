import {Router} from "express";
import usersRouter from "./usersRouter";
import appointmentsRouter from "./appointmentsRouter";

const router: Router = Router();

router.use("/users", usersRouter);
router.use("/sappointments", appointmentsRouter);


export default router;