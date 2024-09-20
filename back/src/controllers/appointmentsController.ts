import { Request, Response } from "express";
import { AppointmentDto } from "../dto/AppointmentDto";

export const getAppointmentController = async (req:Request, res:Response): Promise<void> => {
    try {
        //const getAppointment = await getAppointmentService();
        res.status(200).json({
            message: "Get all the Appointment",
            data: ["All the Appointments"]
        });
    } catch (error) {
        res.status(400).json({
            message: "Couldn't get the appointmets. Something went wrong",
            details: error
        });
    }
} 

export const getAppointmentbyIdController = async (req:Request<{ id: string}>, res:Response): Promise<void> => {
    const {id} = req.params;
    //const getAppointmentbyId = await getAppointmentbyIdService(id);
    try {
        res.status(200).json({
            message:`Get the specific user data ${id}`,
            data: ["here is the specific appointment details"]
        });
    } catch (error) {
        res.status(400).json({
            message: "Couldn't get Appointment information. Something went wrong",
            details: error
        });
    }
} 

export const createAppointmentController = async (req:Request<unknown, unknown, AppointmentDto>, res:Response): Promise<void> => {
    //const createAppointment = await createAppointmentService(req.body);
    try {
        res.status(200).json({
            message:"Appointment successfully created",
            data: ["here is the Appointment details"]
        });
    } catch (error) {
        res.status(400).json({
            message: "Couldn't create an appointment. Something went wrong",
            details: error
        });
    }
}


export const cancelAppointmentbyIdController = async (req:Request<{ id: string}>, res:Response): Promise<void> => {
    const {id} = req.params;
    //const cancelAppointment = await cancelAppointmentService(id);
    try {
        res.status(200).json({
            message:"Appointment cancelled",
            data: ["here is the cancelled appointment details"]
        });
    } catch (error) {
        res.status(400).json({
            message: "Couldn't cancel the Appointment. Something went wrong",
            details: error
        });
    }
}
