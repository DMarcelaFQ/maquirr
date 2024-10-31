/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import axios from "axios";

export const UsersContext = createContext({
    user: "",
    userAppointments: [],
    loginUser: async () => {},
    registerUser: async () => {},
    logOutUser: () => {},
    getUserAppointments: async () => {},
    cancelAppointment: async () => {},
    scheduleAppointment: async () => {}
})

export const UsersProvider = ({ children }) => {

    const [user, setUser] = useState(localStorage.getItem("userId") || "")
    const [userAppointments, setUserAppoitments] = useState([])

    const loginUser = async( userLoginData) => {
        const response = await axios.post(`http://localhost:3000/user/login`, userLoginData)
        localStorage.setItem("userId", response.data.data.id)
        setUser(response.data.data.id)  
    }

    const registerUser = async( userRegisterData ) => {
        await axios.post(`http://localhost:3000/user/register`, userRegisterData)
    }

    const logOutUser = () => {
        localStorage.clear()
        setUser("")
        setUserAppoitments([])
    }

    const getUserAppointments = async(userId) => {
        const response = await axios.get(`http://localhost:3000/user/${userId}`);
        setUserAppoitments(response.data.data.appointments)
    }

    const cancelAppointment = async (appointmentId) => {
        await axios.put(`http://localhost:3000/appointments/cancel/${appointmentId}`);
        
        const userAppointmentUpdate = userAppointments.map((appointment) => {
            if(appointment.id === appointmentId){
                const appointmentUpdate = {...appointment, status: "cancelled"}
                return appointmentUpdate
            } else return appointment
        })
        setUserAppoitments(userAppointmentUpdate)
    }

    const scheduleAppointment = async(appointmentValues) => {
        const appointmentData = {
            ... appointmentValues,
            userId: user
        }
        await axios.post(`http://localhost:3000/appointments/schedule`, appointmentData)
    }

    const value = {
        user,
        userAppointments,
        loginUser,
        registerUser,
        logOutUser,
        getUserAppointments,
        cancelAppointment,
        scheduleAppointment
    }


    return (
        <UsersContext.Provider value = {value}>
            {children}
        </UsersContext.Provider>

    )
}