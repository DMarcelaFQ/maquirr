import {Router} from "express";
import { cancelAppointmentController, createAppointmentController, getAppointmentController, getOneAppointmentController,  } from "../controllers/appointmentsController";

const shiftsRouter: Router = Router();

shiftsRouter.get("/appointments", getAppointmentController);
shiftsRouter.get("/appointments", getOneAppointmentController);
shiftsRouter.post("/appointments/schedule", createAppointmentController);
shiftsRouter.put("/appointments/cancel", cancelAppointmentController);

export default shiftsRouter;