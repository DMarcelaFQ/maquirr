export interface IAppointments {
    id: number,
    date: Date,
    time: Date,
    userID: number,
    status: status,
}

enum status {
    active = "active",
    cacelled = "cancelled"
}