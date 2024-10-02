import { useEffect, useState } from "react";
import Appointment from "../../components/Appointment/Appointment";
import styles from "./MyAppointments.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getAppointments } from "../../redux/userReducer";


const MyAppointments = () => {

    const dispatch = useDispatch();
    const userId = useSelector((state) => state.user);
    const userAppointments = useSelector((state) => state.userAppointments);

    useEffect (()=> {
        dispatch(getAppointments(userId))
    }, [dispatch]);
    

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