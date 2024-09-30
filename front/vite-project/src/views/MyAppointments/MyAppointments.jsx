import { useState } from "react"
import myAppointments from "../../helpers/myAppointments"
import Appointment from "../../components/Appointment/Appointment"
import styles from "./MyAppointments.module.css"

const MyAppointments = () => {

    const [appointments, setAppointments] = useState(myAppointments)

    return (
        <div className={styles.container}> 
            <div className={styles.titleContainer}> 
            <h1 className={styles.title}>Mis reservas: </h1>
            </div>
            <div className={styles.cardsContainer}>
                {appointments && appointments.length > 0 ? (appointments.map(appointment =>
                    <Appointment
                        key={appointment.id}
                        id={appointment.id}
                        date={appointment.date}
                        time={appointment.time}
                        status={appointment.status}
                    />                   
                )) : (
                    <h1>No hay turnos para mostrar</h1>
                     )
                }
            </div>
        </div>
    )
}

export default MyAppointments