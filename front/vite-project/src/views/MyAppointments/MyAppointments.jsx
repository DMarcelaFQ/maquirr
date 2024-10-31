/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect } from "react";
import Appointment from "../../components/Appointment/Appointment";
import styles from "./MyAppointments.module.css";
import { UsersContext } from "../../context/UsersContext";


const MyAppointments = () => {

    const { getUserAppointments, user, userAppointments } = useContext(UsersContext);   

    useEffect (()=> {
        getUserAppointments(user)

    }, []);
    

    return (
        <div className={styles.container}> 
            <div className={styles.titleContainer}> 
            <h1 className={styles.title}>Mis reservas:  </h1>
            </div>
            <div className={styles.cardsContainer}>
                {userAppointments.length > 0 ? (userAppointments.map(appointment =>
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