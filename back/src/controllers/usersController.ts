import { Request, Response } from "express";
import { UserDto, UserLoginDto } from "../dto/UserDto";
import { getUserbyIdService, getUserService, registerUserService } from "../services/userServices";

export const getUserController = async (req:Request, res:Response): Promise<void> => {
    try {
        const getUser = await getUserService();
        res.status(200).json({
            data: getUser
        });
    } catch (error) {
        res.status(400).json({
            message: "Couldn't get the users data. Something went wrong",
            details: error
        });
    }
}

export const getUserbyIdController = async (req:Request<{ id: string}>, res:Response): Promise<void> => {
    try {
        const {id} = req.params;
        const getUserbyID = await getUserbyIdService(parseInt(id));
        res.status(200).json({
            data: getUserbyID
        });
    } catch (error) {
        res.status(400).json({
            message: "Couldn't get the user data. Something went wrong",
            details: error
        });
    }
}

export const registerUserController = async (req: Request<unknown, unknown, UserDto>, res: Response): Promise<void> => {
    const registerUser = await registerUserService(req.body);
    try {
        res.status(200).json({
            message:"User successfully registered",
            data: registerUser
        });
    } catch (error) {
        res.status(400).json({
            message: "Couldn't register. Something went wrong",
        });
    }
}

export const loginUserController = async (req: Request<unknown, unknown, UserLoginDto>, res: Response): Promise<void> => {
    //const loginrUser = await loginUserService(req.body);
    try {
        res.status(200).json({
            message:"Login successfully",
            data: ["here is the data"]
        });
    } catch (error) {
        res.status(400).json({
            message: "Couldn't login. Something went wrong",
            details: error
        });
    }
}

