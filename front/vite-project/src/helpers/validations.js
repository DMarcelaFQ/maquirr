export const validateFields = (inputObject) => {

    const errors = {};

    if(!inputObject.email) {
        errors.email = "El campo email es requerido"
    } 
    
    if(!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(inputObject.email)) {
        errors.email = "No es un email válido"
    }

    if(!inputObject.password) {
        errors.password = "El campo contraseña es requerido"
    }

    return errors;
}

export const validateRegisterFields = (inputObject) => {

    const errors = {};

    if(!inputObject.email) {
        errors.email = "El campo email es requerido"
    } 
    
    if(!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(inputObject.email)) {
        errors.email = "No es un email válido"
    }

    if(!inputObject.password) {
        errors.password = "El campo contraseña es requerido"
    }

    if (!inputObject.name) {
        errors.name = "El campo nombre es requerido";
    } 
    
    if (!/^[a-zA-Z\s]+$/.test(inputObject.name)) {
        errors.name = "El nombre solo debe contener letras y espacios";
    }

    if (!inputObject.phone) {
        errors.phone = "El campo teléfono es requerido";
    } 
    
    if (!/^\d+$/.test(inputObject.phone)) {
        errors.phone = "El número de teléfono solo debe contener números";
    }

    if (!inputObject.birthdate) {
        errors.birthdate = "El campo fecha de nacimiento es requerido";
    } 
    
    if (isNaN(Date.parse(inputObject.birthdate))) {
        errors.birthdate = "La fecha de nacimiento no es válida";
    }

    return errors;

}

export const validateAppointmentSchedule = (inputObject) => {

    const errors = {};
    const now = new Date();
    const appointmentDateTime = new Date(`${inputObject.date}T${inputObject.time}`);
    
    // Validar si la fecha y hora son válidas
    if (!inputObject.date) {
        errors.date = "El campo día es requerido";
    } else if (isNaN(Date.parse(inputObject.date))) {
        errors.date = "La fecha no es válida";
    }

    if (!inputObject.time) {
        errors.time = "El campo hora es requerido";
    } else {
        // Validar que la cita no sea en el pasado ni a menos de 24 horas
        const oneDayInMs = 24 * 60 * 60 * 1000;
        if (appointmentDateTime < now) {
            errors.time = "No puedes agendar una cita en el pasado.";
        } else if (appointmentDateTime - now < oneDayInMs) {
            errors.time = "La cita debe agendarse con al menos 24 horas de antelación.";
        }
        
        // Validar horario de atención
        const dayOfWeek = appointmentDateTime.getDay(); // 0: domingo, 1: lunes, ..., 6: sábado
        const hour = appointmentDateTime.getHours();
        const minutes = appointmentDateTime.getMinutes();
        
        const isWeekday = dayOfWeek >= 1 && dayOfWeek <= 5; // Lunes a viernes
        const isSaturday = dayOfWeek === 6;

        if (isWeekday) {
            // Horario de lunes a viernes: 14:00 (2 p.m.) a 20:00 (8 p.m.)
            if (hour < 14 || hour > 20 || (hour === 20 && minutes > 0)) {
                errors.time = "Las citas solo se pueden agendar de lunes a viernes de 2 p.m. a 8 p.m.";
            }
        } else if (isSaturday) {
            // Horario del sábado: 08:00 (8 a.m.) a 12:00 (12 m.), y 14:00 (2 p.m.) a 18:00 (6 p.m.)
            const isMorningSlot = (hour >= 8 && hour < 12);
            const isAfternoonSlot = (hour >= 14 && hour < 18);
            if (!isMorningSlot && !isAfternoonSlot) {
                errors.time = "Las citas solo se pueden agendar los sábados de 8 a.m. a 12 m. y de 2 p.m. a 6 p.m.";
            }
        } else {
            // No se pueden agendar citas los domingos
            errors.time = "No puedes agendar citas los domingos.";
        }
    }

    return errors;
}