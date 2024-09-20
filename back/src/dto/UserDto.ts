export interface UserDto {
    name: string,
    email: string,
    phone: number,
    password: string,
    }

export interface UserLoginDto {
    email: string,
    password: string,
}