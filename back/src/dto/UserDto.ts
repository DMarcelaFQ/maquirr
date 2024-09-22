export interface UserDto {
    name: string,
    email: string,
    phone: number,
    birthdate: Date,
    password: string,
    }

export interface UserLoginDto {
    email: string,
    password: string,
}