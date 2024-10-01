import styles from "./Appointment.module.css"

const Appointment = ({id, date, time, status}) => {

    return(
        <div className={styles.container}>
            <div className={status === "active" ? styles.statusActive : styles.statusCancelled}>
                <span >{status}</span>
            </div>
            <div className={styles.details}>
                <p><strong>#</strong> <span>{id}</span></p>
                <p><strong>Fecha:</strong> <span>{date}</span></p>
                <p><strong>Hora:</strong> <span>{time}</span></p>
                <button className={styles.button} disabled={status !== "active"}>Cancelar</button>
            </div>
        </div>
    )
}

export default Appointment