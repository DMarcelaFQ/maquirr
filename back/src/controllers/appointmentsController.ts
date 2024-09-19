import { Request, Response } from "express";

export const createAppointmentController = async (req:Request, res:Response) => {
    try {
        res.status(201).send("shift successfully scheduled")
    } catch (error) {
        res.status(500).send("Could not schedule, something went wrong");
    }
}

export const getAppointmentController = async (req:Request, res:Response) => {
    try {
        res.status(200).send("Shifts")
    } catch (error) {
        res.status(500).send("can not show the shifts, something went wrong");
    }
} 

export const cancelAppointmentController = async (req:Request, res:Response) => {
    try {
        res.status(200).send("Shift deleted")
    } catch (error) {
        res.status(500).send("couldn delete the shift, something went wrong");
    }
}

export const getOneAppointmentController = async (req:Request, res:Response) => {
    try {
        res.status(200).send("Shifts")
    } catch (error) {
        res.status(500).send("can not show the shifts, something went wrong");
    }
} 