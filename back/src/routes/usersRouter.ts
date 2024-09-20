import {Request, Response, Router} from "express";

import { registerUserController, getUserController, getUserbyIdController, loginUserController } from "../controllers/usersController";
import { UserDto, UserLoginDto } from "../dto/UserDto";
const usersRouter: Router = Router();

usersRouter.get("/", (req: Request, res: Response) => getUserController(req, res));
usersRouter.get("/:id", (req: Request<{id: string}>, res: Response) => getUserbyIdController(req, res));
usersRouter.post("/register", (req: Request<unknown, unknown, UserDto>, res: Response) => registerUserController(req, res));
usersRouter.post("/login", (req: Request<unknown, unknown, UserLoginDto>, res: Response) => loginUserController(req, res))

export default usersRouter;