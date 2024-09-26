import { DataSource } from "typeorm";
import { DB_HOST, DB_LOGGING, DB_NAME, DB_PASSWORD, DB_PORT, DB_SYNC, DB_USER } from "./envs";
import { User } from "../entities/UserEntity";
import { Credential } from "../entities/CredentialEntity";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: DB_HOST,
    port: DB_PORT,
    username: DB_USER,
    password: DB_PASSWORD,
    database: DB_NAME,
    synchronize: DB_SYNC,
    logging: DB_LOGGING,
    dropSchema: true,
    entities: ["src/entities/**/*.ts"],
})

export const UserModel = AppDataSource.getRepository(User)
export const CredentialModel = AppDataSource.getRepository(Credential)