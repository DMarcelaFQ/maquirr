import { AppointmentDto } from "../dto/AppointmentDto";
import { IAppointments, status } from "../interfaces/IAppointment";
import { getUserbyIdService } from "./userServices";

let appointments: IAppointments[] = [];

let id: number = 1;

export const createAppointmentService = async (appointmentData: AppointmentDto): Promise<IAppointments> => {
    
    const findUser = await getUserbyIdService(appointmentData.userId);
    if (!findUser) {
        throw new Error(`User not found`);
    }

    const existingAppointment = await appointments.find(app => 
        app.userId === appointmentData.userId 
        && app.time === appointmentData.time 
        && app.date === appointmentData.date);
    if(existingAppointment) throw new Error(`User with ID ${appointmentData.userId} already has an appointment at the same date and time`);

    const newAppointment: IAppointments = {
        id: id ++,
        date: appointmentData.date,
        time: appointmentData.time,
        userId: appointmentData.userId,
        status: status.active
    }
    appointments.push(newAppointment);
    return newAppointment
}

export const getAppointmentService = async(): Promise<IAppointments[]> => {
    return await appointments;
}

export const getAppointmentbyIdService = async(id:number): Promise<IAppointments> => {
    const appointmentById = appointments.find(app => app.id === id);
    if (!appointmentById) throw new Error(`User not found`);
    return appointmentById
}

export const cancelAppointmentService = async (id:number): Promise<IAppointments | undefined> => {
    const appointmentToCancel = await appointments.find(app => app.id === id);

    if(!appointmentToCancel) throw new Error(`Couldn't cancel, Appointment not found`);
    
    if(appointmentToCancel.status !== status.active) throw new Error("Appointment already cancelled");
    
    appointmentToCancel.status = status.cacelled;

    return appointmentToCancel;
}