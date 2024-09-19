import {Router} from "express";

import { createUserController, getUserController, getUserIdController, loginUserController } from "../controllers/usersController";
const usersRouter: Router = Router();

usersRouter.get("/users", getUserController);
usersRouter.get("/users/:id", getUserIdController);
usersRouter.post("/users/register", createUserController);
usersRouter.post("/users/login", loginUserController)

export default usersRouter;