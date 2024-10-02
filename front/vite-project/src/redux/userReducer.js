import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const localStorageUserId = localStorage.getItem("userId");

export const loginUser = createAsyncThunk("user/login", 
    async (userLoginData, {dispatch, rejectWithValue}) =>{
    try {
        const {data} = await axios.post(`http://localhost:3000/user/login`, userLoginData)
        dispatch(setUser(data.data));
    } catch (error) {
        return rejectWithValue(error);
    }
})

export const getAppointments = createAsyncThunk("appointments/getAppointment", 
    async (userId, {dispatch, rejectWithValue}) =>{
    try {
        const { data } = await axios.get(`http://localhost:3000/user/${userId}`);
        dispatch(setUserAppointments(data.data.appointments));
    } catch (error) {
        return rejectWithValue(error);
    }
})

export const cancelAppointment = createAsyncThunk("appointments/cancelAppointment", 
    async (appointmentId, {dispatch, rejectWithValue}) =>{
    try {
        await axios.put(`http://localhost:3000/appointments/cancel/${appointmentId}`);
        dispatch(cancelIdAppointment(appointmentId));
    } catch (error) {
        return rejectWithValue(error);
    }
})

export const postAppointment = createAsyncThunk("appointments/createAppointment", 
    async (values, {dispatch, rejectWithValue}) =>{
    try {
        await axios.post(`http://localhost:3000/appointments/schedule`, values);
        // dispatch(setUserAppointments(data.data.appointments));
    } catch (error) {
        return rejectWithValue(error);
    }
})


const userSlice = createSlice({
    name: "userReducer",
    initialState: {
        user: localStorageUserId || "",
        userAppointments: [],
    },
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
            localStorage.setItem("userId", action.payload.id);
        },
        setUserAppointments: (state, action) =>{
            state.userAppointments = action.payload;
        },
        cancelIdAppointment: (state, action) => {
            state.userAppointments = state.userAppointments.map((appointment) => 
                appointment.id === action.payload
                ? {...appointment, status: "cancelled"}
                : appointment
            )

        }

    },
})

export const { setUser, setUserAppointments, cancelIdAppointment} = userSlice.actions;
export default userSlice.reducer;