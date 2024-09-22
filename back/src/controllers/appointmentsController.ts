import { Request, Response } from "express";
import { AppointmentDto } from "../dto/AppointmentDto";
import { cancelAppointmentService, createAppointmentService, getAppointmentbyIdService, getAppointmentService } from "../services/appointmentServices";

export const getAppointmentController = async (req:Request, res:Response): Promise<void> => {
    try {
        const getAppointment = await getAppointmentService();
        res.status(200).json({
            message: "Get all the Appointment",
            data: getAppointment
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
    try {
        const getAppointmentbyId = await getAppointmentbyIdService(parseInt(id));
        res.status(200).json({
            message:`Get the specific appointment data ${id}`,
            data: getAppointmentbyId
        });
    } catch (error) {
        res.status(400).json({
            message: "Couldn't get Appointment information. Something went wrong",
            details: (error as Error).message
        });
    }
} 

export const createAppointmentController = async (req:Request<unknown, unknown, AppointmentDto>, res:Response): Promise<void> => {
    try {
        const createAppointment = await createAppointmentService(req.body);
        res.status(200).json({
            message:"Appointment successfully created",
            data: createAppointment
        });
    } catch (error) {
        res.status(400).json({
            message: "Couldn't create an appointment. Something went wrong",
            details: (error as Error).message           
        });
    }
}


export const cancelAppointmentbyIdController = async (req:Request<{ id: string}>, res:Response): Promise<void> => {
    const {id} = req.params;
    try {
        const cancelAppointment = await cancelAppointmentService(parseInt(id));
        res.status(200).json({
            message:"Appointment cancelled",
            data: cancelAppointment
        });
    } catch (error) {
        res.status(400).json({
            message: "Couldn't cancel the Appointment. Something went wrong",
            details: (error as Error).message
        });
    }
}
