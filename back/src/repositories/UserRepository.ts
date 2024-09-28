import { AppDataSource } from "../config/data-source";
import { User } from "../entities/UserEntity";


export const UserRepository = AppDataSource.getRepository(User)