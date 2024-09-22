import { UserDto, UserLoginDto } from "../dto/UserDto";
import { IUser } from "../interfaces/IUser";
import { checkCredentials, getCredentialService } from "./credentialServices";

let users: IUser[] = [];

let id: number = 1;

export const registerUserService = async (userData: UserDto): Promise<IUser> => {
    
    const createCredential =  await getCredentialService(userData.email, userData.password)

    const newUser: IUser = {
        id: id ++,
        name: userData.name,
        email: userData.email,
        birthdate: new Date(userData.birthdate),
        phone:  userData.phone,
        password: userData.password,
        credentialsId: createCredential
    }
    users.push(newUser);
    return newUser
}

export const getUserService = async(): Promise<IUser[]> => {
    return await users;
}

export const getUserbyIdService = async(id:number): Promise<IUser|undefined> => {
    const userById = users.find(user => user.id === id);
    return userById || undefined;
}

export const loginUserService = async(userData:UserLoginDto): Promise<IUser|undefined> => {
    const userLogin = await checkCredentials(userData.email, userData.password);
}