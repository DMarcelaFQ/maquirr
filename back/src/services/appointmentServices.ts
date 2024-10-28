import { AppointmentDto } from "../dto/AppointmentDto";
import { Appointment } from "../entities/AppointmentEntity";
import { status } from "../interfaces/IAppointment";
import { AppointmentRepository } from "../repositories/AppointmentRepository";
import { getUserbyIdService } from "./userServices";

// const appointments: Appointment[] = [];

// const id: number = 1;

export const createAppointmentService = async (appointmentData: AppointmentDto): Promise<Appointment> => {
    
    await getUserbyIdService(appointmentData.userId);
    AppointmentRepository.validateAllowAppointment(appointmentData.date, appointmentData.time)
    await AppointmentRepository.validateExistingAppointment(appointmentData.userId, appointmentData.date, appointmentData.time)
    
    const newAppointment: Appointment = AppointmentRepository.create({
        date: appointmentData.date, 
        time: appointmentData.time,
        user: {id: appointmentData.userId,}  
    })
    return await AppointmentRepository.save(newAppointment)
}

export const getAppointmentService = async(): Promise<Appointment[]> => {
    const allAppointments: Appointment[] = await AppointmentRepository.find()
    if(allAppointments.length === 0) {throw new Error(`No hay reservas para mostrar`)}
    return allAppointments
}

export const getAppointmentbyIdService = async(id:number): Promise<Appointment> => {
    const appointmentById = await AppointmentRepository.findOne({where: {id}});
    if (!appointmentById) throw new Error(`La reserva no fue encontrada`);
    return appointmentById
}

export const cancelAppointmentService = async (id:number): Promise<void> => {
    const appointmentToCancel = await AppointmentRepository.findOne({where: {id}});

    if(!appointmentToCancel) throw new Error(`No se pudo cancelar. La reserva no fue encontrada`);
    if(appointmentToCancel.status !== status.active) throw new Error("La reserva ya fue cancelada con anterioridad");
    
    appointmentToCancel.status = status.cacelled;
    await AppointmentRepository.save(appointmentToCancel)
}