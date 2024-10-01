import { useEffect, useState } from "react"
import Appointment from "../../components/Appointment/Appointment"
import styles from "./MyAppointments.module.css"
import axios from "axios"

const MyAppointments = () => {

    const [appointments, setAppointments] = useState([])
    const [loading, setLoading] = useState(true);

    useEffect (()=> {
        axios.get("http://localhost:3000/appointments/")
        .then ((res) => {
            setAppointments(res.data.data)
            setTimeout(() => {
                setLoading(false); 
            }, 3000)
        })
        .catch((error) => {
            console.log(error)
            setLoading(false)
        });
    }, [])

    return (
        <div className={styles.container}> 
            <div className={styles.titleContainer}> 
            <h1 className={styles.title}>Mis reservas:  </h1>
            </div>
            <div className={styles.cardsContainer}>
                {loading ? (
                    <div className={styles.spinner}></div>
                ) :appointments && appointments.length > 0 ? (appointments.map(appointment =>
                    <Appointment
                        key={appointment.id}
                        id={appointment.id}
                        date={appointment.date}
                        time={appointment.time}
                        status={appointment.status}
                    />                   
                )) : (
                    <h1>No hay reservas</h1>
                     )
                }
            </div>
        </div>
    )
}

export default MyAppointments