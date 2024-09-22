export interface IAppointments {
    id: number,
    date: Date,
    time: string,
    userId: number,
    status: status,
}

export enum status {
    active = "active",
    cacelled = "cancelled"
}