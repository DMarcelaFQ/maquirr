import { Request, Response } from "express";
import { UserDto, UserLoginDto } from "../dto/UserDto";
import { getUserbyIdService, loginUserService, registerUserService } from "../services/userServices";


export const getUserbyIdController = async (req:Request<{ id: string}>, res:Response): Promise<void> => {
    try {
        const {id} = req.params;
        const getUserbyID = await getUserbyIdService(parseInt(id, 10));
        res.status(200).json({
            data: getUserbyID
        });
    } catch (error) {
        res.status(404).json({
            message: "Couldn't get the user data. Something went wrong",
            details: (error as Error).message
        });
    }
}

export const registerUserController = async (req: Request<unknown, unknown, UserDto>, res: Response): Promise<void> => {
    try {
        
        await registerUserService(req.body);
        res.status(201).json({
            message:"User successfully registered",
        });
    } catch (error) {
        res.status(400).json({
            message: "Couldn't register. Something went wrong",
            details: (error as Error).message
        });
    }
}

export const loginUserController = async (req: Request<unknown, unknown, UserLoginDto>, res: Response): Promise<void> => {
    try {
        const userLoggedResult = await loginUserService(req.body);
        res.status(200).json({
            message:"Login successfully",
            data: userLoggedResult
        });
    } catch (error) {
        res.status(400).json({
            message: "Couldn't login. Something went wrong",
            details: (error as Error).message
        });
    }
}


// export const getUserController = async (req:Request, res:Response): Promise<void> => {
//     try {
//         const getUser = await getUserService();
//         res.status(200).json({
//             data: getUser
//         });
//     } catch (error) {
//         res.status(400).json({
//             message: "Couldn't get the users data. Something went wrong",
//         });
//     }
// }