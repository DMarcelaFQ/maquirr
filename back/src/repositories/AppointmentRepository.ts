import { differenceInHours, getDay, getHours, isBefore, isSaturday, isWithinInterval } from "date-fns";
import { AppDataSource } from "../config/data-source";
import { Appointment } from "../entities/AppointmentEntity";


export const AppointmentRepository = AppDataSource.getRepository(Appointment).extend({

    validateAllowAppointment: function(date:Date, time:string): void {

        const appointmentDate = typeof date === 'string' ? new Date(date) : date;

        const appointmentDateTime = new Date(`${appointmentDate.toISOString().split('T')[0]}T${time}`);

        const currentDateTime = new Date();

        if (isBefore(appointmentDateTime, currentDateTime)) {
            throw new Error('Appointments cannot be scheduled in the past.');
        }

        const hoursDifference = differenceInHours(appointmentDateTime, currentDateTime);
        if (hoursDifference < 24) {
            throw new Error('Appointments must be scheduled at least 24 hours in advance.');
        }

        const day: number = getDay(appointmentDateTime); 
        const hour: number = getHours(appointmentDateTime); 

        if (day >= 1 && day <= 5) { // Lunes a viernes
            if (hour < 14 || hour >= 20) { // Entre 2 p.m. y 8 p.m.
                throw new Error('Appointments on weekdays must be between 2 p.m. and 8 p.m.');
            }
        } else if (isSaturday(appointmentDateTime)) { // Sábado
            if (!isWithinInterval(appointmentDateTime, { // 8-12pm
                    start: new Date(appointmentDateTime.setHours(8, 0)), 
                    end: new Date(appointmentDateTime.setHours(12, 0)) 
                }) && !isWithinInterval(appointmentDateTime, { // 2pm-6pm
                    start: new Date(appointmentDateTime.setHours(14, 0)), 
                    end: new Date(appointmentDateTime.setHours(18, 0)) 
                })) {
                throw new Error('Appointments on Saturdays must be between 8 a.m. and 12 p.m. or 2 p.m. and 6 p.m.');
            }
        } else {
            throw new Error('Appointments can only be scheduled from Monday to Saturday.');
        }

    },
    
    
    validateExistingAppointment: async function(userId: number, date:Date, time: string): Promise<void> {

        const appointmentFound = await this.findOne({
            where: { user: {id: userId}, date:date, time: time}
        })
        if(appointmentFound) throw new Error(`User with ID ${userId} already has an appointment at the same date and time`)
    }
})