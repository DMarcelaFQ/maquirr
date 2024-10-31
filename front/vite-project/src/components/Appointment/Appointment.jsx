/* eslint-disable react/prop-types */
import styles from "./Appointment.module.css"
import Swal from "sweetalert2"
import { useContext } from "react"
import { UsersContext } from "../../context/UsersContext"


const Appointment = ({id, date, time, status}) => {

    const { cancelAppointment } = useContext(UsersContext)

    const handleCancel = () => {
        Swal.fire({
            title: '¿Estás seguro de cancelar la reserva?',
            text: 'No podremos recuperar tu reserva, deberás reservar una nueva cita.',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, cancelar',
            cancelButtonText: 'No, mantener reserva'
        }).then(async (result) => {
            if (result.isConfirmed) {
        try {
            await cancelAppointment(id);
            Swal.fire({
                icon: "warning",
                iconColor:"red",
                title: "Reserva cancelada con exito"
            })
        } catch (error) {
            Swal.fire({
                icon: "error",
                title: "Error al cancelar la reserva. Intenta de nuevo",
                text: error.message
            });
        }
        }
    });
    }   

    return(
        <div className={styles.container}>
            <div className={status === "active" ? styles.statusActive : styles.statusCancelled}>
                <span >{status}</span>
            </div>
            <div className={styles.details}>
                <p><strong>#</strong> <span>{id}</span></p>
                <p><strong>Fecha:</strong> <span>{date}</span></p>
                <p><strong>Hora:</strong> <span>{time}</span></p>
                <button 
                className={styles.button} 
                disabled={status !== "active"}
                onClick={handleCancel}>Cancelar</button>
            </div>
        </div>
    )
}


export default Appointment