import { EntityManager } from "typeorm";
import { CredentialModel } from "../config/data-source";
import { Credential } from "../entities/CredentialEntity";
import bcrypt from "bcrypt"


// const credentialsList: Credential[] = []

export const getCredentialService =  async (entityManager: EntityManager, email: string, password: string): Promise<Credential> => {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds)

   const credential: Credential = entityManager.create(Credential, {
    email,
    password: hashedPassword
   })

   const credentials = await entityManager.save(credential)
   return credentials
}


export const checkCredentials = async (email:string, password: string): Promise<number> => {
    
    const userfound = await CredentialModel.findOne({
        where: {email}
    });
    if(!userfound) throw Error ("User not found")
    
    const passwordMatch: Boolean = await bcrypt.compare(password, userfound.password);
    if (!passwordMatch) {
        throw new Error("Incorrect password");
    }
    return userfound.id
}