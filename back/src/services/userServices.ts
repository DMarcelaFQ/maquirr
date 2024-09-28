import { AppDataSource } from "../config/data-source";
import { UserDto, UserloggedDto, UserLoginDto } from "../dto/UserDto";
import { User } from "../entities/UserEntity";
import { UserRepository } from "../repositories/UserRepository";
import { checkCredentials, getCredentialService } from "./credentialServices";

export const registerUserService = async (userData: UserDto): Promise<User> => {
    
    const result = await AppDataSource.transaction( async (entityManager) => {

        const createCredential =  await getCredentialService(entityManager, userData.email, userData.password)

        const newUser: User = entityManager.create(User, {
            name: userData.name,
            email: userData.email,
            birthdate: new Date(userData.birthdate),
            phone:  userData.phone,
            credentials: createCredential
        })
        await entityManager.save(newUser)
        return newUser
    })

    return result

}

export const getUserService = async(): Promise<User[]> => {
    const allUsers: User[] = await UserRepository.find();
    return allUsers
}

export const getUserbyIdService = async(id:number): Promise<User> => {
    const userFound = await UserRepository.findOne({
        where: {id},
        relations: ["appointments"]
    });
    if(!userFound) throw new Error(`the user with id: ${id} was not found`)
    else return userFound
}

export const loginUserService = async(user:UserLoginDto): Promise<UserloggedDto> => {
    
    const userLoged: number = await checkCredentials(user.email, user.password)

    const userFind = await UserRepository.findOne({
        where:{
            credentials: {id: userLoged}
        }})
    return {
        name: userFind?.name ?? "",
    }
} 