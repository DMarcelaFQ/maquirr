import { useDispatch } from "react-redux"
import styles from "./Appointment.module.css"
import Swal from "sweetalert2"
import { cancelAppointment } from "../../redux/userReducer"

const Appointment = ({id, date, time, status}) => {

    const dispatch = useDispatch()
    const handleCancel = async () => {
        try {
            await dispatch(cancelAppointment(id)).unwrap();
            Swal.fire({
                icon: "warning",
                iconColor:"red",
                title: "Reserva cancelada con exito"
            })
        } catch (error) {
            Swal.fire({
                icon: "error",
                title: "Error al cancelar la reserva. Intente de nuevo"
            })
        }
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