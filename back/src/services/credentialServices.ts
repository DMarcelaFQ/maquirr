import { ICredenntials } from "../interfaces/ICredentials"


const credentialsList: ICredenntials[] = []
let id: number = 1;

export const getCredentialService =  async (email: string, password: string): Promise<number> => {
    const newCredentials: ICredenntials = {
        id: id++,
        email,
        password
    }

    credentialsList.push(newCredentials)
    return newCredentials.id
}


export const checkCredentials = async (email:string, password: string): Promise<number|undefined> => {
    const foundCredentials = await credentialsList.find(credentials => credentials.email === email);

    return (!foundCredentials || foundCredentials.password !== password)? undefined: foundCredentials.id;
}