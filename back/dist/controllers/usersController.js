"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginUserController = exports.registerUserController = exports.getUserbyIdController = exports.getUserController = void 0;
const getUserController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        //const getUser = await getUserService();
        res.status(200).json({
            message: "Get all the users data",
            data: ["here is the data"]
        });
    }
    catch (error) {
        res.status(400).json({
            message: "Something went wrong",
            details: error
        });
    }
});
exports.getUserController = getUserController;
const getUserbyIdController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    //const getUserbyID = await getUserbyIDService(id);
    try {
        res.status(200).json({
            message: `Get the specific user data ${id}`,
            data: ["here is the data"]
        });
    }
    catch (error) {
        res.status(400).json({
            message: "Something went wrong",
            details: error
        });
    }
});
exports.getUserbyIdController = getUserbyIdController;
const registerUserController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //const registerUser = await registerUserService(req.body);
    try {
        res.status(200).json({
            message: "User successfully registered",
            data: ["here is the data"]
        });
    }
    catch (error) {
        res.status(400).json({
            message: "Something went wrong",
            details: error
        });
    }
});
exports.registerUserController = registerUserController;
const loginUserController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //const loginrUser = await loginUserService(req.body);
    try {
        res.status(200).json({
            message: "Login successfully",
            data: ["here is the data"]
        });
    }
    catch (error) {
        res.status(400).json({
            message: "Something went wrong",
            details: error
        });
    }
});
exports.loginUserController = loginUserController;
