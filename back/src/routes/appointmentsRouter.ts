import {Request, Response, Router} from "express";
import { cancelAppointmentbyIdController, createAppointmentController, getAppointmentbyIdController, getAppointmentController,  } from "../controllers/appointmentsController";
import { AppointmentDto } from "../dto/AppointmentDto";

const shiftsRouter: Router = Router();

shiftsRouter.get("/", (req: Request, res: Response) => getAppointmentController(req, res));
shiftsRouter.get("/:id", (req: Request<{ id: string}>, res: Response) => getAppointmentbyIdController(req, res));
shiftsRouter.post("/schedule", (req:Request<unknown, unknown, AppointmentDto>, res:Response) => createAppointmentController(req, res));
shiftsRouter.put("/cancel/:id", (req: Request<{ id: string}>, res: Response) => cancelAppointmentbyIdController(req, res));

export default shiftsRouter;