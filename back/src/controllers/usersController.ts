import { Request, Response } from "express";

export const createUserController = async (req:Request, res:Response) => {
    try {
        res.status(201).send("successfully registered")
    } catch (error) {
        res.status(500).send("Could not register, something went wrong");
    }
}

export const getUserController = async (req:Request, res:Response) => {
    try {
        res.status(200).send("users")
    } catch (error) {
        res.status(500).send("can not show the users, something went wrong");
    }
}

export const getUserIdController = async (req:Request, res:Response) => {
    try {
        res.status(200).send("users")
    } catch (error) {
        res.status(500).send("can not show the users, something went wrong");
    }
}

export const loginUserController = async (req:Request, res:Response) => {
    try {
        res.status(200).send("users")
    } catch (error) {
        res.status(500).send("can not show the users, something went wrong");
    }
}

